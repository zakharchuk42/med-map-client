import React from 'react'
import s from './spinner.module.scss'
import clsx from 'clsx'
import { UiSpinnerProps } from '@/components/Ui/UiSpinner/types'

const sizeMapper = {
	sm: s.loader__size_sm,
	md: s.loader__size_md,
	lg: s.loader__size_lg,
}

const UiSpinner: React.FC<UiSpinnerProps> = ({ className, size = 'sm' }) => {
	const classCustom = clsx(s.loader, sizeMapper[size], className)
	return <span className={classCustom}></span>
}

export default UiSpinner
