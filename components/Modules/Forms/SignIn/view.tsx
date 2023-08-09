'use client'

import React, { useState } from 'react'
import { useRouter } from 'next/navigation'
import UiBox from '@/components/Ui/UiBox/view'
import UiTextInput from '@/components/Ui/UiTextInput/view'
import UiButton from '@/components/Ui/UiButton/view'
import { Controller, SubmitHandler, useForm } from 'react-hook-form'
import { setCookie } from 'nookies'
import { yupResolver } from '@hookform/resolvers/yup'
import { loginValidation } from '@/components/Modules/Forms/validation/validation'
import { toast } from 'react-toastify'
import Link from 'next/link'
import UiTypography from '@/components/Ui/UiTypography/view'
import { MyRoutes } from '@/constants/routes'
import { LogInForm } from '@/components/Modules/Forms/SignIn/types'
import { ColorsEnum } from '@/components/Ui/UiButton/types'
import { login } from '@/api/auth'

const SignInForm: React.FC = () => {
	const router = useRouter()
	const [isError, setIsError] = useState<boolean>(false)
	const [isLoading, setIsLoading] = useState<boolean>(false)

	const {
		control,
		handleSubmit,
		formState: { errors },
	} = useForm<LogInForm>({
		mode: 'onChange',
		defaultValues: {
			email: '',
			password: '',
		},
		resolver: yupResolver<LogInForm>(loginValidation),
	})

	const submit: SubmitHandler<LogInForm> = async (data) => {
		try {
			setIsLoading(true)
			const { token } = await login(data)
			setCookie(null, '_token', token, {
				path: '/',
			})
			await router.push(MyRoutes.MAIN)
		} catch (err) {
			setIsError(true)
			toast.error('Невірний логін або пошта')
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
						Увійти
					</UiButton>
				</UiBox>
			</form>
			<UiBox pb={'sm'}>
				<UiTypography align={'center'} variant={'small'}>
					Немає аккаунту?{' '}
					<Link href={MyRoutes.SIGN_UP}>
						Нажміть сюди для реєстрації
					</Link>
					. Або увійдіть використовуючи за допомогою тестового
					користувача.
				</UiTypography>
			</UiBox>
			<UiBox flex justify={'center'}>
				<UiButton
					size={'small'}
					color={ColorsEnum.ORANGE}
					disabled={isLoading}
					onClick={() =>
						submit({
							email: 'test@gmail.com',
							password: 'test_psw',
						})
					}
				>
					Тестовий користувач
				</UiButton>
			</UiBox>
		</>
	)
}

export default SignInForm
