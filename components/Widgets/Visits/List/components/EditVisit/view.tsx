import React from 'react'
import { EditVisitProps } from '@/components/Widgets/Visits/List/components/EditVisit/types'
import UiSvg from '@/components/Ui/UiSvg/view'
import UiModal from '@/components/Ui/UiModal/view'
import { useOpenState } from '@/hooks/usoOpenState'
import ModeIcon from '@mui/icons-material/Mode'
import VisitForm from '@/components/Modules/Forms/Visit/view'

const EditVisit: React.FC<EditVisitProps> = ({ defaultValue }) => {
	const { open, handleOpen, handleClose } = useOpenState(false)

	return (
		<>
			<UiSvg>
				<ModeIcon sx={{ color: '#F3A72E' }} onClick={handleOpen} />
			</UiSvg>
			<UiModal
				open={open}
				handleClose={handleClose}
				title={'Редагувати візит'}
			>
				<VisitForm
					handleClose={handleClose}
					textButton={'Редагувати'}
					defaultValue={defaultValue}
				/>
			</UiModal>
		</>
	)
}

export default EditVisit
