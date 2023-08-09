'use client'

import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import clsx from 'clsx'
import allVisits from '@/public/landing/all-visits.png'
import script from '@/public/landing/script.png'
import homeScript from '@/public/landing/home-script.png'
import docs from '@/public/landing/my-docs.png'
import s from './images.module.scss'

const ImagesLanding = () => {
	const [section, setSection] = useState(0)

	const setScrollVar = () => {
		const percentOfScreenHeightScroll: number =
			window.scrollY / window.innerHeight
		setSection(percentOfScreenHeightScroll)

		window.document.body.style.setProperty(
			'--landing-scroll',
			Math.min(percentOfScreenHeightScroll * 100, 100).toString(),
		)
	}

	useEffect(() => {
		window.addEventListener('scroll', setScrollVar)

		return () => {
			window.removeEventListener('scroll', setScrollVar)
		}
	}, [])

	return (
		<>
			<div className={s.images}>
				<Image
					src={allVisits}
					alt={'Всі візити'}
					className={clsx(s.landing__topImage, {
						[s.landing_show]: 1.5 > section && section >= 0,
					})}
					quality={100}
				/>
				<Image
					src={script}
					alt={'Рецепт'}
					className={clsx({
						[s.landing_show]: 2.5 > section && section > 1.5,
					})}
					quality={100}
				/>
				<Image
					src={homeScript}
					alt={'Домашня сторінка'}
					className={clsx({
						[s.landing_show]: 3.5 > section && section > 2.5,
					})}
					quality={100}
				/>
				<Image
					src={docs}
					alt={'Мої документи'}
					className={clsx({
						[s.landing_show]: 4.05 > section && section > 3.5,
					})}
					quality={100}
				/>
			</div>
		</>
	)
}

export default ImagesLanding
