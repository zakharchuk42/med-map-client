import React from 'react'
import s from './section.module.scss'

const Section = ({
	title,
	text,
	list,
}: {
	title: string
	text: string
	list?: string[]
}) => {
	return (
		<div className={s.section}>
			<div className={s.section__block}>
				<div className={s.section__title}>
					<h1>{title}</h1>
				</div>
				<div className={s.section__text}>
					<p>{text}</p>
				</div>
				{list && (
					<div className={s.section__list}>
						{list.map((item) => (
							<p>{item}</p>
						))}
					</div>
				)}
			</div>
		</div>
	)
}

export default Section
