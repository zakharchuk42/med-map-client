import React from 'react'
import { MyDocsLayoutProps } from '@/components/Widgets/MyDocs/types'
import ContentLayout from '@/components/Layout/Content/view'
import ContentLayoutHeader from '@/components/Layout/Content/components/Header/view'
import axiosServer from '@/@core/axios-server'
import { normalizeData } from '@/components/Widgets/MyDocs/utils/normalizeData'
import UiBox from '@/components/Ui/UiBox/view'
import { ColorsEnum } from '@/components/Ui/UiButton/types'
import Files from '@/components/Widgets/MyDocs/components/Files/view'
import CardLayout from '@/components/Layout/Card/view'
import UiCard from '@/components/Ui/UiCard/view'
import UploadFilesForm from '@/components/Modules/Forms/UploadFiles/view'

async function getMyDocs() {
	const { withScript, withoutScript } = (await axiosServer.get('/files')).data

	return {
		script: normalizeData(withScript),
		other: withoutScript,
	}
}

//@ts-ignore
export const MyDocsLayout: React.FC<MyDocsLayoutProps> = async ({ title }) => {
	const { script, other } = await getMyDocs()
	return (
		<ContentLayout>
			<ContentLayoutHeader
				title={title}
				actions={<UploadFilesForm multiple={true} variant={'button'} />}
			/>
			<CardLayout>
				<UiBox flex direction={'column'} gap={'20px'} width={'100%'}>
					{script.map((item) => {
						return (
							<UiCard
								key={item.name}
								headerText={item.name}
								headerColor={ColorsEnum.BLUE}
							>
								<Files files={item.files} />
							</UiCard>
						)
					})}
					<UiCard
						headerText={'Мої документи'}
						headerColor={ColorsEnum.BLUE}
					>
						{other.length ? (
							<Files files={other} />
						) : (
							<UploadFilesForm
								multiple={true}
								text={'Максимум 2 файли за одне завантаження'}
							/>
						)}
					</UiCard>
				</UiBox>
			</CardLayout>
		</ContentLayout>
	)
}
