import CalculateButton from '@/app/calculate-button'
import CalendarModeSwitchItem from '@/app/calendar-mode-switch-item'

export default function CalendarModeSwitch() {
	const calendarModes = ['Planilla actual', 'Planilla deseada']

	return (
		<div className='flex justify-between w-full'>
			{[
				...calendarModes.map((calendarMode) => (
					<CalendarModeSwitchItem
						key={calendarMode}
						text={calendarMode}
					/>
				)),
				<CalculateButton key="calculate" />
			]}
		</div>
	)
}
