'use client'

import React, { useRef } from 'react'
import s from './uploadFiles.module.scss'

import { UploadFilesProps } from '@/components/Modules/Forms/UploadFiles/types'
import UiTypography from '@/components/Ui/UiTypography/view'
import UiBox from '@/components/Ui/UiBox/view'
import UploadFileIcon from '@mui/icons-material/UploadFile'
import UiSpinner from '@/components/Ui/UiSpinner/view'
import UiButton from '@/components/Ui/UiButton/view'
import { ColorsEnum } from '@/components/Ui/UiButton/types'
import { useHandlerUpload } from '@/hooks/useHandlerUpload'

const UploadFilesForm: React.FC<UploadFilesProps> = ({
	multiple = false,
	text,
	variant,
	scriptId,
}) => {
	const filePicker = useRef<any>(null)
	const { isLoading, handlerUpload } = useHandlerUpload(multiple)

	const handlePick = () => {
		filePicker.current.click()
	}

	return (
		<>
			{variant === 'button' ? (
				<UiButton
					onClick={handlePick}
					color={ColorsEnum.GREEN}
					pending={isLoading}
					disabled={isLoading}
				>
					Завантажити
				</UiButton>
			) : (
				<div className={s.uploadFiles} onClick={handlePick}>
					{isLoading ? (
						<UiSpinner size={'md'} />
					) : (
						<>
							<UiBox pb={'md'}>
								<UploadFileIcon sx={{ fontSize: '60px' }} />
							</UiBox>
							<UiTypography>
								Нажміть для завантаження
							</UiTypography>
							<UiTypography variant={'small'}>
								Максимальний розмір файлу 3 MB.
							</UiTypography>
							{text && (
								<UiTypography variant={'small'} color={'gray'}>
									{text}
								</UiTypography>
							)}
						</>
					)}
				</div>
			)}

			<input
				className={s.uploadFiles__input}
				ref={filePicker}
				accept={'image/*, .png,.jpg,.web'}
				type={'file'}
				onChange={(e) => handlerUpload(e, scriptId)}
				multiple={multiple}
			/>
		</>
	)
}

export default UploadFilesForm
