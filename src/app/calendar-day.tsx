'use client'

import { Context } from '@/app/context'
import { get } from 'http'
import { useContext } from 'react'

type CalendarDayProps = {
	dayNumber: number
}

export default function CalendarDay({ dayNumber }: CalendarDayProps) {
	const {
		calendarMode,
		nurse,
		nurse1Calendar,
		setNurse1Calendar,
		nurse2Calendar,
		setNurse2Calendar,
		nurse3Calendar,
		setNurse3Calendar
	} = useContext(Context)

	function getCalendar() {
		return nurse === 'Enfermera 1'
			? nurse1Calendar
			: nurse === 'Enfermera 2'
			? nurse2Calendar
			: nurse3Calendar
	}

	function getDay() {
		const calendar = getCalendar()
		return calendar[dayNumber - 1]
	}

	function setDay() {
		const calendar = getCalendar()
		const day = calendar[dayNumber - 1]

		if (calendarMode === 'Planilla actual') {
			day.work = !day.work
		} else if (calendarMode === 'Planilla deseada') {
			day.free = !day.free
		}

		switch (nurse) {
			case 'Enfermera 1':
				setNurse1Calendar([...calendar].map((day) => ({ ...day })))
				break
			case 'Enfermera 2':
				setNurse2Calendar([...calendar].map((day) => ({ ...day })))
				break
			case 'Enfermera 3':
				setNurse3Calendar([...calendar].map((day) => ({ ...day })))
				break
		}
	}

	function getBgColor() {
		const day = getDay()

		if (calendarMode === 'Planilla actual') {
			return day.work ? 'bg-blue-200' : 'bg-white'
		} else if (calendarMode === 'Planilla deseada') {
			return day.free ? 'bg-green-200' : 'bg-white'
		}
	}

	return (
		<div
			className={`border border-gray-100 p-6 text-center cursor-pointer ${getBgColor()}`}
			onClick={setDay}
		>
			<div>{dayNumber}</div>
		</div>
	)
}
