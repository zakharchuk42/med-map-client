import React from 'react'
import ScriptLayout from '@/components/Widgets/Visits/ScriptCard/view'

type Props = {
	params: {
		id: number
	}
}

const ScriptPage = ({ params }: Props) => {
	return <ScriptLayout title={'Рецепт'} id={params.id} />
}

export default ScriptPage
