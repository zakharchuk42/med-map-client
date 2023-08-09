import React from 'react'
import { GridColDef } from '@mui/x-data-grid'
import { DrugsType } from '@/api/dto/sript.dto'
import UiTableDate from '@/components/Ui/UiTableDate/view'
import UiBox from '@/components/Ui/UiBox/view'
import DeleteDrugs from '@/components/Modules/Script/components/Drugs/components/CardList/components/DeleteDrugs/view'

type Row = DrugsType

export const useCardColumns = () => {
	return React.useMemo<GridColDef<Row>[]>(
		() => [
			{
				field: 'name',
				headerName: 'Імʼя',
				flex: 1,
				minWidth: 130,
			},
			{
				field: 'amount',
				headerName: 'Кіл-ть/день',
				width: 100,
				align: 'center',
				headerAlign: 'center',
			},

			{
				field: 'days',
				headerName: 'Днів',
				width: 70,
				align: 'center',
				headerAlign: 'center',
			},
			{
				field: 'time',
				headerName: 'Час',
				width: 100,
				align: 'center',
				headerAlign: 'center',
				renderCell: (params) => {
					return <>{params.row.time ? params.row.time : '-'}</>
				},
			},
			{
				field: 'startAt',
				headerName: 'Початок',
				width: 120,
				align: 'right',
				headerAlign: 'right',
				renderCell: (params) => {
					return (
						<>
							{params.row.startAt ? (
								<UiTableDate date={params.row.startAt} />
							) : (
								'-'
							)}
						</>
					)
				},
			},
			{
				field: 'endAt',
				headerName: 'Кінець',
				width: 120,
				align: 'right',
				headerAlign: 'right',
				renderCell: (params) => {
					return (
						<>
							{params.row.endAt ? (
								<UiTableDate date={params.row.endAt} />
							) : (
								'-'
							)}
						</>
					)
				},
			},
			{
				field: 'actions',
				type: 'actions',
				headerAlign: 'center',
				width: 80,
				renderCell: (params) => {
					return (
						<UiBox flex>
							<DeleteDrugs drugsId={params.row.id} />
						</UiBox>
					)
				},
			},
		],
		[],
	)
}
