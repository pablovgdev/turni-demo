import NurseSwitchItem from '@/app/nurse-switch-item'

export default function NurseSwitch() {
	const nurses = ['Enfermera 1', 'Enfermera 2', 'Enfermera 3']

	return (
		<div className='flex justify-between w-full'>
			{nurses.map((nurse) => (
				<NurseSwitchItem
					key={nurse}
					text={nurse}
				/>
			))}
		</div>
	)
}
