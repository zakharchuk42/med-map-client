export interface VisitDTO {
	status: string
	doctors: string
	spec: string
	date: Date | null
	city: string
	impression: string
	hospital: string
	efficiency: string
	phone: string
	online: string
	diagnose: string
}

export interface VisitResponseDTO {
	message: String
}

//------------------------------------------------------------------

export interface UpdateVisitDTO extends VisitDTO {}

export interface UpdateVisitResponseDTO extends DeleteVisitResponseDTO {}

//------------------------------------------------------------------
export interface DeleteVisitDTO {
	id: number | string
}

export interface DeleteVisitResponseDTO extends VisitResponseDTO {}
