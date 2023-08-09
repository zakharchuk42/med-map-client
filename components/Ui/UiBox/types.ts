import React from 'react'

type BoxDirection = ['row', 'column']
type BoxJustify = ['start', 'center', 'between', 'around', 'end']
type BoxAlign = ['start', 'end', 'stretch', 'center']
type BoxPadding = ['sm', 'md', 'lg', 'xl', 'xxl']

export interface UiBoxProps {
	children: React.ReactNode
	flex?: boolean
	direction?: BoxDirection[number]
	justify?: BoxJustify[number]
	align?: BoxAlign[number]
	width?: string
	height?: string
	gap?: string
	shadow?: boolean
	radius?: boolean
	padding?: BoxPadding[number]
	pt?: BoxPadding[number]
	pr?: BoxPadding[number]
	pb?: BoxPadding[number]
	className?: string
	pl?: BoxPadding[number]
}
