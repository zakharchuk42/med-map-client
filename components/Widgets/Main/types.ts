import { VisitDTO } from '@/dto/visit.dto'
import { ScriptType } from '@/components/Widgets/Visits/List/types'

export interface MainLayoutProps {
	title?: String
}

export interface VisitType extends VisitDTO {
	script: ScriptType
}
