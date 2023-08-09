export enum StatusEnum {
	PLANNED = 'planned',
	CONT = 'continues',
	DONE = 'done',
}

export interface UiStatusProps {
	status: StatusEnum
}
