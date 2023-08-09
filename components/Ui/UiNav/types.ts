import React from 'react'

export interface UiNavItem {
	label: string
	link: string
	skip: boolean
	Icon: React.ElementType
}

export interface UiNavProps {
	nav: UiNavItem[]
}
