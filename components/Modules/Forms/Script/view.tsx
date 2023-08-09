import React from 'react'
import {
	AddScriptForm,
	ScriptFormProps,
} from '@/components/Modules/Forms/Script/types'
import UiButton from '@/components/Ui/UiButton/view'
import UiBox from '@/components/Ui/UiBox/view'
import { Controller, SubmitHandler, useForm } from 'react-hook-form'
import UiTextInput from '@/components/Ui/UiTextInput/view'
import { addScript } from '@/api/script'
import { ColorsEnum } from '@/components/Ui/UiButton/types'
import { yupResolver } from '@hookform/resolvers/yup'
import { addScriptValidation } from '@/components/Modules/Forms/validation/validation'
import { UiTextarea } from '@/components/Ui/UiTextarea/view'
import { useHandlerReq } from '@/hooks/useHandlerReq'

const ScriptForm: React.FC<ScriptFormProps> = ({
	visitId,
	textButton,
	handleClose,
}) => {
	const { isLoading, handler } = useHandlerReq()

	const {
		control,
		handleSubmit,
		formState: { errors },
	} = useForm({
		mode: 'onChange',
		defaultValues: {
			name: '',
			analyses: '',
			otherNotes: '',
		},
		//@ts-ignore
		resolver: yupResolver<AddScriptForm>(addScriptValidation),
	})

	const submit: SubmitHandler<AddScriptForm> = async (script) => {
		await handler(addScript(script, visitId))
		handleClose()
	}

	return (
		<form noValidate onSubmit={handleSubmit(submit)}>
			<UiBox flex direction={'column'} pb={'xl'} gap={'25px'}>
				<Controller
					control={control}
					name={'name'}
					render={({ field }) => {
						return (
							<UiTextInput
								labelinput={'Рецепт'}
								required
								onChange={(e) => field.onChange(e)}
								value={field.value}
								error={!!errors.name}
								helperText={errors.name?.message}
							/>
						)
					}}
				/>
				<Controller
					control={control}
					name={'analyses'}
					render={({ field }) => {
						return (
							<UiTextarea
								value={field.value}
								onChange={(e) => field.onChange(e)}
								labelInput={'Аналізи'}
								minRows={4}
								maxRows={4}
							/>
						)
					}}
				/>
				<Controller
					control={control}
					name={'otherNotes'}
					render={({ field }) => {
						return (
							<UiTextarea
								value={field.value}
								onChange={(e) => field.onChange(e)}
								labelInput={'Інші призначення'}
								minRows={4}
								maxRows={4}
								border
							/>
						)
					}}
				/>
			</UiBox>
			<UiBox flex justify={'end'}>
				<UiButton
					disabled={isLoading}
					pending={isLoading}
					color={ColorsEnum.GREEN}
				>
					{textButton}
				</UiButton>
			</UiBox>
		</form>
	)
}

export default ScriptForm
