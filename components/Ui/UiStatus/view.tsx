import React from 'react'
import { StatusEnum, UiStatusProps } from '@/components/Ui/UiStatus/types'
import UiBox from '@/components/Ui/UiBox/view'
import RestoreIcon from '@mui/icons-material/Restore'
import QueryBuilderIcon from '@mui/icons-material/QueryBuilder'
import TaskAltIcon from '@mui/icons-material/TaskAlt'

const statusMapper: any = {
	[StatusEnum.PLANNED]: {
		icon: <RestoreIcon color={'disabled'} />,
		text: 'Запланований',
	},
	[StatusEnum.CONT]: {
		icon: <QueryBuilderIcon color={'secondary'} />,
		text: 'Триває',
	},
	[StatusEnum.DONE]: {
		icon: <TaskAltIcon color={'success'} />,
		text: 'Завершено',
	},
}

const UiStatus: React.FC<UiStatusProps> = ({ status }) => {
	return (
		<UiBox flex gap={'5px'} align={'center'}>
			{statusMapper[status].icon}
			{statusMapper[status].text}
		</UiBox>
	)
}

export default UiStatus
