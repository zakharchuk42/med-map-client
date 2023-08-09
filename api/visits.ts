import {
	DeleteVisitDTO,
	DeleteVisitResponseDTO,
	UpdateVisitDTO,
	UpdateVisitResponseDTO,
	VisitDTO,
	VisitResponseDTO,
} from '@/api/dto/visit.dto'
import axios from '@/@core/axios'

export const addVisit = async (visit: VisitDTO): Promise<VisitResponseDTO> => {
	return (await axios.post('/visits', visit)).data
}

export const deleteVisit = async (
	visitId: DeleteVisitDTO['id'],
): Promise<DeleteVisitResponseDTO> => {
	return (await axios.delete(`/visits?visitId=${visitId}`)).data
}

export const updateVisit = async (
	visit: UpdateVisitDTO,
	visitId: number,
): Promise<UpdateVisitResponseDTO> => {
	return (await axios.put(`/visits?visitId=${visitId}`, visit)).data
}
