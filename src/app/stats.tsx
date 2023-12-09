'use client'

import { Context } from '@/app/context'
import { useContext } from 'react'

export default function Stats() {
	const { nurse, nurse1Calendar, nurse2Calendar, nurse3Calendar, nursesOwedDays } =
		useContext(Context)

	function getCalendar() {
		return nurse === 'Enfermera 1'
			? nurse1Calendar
			: nurse === 'Enfermera 2'
			? nurse2Calendar
			: nurse3Calendar
	}

	function getOwedDays() {
		return nurse === 'Enfermera 1'
			? nursesOwedDays.nurse1
			: nurse === 'Enfermera 2'
			? nursesOwedDays.nurse2
			: nursesOwedDays.nurse3
	}

	const calendar = getCalendar()
	const workDays = calendar.filter((day) => day.work).length
	const freeDays = calendar.filter((day) => day.free).length

	const owedDays = getOwedDays()

	return (
		<div className='flex'>
			<p className='text-md'>
				{nurse} | Trabaja {workDays} días | Quiere {freeDays} días libres | Debe {owedDays} días
			</p>
		</div>
	)
}
