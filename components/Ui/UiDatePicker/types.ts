export interface UiDatePickerProps {
	onChange: (e: any) => void
	value: Date | null
	minDate?: Date
	labelinput: string
	required?: boolean
	showTimeSelect?: boolean
	disabled?: boolean
}
