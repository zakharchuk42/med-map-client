import React from 'react'
import { UiSvgProps } from '@/components/Ui/UiSvg/types'
import s from './svg.module.scss'

const UiSvg: React.FC<UiSvgProps> = ({ children }) => {
	return <div className={s.svgWrapper}>{children}</div>
}

export default UiSvg
