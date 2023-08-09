'use client'

import React from 'react'
import s from './logout.module.scss'
import { useRouter } from 'next/navigation'
import { MyRoutes } from '@/constants/routes'
import { logout } from '@/api/auth'

const LogOut = () => {
	const router = useRouter()

	const logoutHandler = () => {
		logout()
		router.push(MyRoutes.ROOT_PAGE)
	}

	return (
		<button className={s.logout} onClick={logoutHandler}>
			Вихід
		</button>
	)
}

export default LogOut
