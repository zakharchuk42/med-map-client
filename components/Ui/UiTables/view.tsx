import React from 'react'
import { UiTableProps } from '@/components/Ui/UiTables/types'
import { DataGrid } from '@mui/x-data-grid'

const UiTable: React.FC<UiTableProps> = ({
	rows,
	columns,
	initialState,
	pageSizeOptions,
	hideFooter,
	sx,
}) => {
	return (
		<DataGrid
			rows={rows}
			columns={columns}
			initialState={initialState}
			pageSizeOptions={pageSizeOptions}
			disableRowSelectionOnClick
			disableColumnSelector
			disableColumnFilter
			disableColumnMenu
			hideFooter={hideFooter}
			sx={sx}
		/>
	)
}

export default UiTable
