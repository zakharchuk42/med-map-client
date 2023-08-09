import React from 'react'
import { ContentLayoutProps } from '@/components/Layout/Content/types'
import s from './content.module.scss'

const ContentLayout: React.FC<ContentLayoutProps> = ({ children }) => {
	return <div className={s.content}>{children}</div>
}

export default ContentLayout
