import React from 'react'
import s from './avatart.module.scss'
import QuestionMarkIcon from '@mui/icons-material/QuestionMark'
import { UiAvatarProps } from '@/components/Ui/UiAvatar/types'
import { getImgPath } from '@/utils/getImgPath'
import { isHaveLength } from '@/utils/isHaveLength'

const UiAvatar: React.FC<UiAvatarProps> = ({ avatar }) => {
	return (
		<div className={s.avatar}>
			{isHaveLength(avatar) ? (
				<img
					src={getImgPath(avatar, 'uploads')}
					alt={'avatar'}
				/>
			) : (
				<QuestionMarkIcon sx={{ color: '#919699' }} />
			)}
		</div>
	)
}

export default UiAvatar
