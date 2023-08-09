import React from 'react'
import s from './page.module.scss'
import { PageLayoutProps } from '@/components/Layout/Page/types'
import Header from '@/components/Layout/Page/Header/view'
import Sidebar from '@/components/Layout/Page/Sidebar/view'
import Board from '@/components/Layout/Page/Board/view'

const PageLayout: React.FC<PageLayoutProps> = ({ children }) => {
	return (
		<>
			<Header />
			<div className={s.page}>
				<Sidebar />
				<Board>{children}</Board>
			</div>
		</>
	)
}

export default PageLayout
