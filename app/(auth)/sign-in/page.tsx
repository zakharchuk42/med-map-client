import React from 'react'
import AuthLayout from '@/components/Layout/Auth/view'
import SignInForm from '@/components/Modules/Forms/SignIn/view'
import { NextPage } from 'next'

const SignIn: NextPage = () => {
	return (
		<AuthLayout
			title={'Увійти'}
			subtitle={'Увійдіть щоб залишатись на звʼязку'}
		>
			<SignInForm />
		</AuthLayout>
	)
}

export default SignIn
