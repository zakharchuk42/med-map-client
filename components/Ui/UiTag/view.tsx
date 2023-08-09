import React from 'react'
import { UiTagProps } from '@/components/Ui/UiTag/types'
import clsx from 'clsx'
import s from './tag.module.scss'
import { ColorsEnum } from '@/components/Ui/UiButton/types'

const colorsMapper = {
	blue: s.tag_blue,
	red: s.tag_red,
	gray: s.tag_gray,
	green: s.tag_green,
	orange: s.tag_orange,
}

const UiTag: React.FC<UiTagProps> = ({ title, color = ColorsEnum.BLUE }) => {
	const classes = clsx(s.tag, colorsMapper[color])

	return <div className={classes}>{title}</div>
}

export default UiTag
