import React from 'react'

export enum ColorsEnum {
	RED = 'red',
	GRAY = 'gray',
	GREEN = 'green',
	BLUE = 'blue',
	ORANGE = 'orange',
}

export interface UiButtonProps {
	children: React.ReactNode
	onClick?: (values: any) => any
	component?: 'a' | 'button'
	color?: ColorsEnum
	size?: 'standard' | 'small' | 'big'
	disabled?: boolean
	pending?: boolean
	type?: string
	href?: string
}
