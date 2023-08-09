import React from 'react'

export interface UiModalProps {
	children: React.ReactNode
	open: boolean
	handleClose: () => void
	title: string
}
