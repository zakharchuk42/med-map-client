import React from 'react'
import { UiTableDateProps } from '@/components/Ui/UiTableDate/type'
import UiBox from '@/components/Ui/UiBox/view'
import UiTypography from '@/components/Ui/UiTypography/view'
import { formatDate, formatTime } from '@/utils/formatDate'

const UiTableDate: React.FC<UiTableDateProps> = ({ date, withTime }) => {
	const dateDate = formatDate(date)
	const dateTime = formatTime(date)

	return (
		<UiBox flex direction={'column'}>
			<UiBox flex justify={'end'}>
				{dateDate}
			</UiBox>
			{withTime && (
				<UiBox flex justify={'end'}>
					<UiTypography color={'gray'}>{dateTime}</UiTypography>
				</UiBox>
			)}
		</UiBox>
	)
}

export default UiTableDate
