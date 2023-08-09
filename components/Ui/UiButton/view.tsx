'use client'

import React from 'react'
import Link from 'next/link'
import clsx from 'clsx'
import s from './buttom.module.scss'
import { colorMapper, sizeMapper } from '@/components/Ui/UiButton/class-names'
import UiSpinner from '@/components/Ui/UiSpinner/view'
import { ColorsEnum, UiButtonProps } from '@/components/Ui/UiButton/types'

const UiButton: React.FC<UiButtonProps> = ({
	children,
	onClick,
	component = 'button',
	color = ColorsEnum.BLUE,
	size = 'standard',
	disabled,
	pending,
	type,
	href,
}) => {
	const className = clsx(
		s.button,
		colorMapper[color],
		sizeMapper[size],
		disabled && s.button_disabled,
		pending && s.button_pending,
	)

	if (component === 'a' && href) {
		return (
			<Link className={className} href={href}>
				{children}
			</Link>
		)
	} else {
		return React.createElement(
			component,
			{
				className,
				onClick,
				type,
			},
			<>
				<span className={s.button__text}>
					{pending && <UiSpinner className={s.button__loader} />}
					{children}
				</span>
			</>,
		)
	}
}

export default UiButton
