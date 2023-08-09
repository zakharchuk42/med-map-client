'use client'

import React from 'react'
import { ListProps } from '@/components/Widgets/Visits/List/types'
import { useColumns } from '@/components/Widgets/Visits/List/hooks/useColumns'
import UiTable from '@/components/Ui/UiTables/view'

const initialState = {
	pagination: {
		paginationModel: {
			pageSize: 10,
		},
	},
}

const List: React.FC<ListProps> = ({ myVisits }) => {
	const columns = useColumns()

	return (
		<UiTable
			rows={myVisits}
			columns={columns}
			initialState={initialState}
			pageSizeOptions={[10]}
			sx={{
				height: '630px',
				width: '100%',
			}}
		/>
	)
}

export default List
