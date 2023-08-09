export interface ScriptFormProps {
	visitId: number
	textButton: string
	handleClose: () => void
	defaultValue?: any
}

export interface AddScriptForm {
	name: string
	analyses: string
	otherNotes: string
}
