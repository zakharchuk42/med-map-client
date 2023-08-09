'use client'

import React from 'react'
import UiAvatar from '@/components/Ui/UiAvatar/view'
import UiModal from '@/components/Ui/UiModal/view'
import { useOpenState } from '@/hooks/usoOpenState'
import { changeAvatar } from '@/api/upload'
import UiButton from '@/components/Ui/UiButton/view'
import UiBox from '@/components/Ui/UiBox/view'
import { AvatarProps } from '@/components/Layout/Page/Header/UserBox/Avatar/types'
import { ColorsEnum } from '@/components/Ui/UiButton/types'
import UploadFilesForm from '@/components/Modules/Forms/UploadFiles/view'
import { useHandlerReq } from '@/hooks/useHandlerReq'

const Avatar: React.FC<AvatarProps> = ({ avatar }) => {
	const { open, handleClose, handleOpen } = useOpenState(false)
	const { isLoading, handler } = useHandlerReq()
	const deleteAvatar = async () => {
		const formData = new FormData()
		formData.append('avatar', '')
		await handler(changeAvatar(formData))
	}

	const isDisabled = avatar.length === 0

	return (
		<>
			<div onClick={handleOpen}>
				<UiAvatar avatar={avatar} />
			</div>
			<UiModal
				open={open}
				handleClose={handleClose}
				title={'Змінити аватар'}
			>
				<UiBox pb={'md'}>
					<UploadFilesForm />
				</UiBox>
				<UiBox flex justify={'end'}>
					<UiButton
						pending={isLoading}
						color={ColorsEnum.RED}
						onClick={() => deleteAvatar()}
						disabled={isDisabled ? isDisabled : isLoading}
					>
						Видалити аватар
					</UiButton>
				</UiBox>
			</UiModal>
		</>
	)
}

export default Avatar
