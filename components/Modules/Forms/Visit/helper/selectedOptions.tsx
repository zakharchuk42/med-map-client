import { OnlineStatusEnum } from '@/components/Modules/Forms/Visit/types'
import UiBox from '@/components/Ui/UiBox/view'
import React from 'react'
import CheckIcon from '@mui/icons-material/Check'
import CloseIcon from '@mui/icons-material/Close'
import { StatusEnum } from '@/components/Ui/UiStatus/types'
import UiStatus from '@/components/Ui/UiStatus/view'
import { RatingEnum } from '@/components/Ui/UiRating/types'
import UiRating from '@/components/Ui/UiRating/view'

interface RenderLabelProps {
	text: string
	Icon: React.ReactNode
}

const RenderLabel: React.FC<RenderLabelProps> = ({ text, Icon }) => {
	return (
		<UiBox flex gap={'5px'} align={'center'}>
			{Icon}
			{text}
		</UiBox>
	)
}

export const selectedOptions = {
	status: [
		{
			id: 'status',
			value: StatusEnum.PLANNED,
			label: <UiStatus status={StatusEnum.PLANNED} />,
		},
		{
			id: 'status',
			value: StatusEnum.CONT,
			label: <UiStatus status={StatusEnum.CONT} />,
		},
		{
			id: 'status',
			value: StatusEnum.DONE,
			label: <UiStatus status={StatusEnum.DONE} />,
		},
	],

	rating: [
		{
			id: 'impression',
			value: RatingEnum.WAIT,
			label: <UiRating rating={RatingEnum.WAIT} />,
		},
		{
			id: 'impression',
			value: RatingEnum.VERY_GOOD,
			label: <UiRating rating={RatingEnum.VERY_GOOD} />,
		},
		{
			id: 'impression',
			value: RatingEnum.GOOD,
			label: <UiRating rating={RatingEnum.GOOD} />,
		},
		{
			id: 'impression',
			value: RatingEnum.NORMAL,
			label: <UiRating rating={RatingEnum.NORMAL} />,
		},
		{
			id: 'impression',
			value: RatingEnum.BAD,
			label: <UiRating rating={RatingEnum.BAD} />,
		},
		{
			id: 'impression',
			value: RatingEnum.VERY_BAD,
			label: <UiRating rating={RatingEnum.VERY_BAD} />,
		},
	],

	online: [
		{
			id: 'online',
			value: OnlineStatusEnum.YES,
			label: (
				<RenderLabel
					text={'Так'}
					Icon={<CheckIcon color='success' />}
				/>
			),
		},
		{
			id: 'online',
			value: OnlineStatusEnum.NO,
			label: (
				<RenderLabel text={'Ні'} Icon={<CloseIcon color='error' />} />
			),
		},
	],
}
