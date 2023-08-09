'use client'

import React from 'react'
import { DeleteScriptProps } from '@/components/Modules/Script/components/DeleteScript/types'
import { ColorsEnum } from '@/components/Ui/UiButton/types'
import UiButton from '@/components/Ui/UiButton/view'
import { useHandlerReq } from '@/hooks/useHandlerReq'
import { removeScript } from '@/api/script'
import { MyRoutes } from '@/constants/routes'

const DeleteScript: React.FC<DeleteScriptProps> = ({ scriptId }) => {
	const { isLoading, handler, router } = useHandlerReq()

	const deleteScript = async () => {
		await handler(removeScript(scriptId))
		router.push(MyRoutes.VISITS)
	}

	return (
		<UiButton
			color={ColorsEnum.RED}
			pending={isLoading}
			disabled={isLoading}
			onClick={deleteScript}
		>
			Видалити рецепт
		</UiButton>
	)
}

export default DeleteScript
