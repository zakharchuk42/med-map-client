import React from 'react'
import AuthLayout from '@/components/Layout/Auth/view'
import SignUpForm from '@/components/Modules/Forms/SignUp/view'
import { NextPage } from 'next'

const SignUp: NextPage = () => {
	return (
		<AuthLayout
			title={'Реєстрація'}
			subtitle={'Створіть свій власний аккаунт'}
			revers
		>
			<SignUpForm />
		</AuthLayout>
	)
}

export default SignUp
