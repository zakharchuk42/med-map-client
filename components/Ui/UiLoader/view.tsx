import React from 'react'
import {
	UiLoaderProps,
	UiLoadingCardProps,
} from '@/components/Ui/UiLoader/types'
import CardLayout from '@/components/Layout/Card/view'
import ContentLayout from '@/components/Layout/Content/view'
import { Skeleton } from '@mui/material'
import s from './loading.module.scss'
import UiBox from '@/components/Ui/UiBox/view'
import UiCard from '@/components/Ui/UiCard/view'

const fullHeight = {
	height: '100%',
}

export const UiLoadingCard: React.FC<UiLoadingCardProps> = ({
	variant = 'text',
	howMuch = 1,
}) => {
	const howMuchArr: number[] = []

	if (howMuch > 1) {
		for (let i = 0; i < howMuch; i++) {
			howMuchArr.push(i)
		}
	}

	return (
		<UiCard>
			<UiBox flex direction={'column'} gap={'20px'}>
				<UiBox width={'45%'}>
					<Skeleton sx={{ height: '46px' }} />
				</UiBox>
				<UiBox width={'100%'} height={'100px'}>
					{howMuch > 1 ? (
						<UiBox flex direction={'column'} gap={'15px'}>
							{howMuchArr.map((item) => {
								return (
									<Skeleton
										height={22}
										key={item}
										sx={fullHeight}
										variant={variant}
									/>
								)
							})}
						</UiBox>
					) : (
						<Skeleton sx={fullHeight} variant={variant} />
					)}
				</UiBox>
			</UiBox>
		</UiCard>
	)
}

const UiLoader: React.FC<UiLoaderProps> = () => {
	return (
		<ContentLayout>
			<div className={s.loading__header}>
				<UiBox width={'60%'} height={'42px'}>
					<Skeleton sx={fullHeight} />
				</UiBox>
				<UiBox width={'20%'} height={'42px'}>
					<Skeleton sx={fullHeight} />
				</UiBox>
			</div>
			<CardLayout>
				<UiBox flex direction={'column'} gap={'20px'} width={'100%'}>
					<UiBox
						flex
						justify={'between'}
						gap={'20px'}
						height={'298px'}
					>
						<UiBox flex width={'60%'}>
							<UiLoadingCard variant={'rectangular'} />
						</UiBox>
						<UiBox flex width={'40%'}>
							<UiLoadingCard howMuch={4} />
						</UiBox>
					</UiBox>
					<UiBox flex gap={'20px'} height={'305px'}>
						<UiBox flex width={'50%'}>
							<UiLoadingCard variant={'rectangular'} />
						</UiBox>
						<UiBox flex width={'50%'}>
							<UiLoadingCard variant={'rectangular'} />
						</UiBox>
					</UiBox>
					<UiBox flex height={'220px'}>
						<UiLoadingCard variant={'rectangular'} />
					</UiBox>
				</UiBox>
			</CardLayout>
		</ContentLayout>
	)
}

export default UiLoader
