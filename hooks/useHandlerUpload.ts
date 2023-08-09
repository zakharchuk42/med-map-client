import { useState } from 'react'
import { toast } from 'react-toastify'
import { Event } from '@/components/Modules/Forms/UploadFiles/types'
import { useRouter } from 'next/navigation'
import { uploadFile } from '@/api/file'
import { changeAvatar } from '@/api/upload'

export const useHandlerUpload = (multiple: boolean) => {
	const [isLoading, setIsLoading] = useState<boolean>(false)
	const router = useRouter()

	return {
		isLoading,
		handlerUpload: async (
			e: Event<HTMLInputElement>,
			scriptId: string | number | undefined,
		) => {
			if (!e.target.files) {
				return
			}

			const formData = new FormData()

			if (multiple) {
				const files = e.target.files

				for (let i = 0; i < 2; i++) {
					formData.append('files', files[i])
				}
			} else {
				formData.append('avatar', e.target.files[0])
			}

			let notification

			try {
				setIsLoading(true)
				if (multiple) {
					const config = {
						headers: { 'Content-Type': 'multipart/form-data' },
					}
					const checkScriptId = !scriptId ? null : scriptId
					const { message } = await uploadFile(
						formData,
						config,
						checkScriptId,
					)
					notification = message
				} else {
					const { message } = await changeAvatar(formData)
					notification = message
				}

				toast.success(notification)
			} catch (e) {
				toast.error('Упс... Щось пішло не так. Спробуйте пізніше.')
			} finally {
				setIsLoading(false)
				router.refresh()
			}
		},
	}
}
