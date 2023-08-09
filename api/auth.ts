import axios from '@/@core/axios'
import {
	LoginFormDTO,
	LoginResponseDTO,
	RegisterFormDTO,
	RegisterResponseDTO,
} from '@/api/dto/auth.dto'
import { destroyCookie } from 'nookies'

export const login = async (
	values: LoginFormDTO,
): Promise<LoginResponseDTO> => {
	return (await axios.post('/auth/login', values)).data
}

export const register = async (
	values: RegisterFormDTO,
): Promise<RegisterResponseDTO> => {
	return (await axios.post('/auth/register', values)).data
}

export const logout = () => {
	destroyCookie(null, '_token', { path: '/' })
}
