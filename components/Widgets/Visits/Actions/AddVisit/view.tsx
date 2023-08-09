'use client'

import React from 'react'
import UiButton from '@/components/Ui/UiButton/view'
import UiModal from '@/components/Ui/UiModal/view'
import VisitForm from '@/components/Modules/Forms/Visit/view'
import { useOpenState } from '@/hooks/usoOpenState'
import { ColorsEnum } from '@/components/Ui/UiButton/types'

const AddVisit = () => {
	const { open, handleOpen, handleClose } = useOpenState(false)
	return (
		<>
			<UiButton color={ColorsEnum.GREEN} onClick={handleOpen}>
				Запланувати візит
			</UiButton>
			<UiModal
				open={open}
				handleClose={handleClose}
				title={'Запланувати візит до лікаря'}
			>
				<VisitForm
					handleClose={handleClose}
					textButton={'Запланувати візит'}
				/>
			</UiModal>
		</>
	)
}

export default AddVisit
