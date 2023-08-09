import React from 'react'
import UiCard from '@/components/Ui/UiCard/view'
import { ColorsEnum } from '@/components/Ui/UiButton/types'
import UploadFilesForm from '@/components/Modules/Forms/UploadFiles/view'
import UiBox from '@/components/Ui/UiBox/view'
import UiFile from '@/components/Ui/UiFile/view'
import { FilesProps } from '@/components/Modules/Script/components/Files/types'

const Files: React.FC<FilesProps> = ({ files, scriptId }) => {
	return (
		<UiCard headerText={'Мої файли'} headerColor={ColorsEnum.GREEN}>
			{files && files.length ? (
				<>
					<UiBox flex gap={'10px'}>
						{files.map((file) => {
							return (
								<UiFile
									key={file.filename}
									fileName={file.originalName}
									link={file.filename}
									fileId={file.id}
								/>
							)
						})}
					</UiBox>
					<UiBox width={'100%'} flex justify={'end'}>
						<UploadFilesForm
							multiple={true}
							variant={'button'}
							scriptId={scriptId}
						/>
					</UiBox>
				</>
			) : (
				<UploadFilesForm
					multiple={true}
					scriptId={scriptId}
					text={'Максимум 2 файли за одне завантаження'}
				/>
			)}
		</UiCard>
	)
}

export default Files
