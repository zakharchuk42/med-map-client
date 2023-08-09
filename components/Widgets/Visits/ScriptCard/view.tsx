import React from 'react'
import { ScriptLayoutProps } from '@/components/Widgets/Visits/ScriptCard/types'
import ContentLayout from '@/components/Layout/Content/view'
import ContentLayoutHeader from '@/components/Layout/Content/components/Header/view'
import { getScript } from '@/api/script'
import CardLayout from '@/components/Layout/Card/view'
import DeleteScript from '@/components/Modules/Script/components/DeleteScript/view'
import ScriptModule from '@/components/Modules/Script/view'

async function getMyScript(id: number) {
	return getScript(id)
}

//@ts-ignore
const ScriptLayout: React.FC<ScriptLayoutProps> = async ({ id, title }) => {
	const myScript = await getMyScript(id)

	return (
		<ContentLayout>
			<ContentLayoutHeader
				title={`${title} "${myScript.name}"`}
				backArrow
				actions={<DeleteScript scriptId={id} />}
			/>
			<CardLayout>
				<ScriptModule myScript={myScript} />
			</CardLayout>
		</ContentLayout>
	)
}

export default ScriptLayout
