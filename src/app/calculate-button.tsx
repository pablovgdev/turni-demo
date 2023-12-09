'use client'

import { Context } from '@/app/context'
import { useContext } from 'react'

export default function CalculateButton() {
	const {
		nurse1Calendar,
		setNurse1Calendar,
		nurse2Calendar,
		setNurse2Calendar,
		nurse3Calendar,
		setNurse3Calendar,
		setNursesOwedDays
	} = useContext(Context)

	function calculateCalendars() {
		const nurse1WorkDays = nurse1Calendar.filter((day) => day.work).length
		const nurse2WorkDays = nurse2Calendar.filter((day) => day.work).length
		const nurse3WorkDays = nurse3Calendar.filter((day) => day.work).length

		for (let day = 1; day < 28; day++) {
			const nurse1Day = nurse1Calendar[day - 1]
			const nurse2Day = nurse2Calendar[day - 1]
			const nurse3Day = nurse3Calendar[day - 1]

			if (nurse1Day.work && nurse1Day.free) {
				if (!nurse2Day.work && !nurse2Day.free) {
					nurse1Day.work = false
					nurse2Day.work = true
				} else if (!nurse3Day.work && !nurse3Day.free) {
					nurse1Day.work = false
					nurse3Day.work = true
				}
			}

			if (nurse2Day.work && nurse2Day.free) {
				if (!nurse1Day.work && !nurse1Day.free) {
					nurse2Day.work = false
					nurse1Day.work = true
				} else if (!nurse3Day.work && !nurse3Day.free) {
					nurse2Day.work = false
					nurse3Day.work = true
				}
			}

			if (nurse3Day.work && nurse3Day.free) {
				if (!nurse1Day.work && !nurse1Day.free) {
					nurse3Day.work = false
					nurse1Day.work = true
				} else if (!nurse2Day.work && !nurse2Day.free) {
					nurse3Day.work = false
					nurse2Day.work = true
				}
			}
		}

		setNurse1Calendar([...nurse1Calendar].map((day) => ({ ...day })))
		setNurse2Calendar([...nurse2Calendar].map((day) => ({ ...day })))
		setNurse3Calendar([...nurse3Calendar].map((day) => ({ ...day })))

		const owedDays = {
			nurse1: nurse1WorkDays - nurse1Calendar.filter((day) => day.work).length,
			nurse2: nurse2WorkDays - nurse2Calendar.filter((day) => day.work).length,
			nurse3: nurse3WorkDays - nurse3Calendar.filter((day) => day.work).length
		}

		setNursesOwedDays(owedDays)
	}

	return (
		<button
			className='bg-yellow-400 text-white px-6 py-2'
			onClick={calculateCalendars}
		>
			Calcular
		</button>
	)
}
