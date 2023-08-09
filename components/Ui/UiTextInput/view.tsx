import React, { forwardRef } from 'react'
import { MenuItem, TextField } from '@mui/material'
import UiBox from '@/components/Ui/UiBox/view'
import UiTypography from '@/components/Ui/UiTypography/view'
import { UiTextInputProps } from '@/components/Ui/UiTextInput/types'

const UiTextInput: React.FC<UiTextInputProps> = forwardRef((props, ref) => {
	const { labelinput, required, select = false, options } = props
	const isReq = required && '*'

	return (
		<UiBox flex direction={'column'} gap={'3px'}>
			<label>
				<UiTypography variant={'small'} color={'gray'}>
					{labelinput} {isReq}
				</UiTypography>
			</label>
			<TextField
				variant={'outlined'}
				inputRef={ref}
				select={select}
				sx={{
					'.MuiInputBase-input': {
						padding: '10px 15px',
					},
					'.MuiFormHelperText-root': {
						position: 'absolute',
						top: '40px',
						left: '-10px',
					},
				}}
				{...props}
			>
				{options &&
					options.map((option, idx) => (
						<MenuItem
							key={`${option.id}__${idx}`}
							value={option.value}
						>
							{option.label}
						</MenuItem>
					))}
			</TextField>
		</UiBox>
	)
})

UiTextInput.displayName = 'UiTextInput'

export default UiTextInput
