import React from 'react'
import s from './auth.module.scss'
import Image from 'next/image'
import UiTypography from '@/components/Ui/UiTypography/view'
import UiBox from '@/components/Ui/UiBox/view'
import { AuthProps } from '@/components/Layout/Auth/types'
import clsx from 'clsx'
import logoBg from '@/public/logo-bg.svg'

import bgImage from '@/public/background.jpg'
import UiLogo from '@/components/Ui/UiLogo/view'

const AuthLayout: React.FC<AuthProps> = ({
	title,
	subtitle,
	revers = false,
	children,
}) => {
	const wrapperClass = clsx(s.auth, revers && s.auth_revers)
	return (
		<div className={wrapperClass}>
			<Image className={s.auth__logoBg} src={logoBg} alt={'logoBg'} />
			<UiBox
				width={'50%'}
				padding={'lg'}
				flex
				justify={'center'}
				align={'center'}
			>
				<UiBox width={'65%'}>
					<UiBox pb={'xxl'}>
						<UiLogo />
					</UiBox>
					<UiBox pb={'xxl'} gap={'20px'} flex direction={'column'}>
						<UiTypography
							variant={'h2'}
							weight={'bold'}
							align={'center'}
						>
							{title}
						</UiTypography>
						<UiTypography color={'gray'} align={'center'}>
							{subtitle}
						</UiTypography>
					</UiBox>
					{children}
				</UiBox>
			</UiBox>
			<div className={s.auth__image}>
				<Image
					src={bgImage}
					alt={'Auth background'}
					fill
					quality={100}
				/>
			</div>
		</div>
	)
}

export default AuthLayout
