import React from 'react'
import { UiCardProps } from '@/components/Ui/UiCard/types'
import s from './card.module.scss'
import UiTypography from '@/components/Ui/UiTypography/view'
import clsx from 'clsx'

const headerColorsMapper = {
	red: s.card__header_red,
	gray: s.card__header_gray,
	green: s.card__header_green,
	blue: s.card__header_blue,
	orange: s.card__header_orange,
}

const UiCard: React.FC<UiCardProps> = ({
	children,
	headerText,
	headerColor,
}) => {
	const headerColors = headerColor ? headerColorsMapper[headerColor] : ''
	const headerClasses = clsx(s.card__header, headerColors)

	return (
		<div className={s.card}>
			{headerText && (
				<div className={headerClasses}>
					<UiTypography variant={'h2'} color={headerColor}>
						{headerText}
					</UiTypography>
				</div>
			)}
			<div className={s.card__body}>{children}</div>
		</div>
	)
}

export default UiCard
