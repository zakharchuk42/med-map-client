import React from 'react'
import s from './header.module.scss'
import UiLogo from '@/components/Ui/UiLogo/view'
import UiBox from '@/components/Ui/UiBox/view'
import LogOut from '@/components/Layout/Page/Header/LogOut/view'
import UserBox from '@/components/Layout/Page/Header/UserBox/view'

const Header = () => {
	return (
		<div className={s.header}>
			<UiLogo />
			<UiBox flex gap={'20px'} align={'center'}>
				<LogOut />
				<UserBox />
			</UiBox>
		</div>
	)
}

export default Header
