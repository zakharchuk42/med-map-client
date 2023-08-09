export interface DrugsFormProps {
	scriptId: number | string
	textButton: string
}

export interface DrugsFormResolver {
	name: string
	amount: string
	days: string
	startAt: Date
	time: string
}
