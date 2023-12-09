'use client'

import { ReactNode, createContext, useState } from 'react'

interface IContext {
	nurse: string
	setNurse: (nurse: string) => void
	calendarMode: string
	setCalendarMode: (mode: string) => void
	nurse1Calendar: Day[]
	setNurse1Calendar: (calendar: Day[]) => void
	nurse2Calendar: Day[]
	setNurse2Calendar: (calendar: Day[]) => void
	nurse3Calendar: Day[]
	setNurse3Calendar: (calendar: Day[]) => void
	nursesOwedDays: NursesOwedDays
	setNursesOwedDays: (owedDays: NursesOwedDays) => void
}

interface Day {
	work: boolean
	free: boolean
}

interface NursesOwedDays {
	nurse1: number
	nurse2: number
	nurse3: number
}

export const Context = createContext<IContext>({} as IContext)

export const ContextProvider = ({ children }: { children: ReactNode }) => {
	const nurseCalendar = []

	for (let i = 1; i <= 28; i++) {
		nurseCalendar.push({
			day: i,
			work: false,
			free: false
		})
	}

	const deepClone = (array: Day[]) => [...array].map((day) => ({ ...day }))

	const [nurse, setNurse] = useState<string>('Enfermera 1')
	const [calendarMode, setCalendarMode] = useState<string>('Planilla actual')
	const [nurse1Calendar, setNurse1Calendar] = useState<Day[]>(deepClone(nurseCalendar))
	const [nurse2Calendar, setNurse2Calendar] = useState<Day[]>(deepClone(nurseCalendar))
	const [nurse3Calendar, setNurse3Calendar] = useState<Day[]>(deepClone(nurseCalendar))
	const [nursesOwedDays, setNursesOwedDays] = useState<NursesOwedDays>({
		nurse1: 0,
		nurse2: 0,
		nurse3: 0
	})

	return (
		<Context.Provider
			value={{
				nurse,
				setNurse,
				calendarMode,
				setCalendarMode,
				nurse1Calendar,
				setNurse1Calendar,
				nurse2Calendar,
				setNurse2Calendar,
				nurse3Calendar,
				setNurse3Calendar,
				nursesOwedDays,
				setNursesOwedDays
			}}
		>
			{children}
		</Context.Provider>
	)
}
