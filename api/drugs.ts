import axios from '@/@core/axios'
import {
	DeleteDrugsResponseDTO,
	DrugsDTO,
	DrugsResponseDTO,
} from '@/api/dto/drugs.dto'

export const addDrugs = async (
	drugs: DrugsDTO,
	scriptId: string | number,
): Promise<DrugsResponseDTO> => {
	return (await axios.post(`/drugs?scriptId=${scriptId}`, drugs)).data
}

export const deleteDrugs = async (
	drugsId: number,
): Promise<DeleteDrugsResponseDTO> => {
	return (await axios.delete(`/drugs?drugsId=${drugsId}`)).data
}
