import React from 'react'
import DeleteIcon from '@mui/icons-material/Delete'
import { useOpenState } from '@/hooks/usoOpenState'
import UiModal from '@/components/Ui/UiModal/view'
import UiSvg from '@/components/Ui/UiSvg/view'
import UiButton from '@/components/Ui/UiButton/view'
import UiBox from '@/components/Ui/UiBox/view'
import AssignmentIndIcon from '@mui/icons-material/AssignmentInd'
import UiTypography from '@/components/Ui/UiTypography/view'
import { ColorsEnum } from '@/components/Ui/UiButton/types'
import { DeleteDrugsProps } from '@/components/Modules/Script/components/Drugs/components/CardList/components/DeleteDrugs/types'
import { deleteDrugs } from '@/api/drugs'
import { useHandlerReq } from '@/hooks/useHandlerReq'

const DeleteDrugs: React.FC<DeleteDrugsProps> = ({ drugsId }) => {
	const { open, handleOpen, handleClose } = useOpenState(false)
	const { isLoading, handler } = useHandlerReq()

	const onDelete = async () => {
		await handler(deleteDrugs(drugsId))
		handleClose()
	}

	return (
		<>
			<UiSvg>
				<DeleteIcon sx={{ color: '#919699' }} onClick={handleOpen} />
			</UiSvg>
			<UiModal
				open={open}
				handleClose={handleClose}
				title={'Видалити ліки'}
			>
				<UiBox flex gap={'10px'} pb={'xxl'} pt={'xl'} align={'center'}>
					<AssignmentIndIcon
						sx={{ fontSize: '46px', color: '#919699' }}
					/>
					<UiTypography variant={'subtitle'}>
						Ви впевнені, що хочете видалити ці ліки?
					</UiTypography>
				</UiBox>
				<UiBox flex justify={'end'}>
					<UiBox flex gap={'20px'}>
						<UiButton onClick={handleClose}>Відмінити</UiButton>
						<UiButton
							color={ColorsEnum.RED}
							onClick={onDelete}
							pending={isLoading}
							disabled={isLoading}
						>
							Видалити
						</UiButton>
					</UiBox>
				</UiBox>
			</UiModal>
		</>
	)
}

export default DeleteDrugs
