import { StatusEnum } from '@/components/Ui/UiStatus/types'
import { RatingEnum } from '@/components/Ui/UiRating/types'

export enum OnlineStatusEnum {
	YES = 'yes',
	NO = 'no',
}

export interface VisitForm {
	status: StatusEnum
	diagnose: string
	doctors: string
	spec: string
	date: Date
	city: string
	impression: RatingEnum
	hospital: string
	efficiency: RatingEnum
	phone: string
	online: OnlineStatusEnum
	id?: number
}
