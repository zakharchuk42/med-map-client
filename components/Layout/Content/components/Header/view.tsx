import React from 'react'
import s from './header.module.scss'
import { ContentLayoutHeaderProps } from '@/components/Layout/Content/components/Header/type'
import UiTypography from '@/components/Ui/UiTypography/view'
import BackArrow from '@/components/Layout/Content/components/Header/components/backArrow/view'
import UiBox from '@/components/Ui/UiBox/view'

const ContentLayoutHeader: React.FC<ContentLayoutHeaderProps> = ({
	title,
	actions,
	backArrow,
}) => {
	return (
		<div className={s.header}>
			<UiBox flex align={'center'} gap={'20px'}>
				{backArrow && <BackArrow />}
				<UiTypography variant={'h1'}>{title}</UiTypography>
			</UiBox>
			{actions && actions}
		</div>
	)
}

export default ContentLayoutHeader
