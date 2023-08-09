import React from 'react'
import { GridColDef } from '@mui/x-data-grid'
import UiStatus from '@/components/Ui/UiStatus/view'
import UiBox from '@/components/Ui/UiBox/view'
import UiRating from '@/components/Ui/UiRating/view'
import { phoneFormat } from '@/utils/phoneFormat'
import { OnlineStatusEnum } from '@/components/Modules/Forms/Visit/types'
import CheckIcon from '@mui/icons-material/Check'
import CloseIcon from '@mui/icons-material/Close'
import Visibility from '@mui/icons-material/Visibility'
import { ListProps } from '@/components/Widgets/Visits/List/types'
import DeleteVisit from '@/components/Widgets/Visits/List/components/DeleteVisit/view'
import EditVisit from '@/components/Widgets/Visits/List/components/EditVisit/view'
import UiSvg from '@/components/Ui/UiSvg/view'
import AddScript from '@/components/Widgets/Visits/List/components/AddScript/view'
import Link from 'next/link'
import { MyRoutes } from '@/constants/routes'
import UiTableDate from '@/components/Ui/UiTableDate/view'

type Row = ListProps['myVisits'][number]

export const useColumns = () => {
	return React.useMemo<GridColDef<Row>[]>(
		() => [
			{
				field: 'status',
				headerName: 'Статус лікування',
				width: 150,
				renderCell: (params) => {
					return <UiStatus status={params.row.status} />
				},
			},
			{
				field: 'doctors',
				headerName: 'Лікар',
				sortable: false,
				minWidth: 250,
				maxWidth: 320,
				flex: 1,
			},
			{
				field: 'spec',
				headerName: 'Спеціалізація',
				sortable: false,
				width: 140,
			},
			{
				field: 'date',
				headerName: 'Дата прийому',
				sortable: false,
				width: 110,
				align: 'right',
				headerAlign: 'right',
				renderCell: (params) => {
					return <UiTableDate date={params.row.date} withTime />
				},
			},
			{
				field: 'script',
				headerName: 'Рецепт',
				sortable: false,
				width: 110,
				align: 'center',
				headerAlign: 'center',
				renderCell: (params) => {
					if (!params.row.script) {
						return <AddScript visitId={params.row.id} />
					} else {
						return (
							<UiSvg>
								<Link
									href={`${MyRoutes.SCRIPT}/${params.row.script.id}`}
								>
									<Visibility sx={{ color: '#3A57E8' }} />
								</Link>
							</UiSvg>
						)
					}
				},
			},
			{
				field: 'impression',
				headerName: 'Враження',
				width: 120,
				headerAlign: 'center',
				align: 'center',
				renderCell: (params) => {
					return (
						<UiBox width={'100%'} flex justify={'center'}>
							<UiRating
								rating={params.row.impression}
								showText={false}
							/>
						</UiBox>
					)
				},
			},
			{
				field: 'hospital',
				headerName: 'Лікарня',
				sortable: false,
				width: 170,
			},
			{
				field: 'phone',
				headerName: 'Телефон',
				sortable: false,
				width: 160,
				renderCell: (params) => {
					return <>{phoneFormat(params.row.phone)}</>
				},
			},
			{
				field: 'city',
				headerName: 'Місто',
				sortable: false,
				width: 130,
			},
			{
				field: 'efficiency',
				headerName: 'Ефективність',
				width: 115,
				headerAlign: 'center',
				align: 'center',
				renderCell: (params) => {
					return (
						<UiBox width={'100%'} flex justify={'center'}>
							<UiRating
								rating={params.row.efficiency}
								showText={false}
							/>
						</UiBox>
					)
				},
			},
			{
				field: 'online',
				headerName: 'Online',
				width: 80,
				sortable: false,
				headerAlign: 'center',
				align: 'center',
				renderCell: (params) => {
					return (
						<>
							{params.row.online === OnlineStatusEnum.YES ? (
								<CheckIcon color='success' />
							) : (
								<CloseIcon color='error' />
							)}
						</>
					)
				},
			},
			{
				field: 'diagnose',
				headerName: 'Діагноз',
				sortable: false,
				flex: 1,
				minWidth: 280,
			},
			{
				field: 'actions',
				type: 'actions',
				headerName: 'Дії',
				headerAlign: 'center',
				width: 80,
				renderCell: (params) => {
					return (
						<UiBox flex>
							<DeleteVisit visitId={params.row.id} />
							<EditVisit defaultValue={params.row} />
						</UiBox>
					)
				},
			},
		],
		[],
	)
}
