import React from 'react'
import { VisitsLayoutProps } from '@/components/Widgets/Visits/types'

export interface ContentLayoutHeaderProps extends VisitsLayoutProps {
	actions?: React.ReactNode
	backArrow?: boolean
}
