import React from 'react'
import { EmptyDataProps } from '@/components/Ui/UiEmptyData/types'
import s from './emptyData.module.scss'
import UiBox from '@/components/Ui/UiBox/view'
import UiTypography from '@/components/Ui/UiTypography/view'

const UiEmptyData: React.FC<EmptyDataProps> = ({ title, text, icon }) => {
	return (
		<div className={s.emptyData}>
			<UiBox>{icon}</UiBox>
			<UiBox flex direction={'column'}>
				<UiTypography variant={'h2'} color={'gray'} align={'center'}>
					{title}
				</UiTypography>
				{text && (
					<UiTypography color={'gray'} align={'center'}>
						{text}
					</UiTypography>
				)}
			</UiBox>
		</div>
	)
}

export default UiEmptyData
