import React from 'react'
import { ToastContainer } from 'react-toastify'
import '@/app/globals.scss'

interface AuthLayout {
	children: React.ReactNode
}

const AuthLayout: React.FC<AuthLayout> = ({ children }) => {
	return (
		<main>
			{children}
			<ToastContainer
				position='top-right'
				autoClose={3000}
				hideProgressBar={false}
				newestOnTop={false}
				closeOnClick
				rtl={false}
				pauseOnFocusLoss
				draggable
				pauseOnHover
				theme='light'
			/>
		</main>
	)
}

export default AuthLayout
