export interface LoginFormDTO {
	email: string
	password: string
}

export interface LoginResponseDTO {
	token: string
}

export interface RegisterFormDTO extends LoginFormDTO {
	name: string
	avatar: string
}

export interface RegisterResponseDTO extends LoginResponseDTO {}

export interface User {
	id: number
	email: string
	name: string
	avatar: string
}
