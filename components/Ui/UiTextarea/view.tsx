import { TextareaAutosize } from '@mui/material'
import React from 'react'
import s from './textarea.module.scss'
import { UiTextareaProps } from '@/components/Ui/UiTextarea/types'
import clsx from 'clsx'

export const UiTextarea: React.FC<UiTextareaProps> = ({
	value,
	onChange,
	disabled,
	minRows,
	maxRows,
	labelInput,
	border,
}) => {
	const borderClass = border ? s.textarea__border : ''
	const classes = clsx(s.textarea, borderClass)

	return (
		<div>
			{labelInput && (
				<div className={s.textarea__label}>{labelInput}</div>
			)}
			<TextareaAutosize
				value={value}
				onChange={onChange}
				minRows={minRows}
				maxRows={maxRows}
				className={classes}
				disabled={disabled}
			/>
		</div>
	)
}
