import '@/app/globals.scss'
import type { Metadata } from 'next'
import React from 'react'
import { ToastContainer } from 'react-toastify'
import { redirect } from 'next/navigation'
import { cookies } from 'next/headers'
import { MyRoutes } from '@/constants/routes'
import UiBox from '@/components/Ui/UiBox/view'
import PageLayout from '@/components/Layout/Page/view'

export const metadata: Metadata = {
	title: 'Med Map',
}

interface DashboardsLayoutProps {
	children: React.ReactNode
}

const DashboardsLayout: React.FC<DashboardsLayoutProps> = ({ children }) => {
	const nextCookies = cookies()
	const token = nextCookies.get('_token')

	if (!token?.value) {
		return redirect(MyRoutes.SIGN_IN)
	}

	return (
		<UiBox flex direction={'column'} height={'100%'}>
			<PageLayout>{children}</PageLayout>
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
		</UiBox>
	)
}

export default DashboardsLayout
