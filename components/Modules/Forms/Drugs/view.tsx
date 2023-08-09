'use client'

import React from 'react'
import {
	DrugsFormProps,
	DrugsFormResolver,
} from '@/components/Modules/Forms/Drugs/types'
import UiTextInput from '@/components/Ui/UiTextInput/view'
import { Controller, SubmitHandler, useForm } from 'react-hook-form'
import { addDrugs } from '@/api/drugs'
import UiDatePicker from '@/components/Ui/UiDatePicker/view'
import UiBox from '@/components/Ui/UiBox/view'
import UiButton from '@/components/Ui/UiButton/view'
import { ColorsEnum } from '@/components/Ui/UiButton/types'
import { yupResolver } from '@hookform/resolvers/yup'
import { addDrugsValidation } from '@/components/Modules/Forms/validation/validation'
import { useHandlerReq } from '@/hooks/useHandlerReq'

const DrugsForm: React.FC<DrugsFormProps> = ({ scriptId, textButton }) => {
	const { isLoading, handler } = useHandlerReq()

	const {
		control,
		handleSubmit,
		reset,
		formState: { errors },
	} = useForm({
		mode: 'onChange',
		defaultValues: {
			name: '',
			amount: '',
			days: '',
			startAt: new Date(),
			time: '',
		},
		//@ts-ignore
		resolver: yupResolver<DrugsFormResolver>(addDrugsValidation),
	})

	const submit: SubmitHandler<DrugsFormResolver> = async (drugs) => {
		await handler(addDrugs(drugs, scriptId))
		reset()
	}

	return (
		<form noValidate onSubmit={handleSubmit(submit)}>
			<UiBox flex gap={'15px'} justify={'between'} pt={'md'} pb={'md'}>
				<UiBox width={'60%'}>
					<Controller
						control={control}
						name={'name'}
						render={({ field }) => {
							return (
								<UiTextInput
									labelinput={'Імʼя'}
									required
									onChange={(e) => field.onChange(e)}
									value={field.value}
									error={!!errors.name}
									helperText={errors.name?.message}
								/>
							)
						}}
					/>
				</UiBox>
				<Controller
					control={control}
					name={'amount'}
					render={({ field }) => {
						return (
							<UiTextInput
								labelinput={'Прийомів у день'}
								type={'number'}
								required
								onChange={(e) => field.onChange(e)}
								value={field.value}
								error={!!errors.amount}
								helperText={errors.amount?.message}
							/>
						)
					}}
				/>
				<Controller
					control={control}
					name={'days'}
					render={({ field }) => {
						return (
							<UiTextInput
								labelinput={'Днів'}
								type={'number'}
								required
								onChange={(e) => field.onChange(e)}
								value={field.value}
								error={!!errors.days}
								helperText={errors.days?.message}
							/>
						)
					}}
				/>
			</UiBox>
			<UiBox flex gap={'5px'} justify={'between'}>
				<Controller
					control={control}
					name={'time'}
					render={({ field }) => {
						return (
							<UiTextInput
								labelinput={'Час (12:30, 14:00, 18:15)'}
								onChange={(e) => field.onChange(e)}
								value={field.value}
								error={!!errors.time}
								helperText={errors.time?.message}
							/>
						)
					}}
				/>
				<Controller
					control={control}
					name={'startAt'}
					render={({ field }) => {
						return (
							<UiDatePicker
								required
								labelinput={'Дата початку'}
								onChange={(e: any) => field.onChange(e)}
								value={field.value}
								showTimeSelect
							/>
						)
					}}
				/>

				<UiBox flex align={'end'}>
					<UiButton
						disabled={isLoading}
						pending={isLoading}
						color={ColorsEnum.GREEN}
					>
						{textButton}
					</UiButton>
				</UiBox>
			</UiBox>
		</form>
	)
}

export default DrugsForm
