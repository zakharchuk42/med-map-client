'use client'
import React from 'react'
import { NavItemProps } from '@/components/Ui/UiNav/components/types'
import Link from 'next/link'
import s from '../nav.module.scss'
import { usePathname } from 'next/navigation'

const NavItem: React.FC<NavItemProps> = ({ label, Icon, link }) => {
	const pathname = usePathname()
	const isActive = link === `/${pathname.split('/')[1]}` ? s.nav__active : ''

	return (
		<Link href={link} className={isActive}>
			<Icon /> {label}
		</Link>
	)
}

export default NavItem
