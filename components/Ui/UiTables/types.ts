import { GridInitialStateCommunity } from '@mui/x-data-grid/models/gridStateCommunity'
import { GridColDef } from '@mui/x-data-grid'

export interface UiTableProps {
	rows: any[]
	columns: GridColDef<any, any, any>[]
	initialState?: GridInitialStateCommunity
	pageSizeOptions?: number[]
	hideFooter?: boolean
	sx?: object
}
