export interface DrugsDTO {
	name: string
	amount: string
	days: string
	startAt?: Date
	time?: string
}

export interface DrugsResponseDTO {
	message: String
}

//------------------------------------------------------------------

export interface DeleteDrugsResponseDTO extends DrugsResponseDTO {}
