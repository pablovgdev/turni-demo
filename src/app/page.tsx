import Calendar from '@/app/calendar'
import CalendarModeSwitch from '@/app/calendar-mode-switch'
import { ContextProvider } from '@/app/context'
import NurseSwitch from '@/app/nurse-switch'
import Stats from '@/app/stats'
import Title from '@/app/title'

export default function Home() {
	return (
		<ContextProvider>
			<main className='min-h-screen p-24 flex justify-center'>
				<div className='max-w-lg flex flex-col items-center space-y-10'>
					<Title />
					<Stats />
					<Calendar />
					<NurseSwitch />
					<CalendarModeSwitch />
				</div>
			</main>
		</ContextProvider>
	)
}
