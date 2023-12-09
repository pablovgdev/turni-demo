'use client'

import { Context } from '@/app/context'
import { useContext } from 'react'

type SwitchItemProps = {
	text: string
}

export default function CalendarModeSwitchItem({ text }: SwitchItemProps) {
	const { calendarMode, setCalendarMode } = useContext(Context)
	const isSelected = calendarMode === text

	return (
		<div
			className={` cursor-pointer text-center px-6 py-2 border-2 border-purple-400 ${
				isSelected ? 'text-white' : 'text-black'
			} ${isSelected ? 'bg-purple-400' : 'bg-white'}`}
			onClick={() => setCalendarMode(text)}
		>
			{text}
		</div>
	)
}
