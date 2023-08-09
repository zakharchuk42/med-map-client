import React from 'react'
import { ColorsEnum } from '@/components/Ui/UiButton/types'

export interface UiCardProps {
	children: React.ReactNode
	headerText?: string
	headerColor?: ColorsEnum
}
