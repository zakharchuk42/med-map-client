import { StatusEnum } from '@/components/Ui/UiStatus/types'
import { RatingEnum } from '@/components/Ui/UiRating/types'
import { OnlineStatusEnum } from '@/components/Modules/Forms/Visit/types'

export interface ScriptType {
	id: number
	analyses: string
	name: string
	otherNotes: string
	userId: string
}

export interface MyListType {
	id: number
	status: StatusEnum
	doctors: string
	diagnose: string
	spec: string
	date: Date
	city: string
	impression: RatingEnum
	script: ScriptType | null
	hospital: string
	efficiency: RatingEnum
	phone: string
	online: OnlineStatusEnum
}

export interface ListProps {
	myVisits: MyListType[]
}
