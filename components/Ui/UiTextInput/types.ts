import React from 'react'

export interface UiTextInputProps {
	labelinput?: string
	required?: boolean
	onChange: (e: any) => void
	value: string
	helperText?: string
	error?: boolean
	rules?: any[]
	select?: boolean
	options?: {
		id: string
		value: string
		label: string | React.ReactNode
	}[]
	defaultValue?: string
	type?: string
	InputProps?: object
}
