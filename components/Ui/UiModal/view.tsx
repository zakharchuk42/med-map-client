import React from 'react'
import { UiModalProps } from '@/components/Ui/UiModal/types'
import { Modal } from '@mui/material'
import s from './modal.module.scss'
import UiCard from '@/components/Ui/UiCard/view'
import UiBox from '@/components/Ui/UiBox/view'
import UiTypography from '@/components/Ui/UiTypography/view'
import CloseIcon from '@mui/icons-material/Close'
import UiSvg from '@/components/Ui/UiSvg/view'

const UiModal: React.FC<UiModalProps> = ({
	children,
	open,
	handleClose,
	title,
}) => {
	return (
		<Modal open={open} onClose={handleClose}>
			<div className={s.modal}>
				<UiCard>
					<UiBox width={'100%'}>
						<UiBox
							flex
							align={'center'}
							justify={'between'}
							pb={'xl'}
						>
							<UiTypography variant={'h2'}>{title}</UiTypography>
							<UiSvg>
								<CloseIcon onClick={handleClose} />
							</UiSvg>
						</UiBox>
						{children}
					</UiBox>
				</UiCard>
			</div>
		</Modal>
	)
}

export default UiModal
