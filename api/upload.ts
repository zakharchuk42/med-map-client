import axios from '@/@core/axios'
import { FileDTO, FileResponseDTO } from '@/dto/upload.dto'

export const changeAvatar = async (file: FileDTO): Promise<FileResponseDTO> => {
	return (await axios.put('/users/update', file)).data
}
