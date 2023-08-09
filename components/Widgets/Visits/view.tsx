import React from 'react'
import ContentLayoutHeader from '@/components/Layout/Content/components/Header/view'
import ContentLayout from '@/components/Layout/Content/view'
import ContentLayoutBody from '@/components/Layout/Content/components/Body/view'
import { VisitsLayoutProps } from '@/components/Widgets/Visits/types'
import List from '@/components/Widgets/Visits/List/view'
import AddVisit from '@/components/Widgets/Visits/Actions/AddVisit/view'
import axiosServer from '@/@core/axios-server'

async function getVisits() {
	return (await axiosServer.get('/visits')).data
}

//@ts-ignore
const VisitsLayout: React.FC<VisitsLayoutProps> = async ({ title }) => {
	const myVisits = await getVisits()

	return (
		<ContentLayout>
			<ContentLayoutHeader title={title} actions={<AddVisit />} />
			<ContentLayoutBody>
				<List myVisits={myVisits} />
			</ContentLayoutBody>
		</ContentLayout>
	)
}

export default VisitsLayout
