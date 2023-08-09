import { DrugsType } from '@/api/dto/sript.dto'

export interface CardListProps {
	myDrugs: DrugsType[] | []
	scriptId: number
}
