import React from 'react'
import { ColorsEnum } from '@/components/Ui/UiButton/types'

export interface EditScriptFormProps {
	scriptId: number
	emptyData: React.ReactNode
	value: string
	fieldName: string
	color?: ColorsEnum
}
