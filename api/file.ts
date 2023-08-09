import axios from '@/@core/axios'

export const removeFile = async (
	id: number,
	filename: string,
): Promise<{ message: String }> => {
	return (
		await axios.delete(`/files`, {
			data: {
				id,
				filename,
			},
		})
	).data
}

export const uploadFile = async (
	files: any,
	config: any,
	scriptId: string | number | null,
) => {
	return (await axios.post(`files?scriptId=${scriptId}`, files, config)).data
}
