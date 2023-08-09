export enum RatingEnum {
	WAIT = 'wait',
	VERY_GOOD = 'very good',
	GOOD = 'good',
	NORMAL = 'normal',
	BAD = 'bad',
	VERY_BAD = 'very bad',
}

export interface UiRatingProps {
	rating: RatingEnum
	showText?: boolean
}
