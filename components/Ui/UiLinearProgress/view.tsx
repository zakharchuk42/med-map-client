import * as React from 'react'
import LinearProgress from '@mui/material/LinearProgress'
import { UiLinearProgressProps } from '@/components/Ui/UiLinearProgress/types'
import UiBox from '@/components/Ui/UiBox/view'
import UiTypography from '@/components/Ui/UiTypography/view'
import { formatDate } from '@/utils/formatDate'

const UiLinearProgress: React.FC<UiLinearProgressProps> = ({
	min,
	max,
	progress = 0,
	name,
	color,
}) => {
	const colorTransp = color?.split(')')[0]
	return (
		<UiBox width={'100%'} pb={'md'}>
			<UiBox>
				<UiTypography variant={'small'}>{name}</UiTypography>
			</UiBox>
			<LinearProgress
				variant='determinate'
				value={progress}
				sx={{
					'.MuiLinearProgress-bar': {
						background: color,
					},
					background: `${colorTransp}, 0.2)`,
					height: '8px',
					borderRadius: '6px',
				}}
			/>
			<UiBox flex justify={'between'}>
				{min && max ? (
					<>
						<UiTypography variant={'small'} color={'gray'}>
							{formatDate(min).slice(0, 5)}
						</UiTypography>
						<UiTypography variant={'small'} color={'gray'}>
							{formatDate(max).slice(0, 5)}
						</UiTypography>
					</>
				) : (
					<>
						<UiTypography variant={'small'}>0</UiTypography>
						<UiTypography variant={'small'}>0</UiTypography>
					</>
				)}
			</UiBox>
		</UiBox>
	)
}

export default UiLinearProgress
