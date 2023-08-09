import React from 'react'

type TypographyAlign = ['center', 'right']
type TypographyWeight = ['semibold', 'bold']
type TypographyVariant = ['h1', 'h2', 'subtitle', 'body', 'small']
type TypographyColor = [
	'dark',
	'white',
	'gray',
	'gray_l',
	'green',
	'blue',
	'red',
	'orange',
]

export interface UiTypographyProps {
	children: React.ReactNode
	className?: string
	variant?: TypographyVariant[number]
	color?: TypographyColor[number]
	align?: TypographyAlign[number]
	weight?: TypographyWeight[number]
}
