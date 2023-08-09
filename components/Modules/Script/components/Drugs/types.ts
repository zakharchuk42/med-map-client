import { DrugsType } from '@/api/dto/sript.dto'

export interface DrugsProps {
	myDrugs: DrugsType[] | []
	scriptId: number
}
