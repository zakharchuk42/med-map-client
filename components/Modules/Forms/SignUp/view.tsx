'use client'

import React, { useState } from 'react'
import { useRouter } from 'next/navigation'
import { Controller, SubmitHandler, useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { registerValidation } from '@/components/Modules/Forms/validation/validation'
import { setCookie } from 'nookies'
import { toast } from 'react-toastify'
import UiBox from '@/components/Ui/UiBox/view'
import UiTextInput from '@/components/Ui/UiTextInput/view'
import UiButton from '@/components/Ui/UiButton/view'
import UiTypography from '@/components/Ui/UiTypography/view'
import Link from 'next/link'
import { RegisterForm } from '@/components/Modules/Forms/SignUp/types'
import { MyRoutes } from '@/constants/routes'
import { register } from '@/api/auth'

const SignUpForm = () => {
	const router = useRouter()
	const [isError, setIsError] = useState<boolean>(false)
	const [isLoading, setIsLoading] = useState<boolean>(false)

	const {
		control,
		handleSubmit,
		formState: { errors },
	} = useForm<RegisterForm>({
		mode: 'onChange',
		defaultValues: {
			email: '',
			password: '',
			name: '',
		},
		resolver: yupResolver<RegisterForm>(registerValidation),
	})

	const submit: SubmitHandler<RegisterForm> = async (data) => {
		try {
			setIsLoading(true)
			const { token } = await register({ ...data, avatar: '' })
			setCookie(null, '_token', token, {
				path: '/',
			})
			await router.push(MyRoutes.MAIN)
		} catch (err: any) {
			setIsError(true)
			toast.error(err.response.data.message)
		} finally {
			setIsLoading(false)
		}
	}

	return (
		<>
			<form noValidate onSubmit={handleSubmit(submit)}>
				<UiBox flex direction={'column'} gap={'20px'} pb={'xl'}>
					<Controller
						control={control}
						name={'name'}
						render={({ field }) => {
							return (
								<UiTextInput
									labelinput={'Імʼя'}
									required
									onChange={(e) => {
										field.onChange(e)
										setIsError(false)
									}}
									value={field.value}
									error={isError || !!errors.name}
									helperText={errors.name?.message}
								/>
							)
						}}
					/>
					<Controller
						control={control}
						name={'email'}
						render={({ field }) => {
							return (
								<UiTextInput
									labelinput={'Пошта'}
									required
									onChange={(e) => {
										field.onChange(e)
										setIsError(false)
									}}
									value={field.value}
									error={isError || !!errors.email}
									helperText={errors.email?.message}
								/>
							)
						}}
					/>
					<Controller
						control={control}
						name={'password'}
						render={({ field }) => {
							return (
								<UiTextInput
									labelinput={'Пароль'}
									required
									onChange={(e) => {
										field.onChange(e)
										setIsError(false)
									}}
									value={field.value}
									error={isError || !!errors.password}
									helperText={errors.password?.message}
								/>
							)
						}}
					/>
				</UiBox>
				<UiBox flex justify={'center'} pb={'xl'}>
					<UiButton disabled={isLoading} pending={isLoading}>
						Реєстрація
					</UiButton>
				</UiBox>
			</form>
			<UiBox pb={'sm'}>
				<UiTypography align={'center'} variant={'small'}>
					У вас вже є аккаунт?{' '}
					<Link href={MyRoutes.SIGN_IN}>Увійти в аккаунт</Link>
				</UiTypography>
			</UiBox>
		</>
	)
}

export default SignUpForm
