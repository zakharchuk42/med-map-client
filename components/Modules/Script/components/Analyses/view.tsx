import React from 'react'
import { AnalysesProps } from '@/components/Modules/Script/components/Analyses/types'
import UiCard from '@/components/Ui/UiCard/view'
import UiEmptyData from '@/components/Ui/UiEmptyData/view'
import BiotechIcon from '@mui/icons-material/Biotech'
import { ColorsEnum } from '@/components/Ui/UiButton/types'
import EditScriptForm from '@/components/Modules/Forms/EditScript/view'

const Analyses: React.FC<AnalysesProps> = ({ myAnalyses, scriptId }) => {
	return (
		<UiCard headerText={'Аналізи'} headerColor={ColorsEnum.GRAY}>
			<EditScriptForm
				value={myAnalyses}
				fieldName={'analyses'}
				scriptId={scriptId}
				color={ColorsEnum.GRAY}
				emptyData={
					<UiEmptyData
						title={'Інмформацію не знайдено'}
						text={
							'Якщо лікар прописав здачу аналізів, їх можна додати в будь який момент'
						}
						icon={<BiotechIcon />}
					/>
				}
			/>
		</UiCard>
	)
}

export default Analyses
