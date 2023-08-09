import React from 'react'
import s from './sidebar.module.scss'
import UiNav from '@/components/Ui/UiNav/view'
import { createNav } from '@/components/Layout/Page/Sidebar/utils/createNav'
import Image from 'next/image'
import LogoBg from '@/public/logo-bg.svg'

const Sidebar = () => {
	const nav = createNav()

	return (
		<div className={s.sidebar}>
			<UiNav nav={nav} />
			<Image src={LogoBg} alt={'logo bg'} className={s.sidebar__logoBg} />
		</div>
	)
}

export default Sidebar
