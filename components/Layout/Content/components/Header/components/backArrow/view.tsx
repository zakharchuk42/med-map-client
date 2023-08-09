'use client'

import React from 'react'
import { useRouter } from 'next/navigation'
import ArrowBackIcon from '@mui/icons-material/ArrowBack'
import UiSvg from '@/components/Ui/UiSvg/view'
import s from './backArrow.module.scss'

const BackArrow = () => {
	const router = useRouter()
	return (
		<div className={s.backArrow} onClick={() => router.back()}>
			<UiSvg>
				<ArrowBackIcon sx={{ fontSize: '16px' }} />
			</UiSvg>
		</div>
	)
}

export default BackArrow
