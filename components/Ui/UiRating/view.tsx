import React from 'react'
import { RatingEnum, UiRatingProps } from '@/components/Ui/UiRating/types'
import UiBox from '@/components/Ui/UiBox/view'
import SentimentVeryDissatisfiedIcon from '@mui/icons-material/SentimentVeryDissatisfied'
import SentimentDissatisfiedIcon from '@mui/icons-material/SentimentDissatisfied'
import SentimentSatisfiedIcon from '@mui/icons-material/SentimentSatisfied'
import SentimentSatisfiedAltIcon from '@mui/icons-material/SentimentSatisfiedAltOutlined'
import SentimentVerySatisfiedIcon from '@mui/icons-material/SentimentVerySatisfied'

const ratingMapper: any = {
	[RatingEnum.WAIT]: {
		icon: <SentimentSatisfiedIcon color='disabled' />,
		text: '—',
	},
	[RatingEnum.VERY_GOOD]: {
		icon: <SentimentVerySatisfiedIcon color='success' />,
		text: 'Відмінно',
	},
	[RatingEnum.GOOD]: {
		icon: <SentimentSatisfiedAltIcon color={'success'} />,
		text: 'Добре',
	},
	[RatingEnum.NORMAL]: {
		icon: <SentimentSatisfiedIcon color='warning' />,
		text: 'Задовільно',
	},
	[RatingEnum.BAD]: {
		icon: <SentimentDissatisfiedIcon color='error' />,
		text: 'Погано',
	},
	[RatingEnum.VERY_BAD]: {
		icon: <SentimentVeryDissatisfiedIcon color='error' />,
		text: 'Дуже погано',
	},
}

const UiRating: React.FC<UiRatingProps> = ({ rating, showText = true }) => {
	return (
		<UiBox flex gap={'5px'} align={'center'}>
			{ratingMapper[rating].icon}
			{showText && ratingMapper[rating].text}
		</UiBox>
	)
}

export default UiRating
