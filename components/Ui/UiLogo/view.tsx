import React from 'react'
import Image from 'next/image'
import Logo from '@/public/logo.svg'
import UiTypography from '@/components/Ui/UiTypography/view'
import UiBox from '@/components/Ui/UiBox/view'

const UiLogo = () => {
	return (
		<UiBox flex gap={'10px'} align={'center'}>
			<Image src={Logo} alt={'Logo med map'} />
			<UiTypography variant={'h2'}>Med Map</UiTypography>
		</UiBox>
	)
}

export default UiLogo
