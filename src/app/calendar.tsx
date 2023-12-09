import CalendarDay from '@/app/calendar-day'

export default function Calendar() {
	const calendarHeader = ['L', 'M', 'X', 'J', 'V', 'S', 'D']
	const calendarTable = [
		[1, 2, 3, 4, 5, 6, 7],
		[8, 9, 10, 11, 12, 13, 14],
		[15, 16, 17, 18, 19, 20, 21],
		[22, 23, 24, 25, 26, 27, 28]
	]

	return (
		<div className='flex flex-col'>
			<div className='flex justify-between px-2 text-center'>
				{calendarHeader.map((text, index) => (
					<div
						key={index}
						className='px-6 py-3 text-center'
					>
						{text}
					</div>
				))}
			</div>
			<div className='grid grid-cols-7 border border-gray-100'>
				{calendarTable.map((row, rowIndex) =>
					row.map((dayNumber, index) => (
						<CalendarDay
							key={`${rowIndex}-${index}`}
							dayNumber={dayNumber}
						/>
					))
				)}
			</div>
		</div>
	)
}
