import React from 'react'
import UiCard from '@/components/Ui/UiCard/view'
import UiBox from '@/components/Ui/UiBox/view'
import QueryStatsIcon from '@mui/icons-material/QueryStats'
import UiEmptyData from '@/components/Ui/UiEmptyData/view'
import CardList from '@/components/Modules/Script/components/Drugs/components/CardList/view'
import { ColorsEnum } from '@/components/Ui/UiButton/types'
import UiLinearProgress from '@/components/Ui/UiLinearProgress/view'
import { getDateProgress } from '@/components/Modules/Script/components/Drugs/components/utils/getDateProgress'
import { DrugsProps } from '@/components/Modules/Script/components/Drugs/types'

const Drugs: React.FC<DrugsProps> = ({ myDrugs, scriptId }) => {
	const isHaveDrugs = myDrugs && myDrugs.length

	return (
		<UiBox flex justify={'between'} gap={'20px'}>
			<UiBox flex width={'60%'}>
				<UiCard
					headerText={'План лікування'}
					headerColor={ColorsEnum.BLUE}
				>
					<CardList myDrugs={myDrugs} scriptId={scriptId} />
				</UiCard>
			</UiBox>
			<UiBox flex width={'40%'}>
				<UiCard headerText={'Прогрес'} headerColor={ColorsEnum.GREEN}>
					{isHaveDrugs ? (
						myDrugs.map((drug) => {
							const progress = getDateProgress(
								drug.startAt,
								drug.days,
							)
							return (
								<UiLinearProgress
									key={drug.id}
									min={drug.startAt}
									max={drug.endAt}
									progress={progress}
									name={drug.name}
									color={'rgba(26, 160, 83)'}
								/>
							)
						})
					) : (
						<UiEmptyData
							title={'План лікування відсутній'}
							text={
								'Для відображення статистики потрібно заповнити таблицю "План лікування"'
							}
							icon={<QueryStatsIcon />}
						/>
					)}
				</UiCard>
			</UiBox>
		</UiBox>
	)
}

export default Drugs
