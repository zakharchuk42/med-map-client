import React from 'react'
import { CardLayoutProps } from '@/components/Layout/Card/types'
import s from './card.module.scss'

const CardLayout: React.FC<CardLayoutProps> = ({ children }) => {
	return <div className={s.card}>{children}</div>
}

export default CardLayout
