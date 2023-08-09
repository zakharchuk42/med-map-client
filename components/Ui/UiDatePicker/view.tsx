import React from 'react'
import { UiDatePickerProps } from '@/components/Ui/UiDatePicker/types'

import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import { registerLocale } from 'react-datepicker'
import uk from 'date-fns/locale/uk'
import UiTypography from '@/components/Ui/UiTypography/view'
import UiBox from '@/components/Ui/UiBox/view'
registerLocale('uk', uk)
import './datePicker.scss'

const UiDatePicker: React.FC<UiDatePickerProps> = ({
	onChange,
	value,
	minDate,
	labelinput,
	required,
	showTimeSelect,
	disabled,
}) => {
	const isReq = required && '*'

	return (
		<UiBox flex direction={'column'} gap={'3px'}>
			<label>
				<UiTypography variant={'small'} color={'gray'}>
					{labelinput} {isReq}
				</UiTypography>
			</label>
			<DatePicker
				onChange={onChange}
				selected={value}
				locale='uk'
				minDate={minDate}
				dateFormat={showTimeSelect ? 'dd.MM.yyyy HH:mm' : 'dd.MM.yyyy'}
				showTimeSelect={showTimeSelect}
				timeIntervals={10}
				disabled={disabled}
				isClearable={!disabled}
			/>
		</UiBox>
	)
}

export default UiDatePicker
