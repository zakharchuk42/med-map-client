import React from 'react'
import { UiTypographyProps } from '@/components/Ui/UiTypography/types'
import clsx from 'clsx'
import {
	alignMapper,
	colorMapper,
	variantMapper,
	weightMapper,
} from '@/components/Ui/UiTypography/class-names'

const UiTypography: React.FC<UiTypographyProps> = ({
	children,
	className: classNameProps,
	variant = 'body',
	color = 'dark',
	weight,
	align,
}) => {
	const className = clsx(
		classNameProps,
		colorMapper[color],
		variantMapper[variant],
		weight && weightMapper[weight],
		align && alignMapper[align],
	)

	return React.createElement(
		'p',
		{
			className,
		},
		children,
	)
}

export default UiTypography
