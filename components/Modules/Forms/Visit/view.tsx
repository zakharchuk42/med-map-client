'use client'

import React, { useState } from 'react'
import { Controller, SubmitHandler, useForm } from 'react-hook-form'
import { useRouter } from 'next/navigation'
import UiButton from '@/components/Ui/UiButton/view'
import UiBox from '@/components/Ui/UiBox/view'
import UiTextInput from '@/components/Ui/UiTextInput/view'
import {
	OnlineStatusEnum,
	VisitForm,
} from '@/components/Modules/Forms/Visit/types'
import UiDatePicker from '@/components/Ui/UiDatePicker/view'
import { addVisit, updateVisit } from '@/api/visits'
import { selectedOptions } from '@/components/Modules/Forms/Visit/helper/selectedOptions'
import { InputAdornment } from '@mui/material'
import { toast } from 'react-toastify'
import { VisitFormProps } from '@/components/Widgets/Visits/Actions/AddVisit/types'
import { StatusEnum } from '@/components/Ui/UiStatus/types'
import { RatingEnum } from '@/components/Ui/UiRating/types'
import { ColorsEnum } from '@/components/Ui/UiButton/types'
import { addVisitValidation } from '@/components/Modules/Forms/validation/validation'
import { yupResolver } from '@hookform/resolvers/yup'

const VisitForm: React.FC<VisitFormProps> = ({
	handleClose,
	textButton,
	defaultValue,
}) => {
	const router = useRouter()
	const [isLoading, setIsLoading] = useState<boolean>(false)

	const {
		control,
		handleSubmit,
		formState: { errors },
	} = useForm({
		mode: 'onChange',
		defaultValues: {
			status: defaultValue?.status ?? StatusEnum.PLANNED,
			doctors: defaultValue?.doctors ?? '',
			spec: defaultValue?.spec ?? '',
			date: defaultValue?.date ? new Date(defaultValue.date) : new Date(),
			city: defaultValue?.city ?? '',
			impression: defaultValue?.impression ?? RatingEnum.WAIT,
			hospital: defaultValue?.hospital ?? '',
			efficiency: defaultValue?.efficiency ?? RatingEnum.WAIT,
			phone: defaultValue?.phone ?? '',
			online: defaultValue?.online ?? OnlineStatusEnum.NO,
			diagnose: defaultValue?.diagnose ?? '—',
		},
		//@ts-ignore
		resolver: yupResolver<VisitForm>(addVisitValidation),
	})

	const submit: SubmitHandler<VisitForm> = async (data) => {
		try {
			setIsLoading(true)

			const { message } = defaultValue?.id
				? await updateVisit(data, defaultValue.id)
				: await addVisit(data)

			toast.success(message)
		} catch (err: any) {
			setIsLoading(false)
			toast.error(err.response.data.message)
		} finally {
			router.refresh()
			setIsLoading(false)
			handleClose()
		}
	}

	return (
		<form noValidate onSubmit={handleSubmit(submit)}>
			<UiBox flex direction={'column'} gap={'25px'} pb={'xl'}>
				<UiBox flex gap={'15px'}>
					<UiBox width={'35%'}>
						<Controller
							control={control}
							name={'status'}
							render={({ field }) => {
								return (
									<UiTextInput
										labelinput={'Статус лікування'}
										onChange={(e) => field.onChange(e)}
										value={field.value}
										select
										options={selectedOptions['status']}
									/>
								)
							}}
						/>
					</UiBox>
					<UiBox width={'65%'}>
						<Controller
							control={control}
							name={'doctors'}
							render={({ field }) => {
								return (
									<UiTextInput
										labelinput={'Лікар'}
										required
										onChange={(e) => field.onChange(e)}
										value={field.value}
										helperText={errors.doctors?.message}
										error={!!errors.doctors}
									/>
								)
							}}
						/>
					</UiBox>
				</UiBox>
				<UiBox flex gap={'15px'}>
					<UiBox width={'60%'}>
						<Controller
							control={control}
							name={'spec'}
							render={({ field }) => {
								return (
									<UiTextInput
										labelinput={'Спеціалізація'}
										required
										onChange={(e) => field.onChange(e)}
										value={field.value}
										helperText={errors.spec?.message}
										error={!!errors.spec}
									/>
								)
							}}
						/>
					</UiBox>
					<UiBox width={'40%'}>
						<Controller
							control={control}
							name={'date'}
							render={({ field }) => {
								return (
									<UiDatePicker
										labelinput={'Дата прийому'}
										onChange={(e: any) => field.onChange(e)}
										value={field.value}
										showTimeSelect
										required
									/>
								)
							}}
						/>
					</UiBox>
				</UiBox>
				<UiBox flex gap={'15px'}>
					<UiBox width={'35%'}>
						<Controller
							control={control}
							name={'impression'}
							render={({ field }) => {
								return (
									<UiTextInput
										labelinput={'Враження'}
										onChange={(e) => field.onChange(e)}
										value={field.value}
										helperText={errors.impression?.message}
										select
										options={selectedOptions['rating']}
									/>
								)
							}}
						/>
					</UiBox>
					<UiBox width={'65%'}>
						<Controller
							control={control}
							name={'hospital'}
							render={({ field }) => {
								return (
									<UiTextInput
										labelinput={'Лікарня'}
										required
										onChange={(e) => field.onChange(e)}
										value={field.value}
										helperText={errors.hospital?.message}
										error={!!errors.hospital}
									/>
								)
							}}
						/>
					</UiBox>
				</UiBox>
				<UiBox flex gap={'15px'}>
					<UiBox width={'35%'}>
						<Controller
							control={control}
							name={'efficiency'}
							render={({ field }) => {
								return (
									<UiTextInput
										labelinput={'Ефективність'}
										onChange={(e) => field.onChange(e)}
										value={field.value}
										helperText={errors.efficiency?.message}
										select
										options={selectedOptions['rating']}
									/>
								)
							}}
						/>
					</UiBox>
					<UiBox width={'65%'}>
						<Controller
							control={control}
							name={'phone'}
							render={({ field }) => {
								return (
									<UiTextInput
										labelinput={'Телефон'}
										required
										onChange={(e) => field.onChange(e)}
										value={field.value}
										helperText={errors.phone?.message}
										type={'number'}
										error={!!errors.phone}
										InputProps={{
											startAdornment: (
												<InputAdornment position='start'>
													+380
												</InputAdornment>
											),
										}}
									/>
								)
							}}
						/>
					</UiBox>
				</UiBox>
				<UiBox flex gap={'15px'}>
					<UiBox width={'20%'}>
						<Controller
							control={control}
							name={'online'}
							render={({ field }) => {
								return (
									<UiTextInput
										labelinput={'Онлайн'}
										onChange={(e) => field.onChange(e)}
										value={field.value}
										helperText={errors.online?.message}
										select
										options={selectedOptions['online']}
									/>
								)
							}}
						/>
					</UiBox>
					<UiBox width={'80%'}>
						<Controller
							control={control}
							name={'city'}
							render={({ field }) => {
								return (
									<UiTextInput
										labelinput={'Місто'}
										onChange={(e) => field.onChange(e)}
										value={field.value}
										helperText={errors.city?.message}
										required
										error={!!errors.city}
									/>
								)
							}}
						/>
					</UiBox>
				</UiBox>
				<Controller
					control={control}
					name={'diagnose'}
					render={({ field }) => {
						return (
							<UiTextInput
								labelinput={'Діагноз'}
								onChange={(e) => field.onChange(e)}
								value={field.value}
								helperText={errors.diagnose?.message}
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

export default VisitForm
