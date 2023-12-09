'use client'

import { Context } from '@/app/context'
import { useContext } from 'react'

type SwitchItemProps = {
	text: string
}

export default function NurseSwitchItem({ text }: SwitchItemProps) {
	const { nurse, setNurse } = useContext(Context)
	const isSelected = nurse === text

	return (
		<div
			className={`cursor-pointer text-center px-6 py-2 border-2 border-pink-400 ${
				isSelected ? 'text-white' : 'text-black'
			} ${isSelected ? 'bg-pink-400' : 'bg-white'}`}
			onClick={() => setNurse(text)}
		>
			{text}
		</div>
	)
}
