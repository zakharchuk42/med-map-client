import React from 'react'
import { ContentLayoutBodyProps } from '@/components/Layout/Content/components/Body/types'
import s from './body.module.scss'

const ContentLayoutBody: React.FC<ContentLayoutBodyProps> = ({ children }) => {
	return <div className={s.body}>{children}</div>
}

export default ContentLayoutBody
