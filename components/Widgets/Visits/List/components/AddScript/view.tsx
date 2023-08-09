import React from 'react'
import UiModal from '@/components/Ui/UiModal/view'
import { useOpenState } from '@/hooks/usoOpenState'
import { AddScriptProps } from '@/components/Widgets/Visits/List/components/AddScript/types'
import PlaylistAdd from '@mui/icons-material/PlaylistAdd'
import UiSvg from '@/components/Ui/UiSvg/view'
import ScriptForm from '@/components/Modules/Forms/Script/view'

const AddScript: React.FC<AddScriptProps> = ({ visitId }) => {
	const { open, handleOpen, handleClose } = useOpenState(false)
	return (
		<>
			<UiSvg>
				<PlaylistAdd sx={{ color: '#147A3F' }} onClick={handleOpen} />
			</UiSvg>
			<UiModal
				open={open}
				handleClose={handleClose}
				title={'Додати рецепт'}
			>
				<ScriptForm
					visitId={visitId}
					textButton={'Додати рецепт'}
					handleClose={handleClose}
				/>
			</UiModal>
		</>
	)
}

export default AddScript
