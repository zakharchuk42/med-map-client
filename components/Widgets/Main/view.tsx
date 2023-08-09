import React from 'react'
import { MainLayoutProps, VisitType } from '@/components/Widgets/Main/types'
import CardLayout from '@/components/Layout/Card/view'
import axiosS from '@/@core/axios-server'
import { StatusEnum } from '@/components/Ui/UiStatus/types'
import UiCard from '@/components/Ui/UiCard/view'
import AddReactionIcon from '@mui/icons-material/AddReaction'
import ScriptModule from '@/components/Modules/Script/view'
import { getScript } from '@/api/script'
import ContentLayout from '@/components/Layout/Content/view'
import ContentLayoutHeader from '@/components/Layout/Content/components/Header/view'
import UiEmptyData from '@/components/Ui/UiEmptyData/view'

async function getLastScript() {
	const allVisits = (await axiosS.get(`/visits?status=${StatusEnum.CONT}`))
		.data

	const { password, ...userWithoutPassword } = (await axiosS.get('/users/me'))
		.data

	let lastScriptId: number = 0

	allVisits.some((visit: VisitType) => {
		if (visit.script !== null) {
			return (lastScriptId = visit.script.id)
		}
	})

	const lastScript = await getScript(lastScriptId)

	return { lastScript, myName: userWithoutPassword.name }
}

//@ts-ignore
const MainLayout: React.FC<MainLayoutProps> = async ({ title }) => {
	const { lastScript, myName } = await getLastScript()

	return (
		<ContentLayout>
			<ContentLayoutHeader title={`${title} ${myName}!`} />
			<CardLayout>
				{lastScript ? (
					<ScriptModule myScript={lastScript} />
				) : (
					<UiCard>
						<UiEmptyData
							title={'Вітаємо! Активних рецептів намає.'}
							text={
								'Для відображення рецепту на сторінці "Візити до лікаря" переведіть візит у колонці "Статус лікування" на "Триває" та добавте "Рецепт"'
							}
							icon={<AddReactionIcon />}
						/>
					</UiCard>
				)}
			</CardLayout>
		</ContentLayout>
	)
}

export default MainLayout
