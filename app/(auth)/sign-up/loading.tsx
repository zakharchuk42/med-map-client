import React from 'react'
import UiBox from '@/components/Ui/UiBox/view'
import { Skeleton } from '@mui/material'

const Loading = () => {
	return (
		<UiBox flex>
			<UiBox width={'50%'} flex justify={'center'} align={'center'}>
				<UiBox flex direction={'column'} width={'60%'}>
					<UiBox width={'150px'} pb={'xxl'}>
						<Skeleton height={46} />
					</UiBox>
					<UiBox
						flex
						align={'center'}
						direction={'column'}
						pb={'xxl'}
					>
						<UiBox>
							<Skeleton height={46} width={'250px'} />
						</UiBox>
						<UiBox>
							<Skeleton height={26} width={'450px'} />
						</UiBox>
					</UiBox>
					<UiBox width={'100%'} pb={'xxl'}>
						<Skeleton height={46} width={'100%'} />
						<Skeleton height={46} width={'100%'} />
					</UiBox>
					<UiBox flex align={'center'} direction={'column'}>
						<UiBox width={'170px'}>
							<Skeleton height={46} width={'100%'} />
						</UiBox>
						<UiBox>
							<Skeleton height={26} width={'450px'} />
						</UiBox>
					</UiBox>
				</UiBox>
			</UiBox>
			<UiBox width={'50%'} height={'100vh'}>
				<Skeleton variant={'rectangular'} sx={{ height: '100%' }} />
			</UiBox>
		</UiBox>
	)
}

export default Loading
