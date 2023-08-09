import React from 'react'
import UiFile from '@/components/Ui/UiFile/view'
import UiBox from '@/components/Ui/UiBox/view'
import { FileProps } from '@/components/Widgets/MyDocs/components/Files/types'
import s from './files.module.scss'

const Files: React.FC<FileProps> = ({ files }) => {
	return (
		<UiBox className={s.files} flex gap={'10px'}>
			{files.map((file) => {
				return (
					<UiFile
						key={file.id}
						fileName={file.originalName}
						link={file.filename}
						fileId={file.id}
					/>
				)
			})}
		</UiBox>
	)
}

export default Files
