import React from 'react'
import s from './avatart.module.scss'
import QuestionMarkIcon from '@mui/icons-material/QuestionMark'
import { UiAvatarProps } from '@/components/Ui/UiAvatar/types'
import { getImgPath } from '@/utils/getImgPath'
import { isHaveLength } from '@/utils/isHaveLength'
import Image from 'next/image'

const UiAvatar: React.FC<UiAvatarProps> = ({ avatar }) => {
	return (
		<div className={s.avatar}>
			{isHaveLength(avatar) ? (
				<Image
					src={getImgPath(avatar, 'uploads')}
					alt={'avatar'}
					fill
				/>
			) : (
				<QuestionMarkIcon sx={{ color: '#919699' }} />
			)}
		</div>
	)
}

export default UiAvatar
