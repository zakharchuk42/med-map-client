import { VisitForm } from '@/components/Modules/Forms/Visit/types'

export interface VisitFormProps {
	handleClose: () => void
	textButton: string
	defaultValue?: VisitForm
}
