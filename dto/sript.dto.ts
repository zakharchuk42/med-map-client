export interface DrugsType {
	id: string
	name: string
	amount: string
	days: string
	startAt?: Date
	endAt?: Date
	time?: string
}

export interface FileType {
	id: number
	filename: string
	originalName: string
	size: number
	mimetype: string
}

export interface ScriptDTO {
	id: number
	userId: string
	name: string
	analyses: string
	otherNotes: string
	drugs: DrugsType[]
	files: FileType[]
}

export interface ScriptResponseDTO {
	message: String
}

//------------------------------------------------------------------

export interface UpdateScriptDTO extends Partial<ScriptDTO> {}

export interface UpdateScriptResponseDTO extends ScriptResponseDTO {}

export interface DeleteScriptResponseDTO extends ScriptResponseDTO {}
