import axios from '@/@core/axios'
import {
	DeleteScriptResponseDTO,
	ScriptDTO,
	ScriptResponseDTO,
	UpdateScriptDTO,
	UpdateScriptResponseDTO,
} from '@/dto/sript.dto'
import { AddScriptForm } from '@/components/Modules/Forms/Script/types'

export const getScript = async (scriptId: number): Promise<ScriptDTO> => {
	return (await axios.get(`/scripts?scriptId=${scriptId}`)).data
}

export const addScript = async (
	script: AddScriptForm,
	visitId: number,
): Promise<ScriptResponseDTO> => {
	return (await axios.post(`/scripts?visitId=${visitId}`, script)).data
}

export const editScript = async (
	script: UpdateScriptDTO,
	scriptId: number,
): Promise<UpdateScriptResponseDTO> => {
	return (await axios.put(`/scripts?scriptId=${scriptId}`, script)).data
}

export const removeScript = async (
	scriptId: number,
): Promise<DeleteScriptResponseDTO> => {
	return (await axios.delete(`/scripts?scriptId=${scriptId}`)).data
}
