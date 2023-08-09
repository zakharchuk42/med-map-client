export interface UiTextareaProps {
	minRows?: number
	maxRows?: number
	value: string
	onChange: (e: any) => void
	disabled?: boolean
	labelInput?: string
	border?: boolean
}
