import React from 'react'
import { UiNavProps } from '@/components/Ui/UiNav/types'
import NavItem from '@/components/Ui/UiNav/components/NavItem'
import s from './nav.module.scss'

const UiNav: React.FC<UiNavProps> = ({ nav }) => {
	return (
		<nav className={s.nav}>
			<ul>
				{nav.map((item) => {
					if (item.skip) {
						return <React.Fragment key={item.label} />
					} else {
						return (
							<li key={item.label}>
								<NavItem
									label={item.label}
									link={item.link}
									Icon={item.Icon}
								/>
							</li>
						)
					}
				})}
			</ul>
		</nav>
	)
}

export default UiNav
