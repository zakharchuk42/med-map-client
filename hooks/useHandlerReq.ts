import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { toast } from 'react-toastify'

export const useHandlerReq = () => {
	const [isLoading, setIsLoading] = useState<boolean>(false)
	const router = useRouter()

	return {
		isLoading,
		router,
		handler: async (req: any) => {
			try {
				setIsLoading(true)
				const { message } = await req
				toast.success(message)
			} catch (e) {
				toast.error('Упс... Щось пішло не так. Спробуйте пізніше.')
			} finally {
				setIsLoading(false)
				router.refresh()
			}
		},
	}
}
