'use client'

import React from 'react'
import { FileProps } from '@/components/Ui/UiFile/types'
import s from './file.module.scss'
import InsertDriveFileIcon from '@mui/icons-material/InsertDriveFile'
import UiBox from '@/components/Ui/UiBox/view'
import DeleteIcon from '@mui/icons-material/Delete'
import { useHandlerReq } from '@/hooks/useHandlerReq'
import { removeFile } from '@/api/file'
import { getImgPath } from '@/utils/getImgPath'

const UiFile: React.FC<FileProps> = ({ fileName, link, fileId }) => {
	const { handler } = useHandlerReq()

	const name = fileName.split('.')[0]
	const format = fileName.split('.')[1]

	return (
		<div className={s.file} title={name}>
			<div className={s.file__buttons}>
				<div className={s.file__button}>
					<DeleteIcon
						sx={{ color: '#919699' }}
						onClick={() => handler(removeFile(fileId, link))}
					/>
				</div>
			</div>
			<a href={getImgPath(link, 'uploads')} target={'_blank'}>
				<UiBox flex justify={'center'}>
					<InsertDriveFileIcon sx={{ fontSize: '76px' }} />
					<div className={s.file__format}>{format}</div>
				</UiBox>
				<div className={s.file__name}> {name}</div>
			</a>
		</div>
	)
}

export default UiFile
