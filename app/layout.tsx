import './globals.scss'
import type { Metadata } from 'next'
import React from 'react'

export const metadata: Metadata = {
	title: 'Med Map',
	icons: {
		icon: '/logo.svg',
		apple: '/logo.svg',
	},
}

interface RootLayout {
	children: React.ReactNode
}

const RootLayout: React.FC<RootLayout> = ({ children }) => {
	return (
		<html lang='en'>
			<body>{children}</body>
		</html>
	)
}

export default RootLayout
