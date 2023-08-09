import React from 'react'
import UiCard from '@/components/Ui/UiCard/view'
import UiEmptyData from '@/components/Ui/UiEmptyData/view'
import EditNoteIcon from '@mui/icons-material/EditNote'
import { ColorsEnum } from '@/components/Ui/UiButton/types'
import EditScriptForm from '@/components/Modules/Forms/EditScript/view'
import { OtherNotesProps } from '@/components/Modules/Script/components/OtherNotes/types'

const OtherNotes: React.FC<OtherNotesProps> = ({ myNotes, scriptId }) => {
	return (
		<UiCard headerText={'Інші нотатки'} headerColor={ColorsEnum.ORANGE}>
			<EditScriptForm
				value={myNotes}
				scriptId={scriptId}
				fieldName={'otherNotes'}
				color={ColorsEnum.ORANGE}
				emptyData={
					<UiEmptyData
						title={'Нотатки відсутні'}
						text={'Не хочете забуди щось важливе? Запишіть сюди!'}
						icon={<EditNoteIcon />}
					/>
				}
			/>
		</UiCard>
	)
}

export default OtherNotes
