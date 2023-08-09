import React from 'react'
import { UiBoxProps } from '@/components/Ui/UiBox/types'
import {
	alignMapper,
	directionMapper,
	justifyMapper,
	paddingBottomMapper,
	paddingLeftMapper,
	paddingMapper,
	paddingRightMapper,
	paddingTopMapper,
} from '@/components/Ui/UiBox/class-names'
import clsx from 'clsx'
import s from './box.module.scss'

const UiBox: React.FC<UiBoxProps> = ({
	children,
	flex,
	direction,
	justify,
	align,
	width,
	height,
	gap,
	shadow,
	radius,
	padding,
	pt,
	pr,
	pb,
	pl,
	className,
}) => {
	const classNames = clsx(
		s.box,
		className,
		shadow && s.box_shadow,
		radius && s.box_radius,
		flex && s.box__flex,
		direction && directionMapper[direction],
		justify && justifyMapper[justify],
		align && alignMapper[align],
		padding && paddingMapper[padding],
		pt && paddingTopMapper[pt],
		pr && paddingRightMapper[pr],
		pb && paddingBottomMapper[pb],
		pl && paddingLeftMapper[pl],
	)
	return (
		<div
			className={classNames}
			style={{
				width,
				height,
				gap,
			}}
		>
			{children}
		</div>
	)
}

export default UiBox
