import React from 'react'
import UiTypography from '@/components/Ui/UiTypography/view'
import UiBox from '@/components/Ui/UiBox/view'
import axiosS from '@/@core/axios-server'
import Avatar from '@/components/Layout/Page/Header/UserBox/Avatar/view'

async function getUser() {
	const { password, ...userWithoutPassword } = (await axiosS.get('/users/me'))
		.data
	return userWithoutPassword
}

const UserBox: any = async () => {
	const myProfile = await getUser()

	return (
		<UiBox flex gap={'10px'}>
			<UiBox>
				<UiTypography align={'right'}>{myProfile.name}</UiTypography>
				<UiTypography variant={'small'}>{myProfile.email}</UiTypography>
			</UiBox>
			<UiBox>
				<Avatar avatar={myProfile.avatar} />
			</UiBox>
		</UiBox>
	)
}

export default UserBox
