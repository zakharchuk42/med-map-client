'use client'

import React from 'react'
import { CardListProps } from '@/components/Modules/Script/components/Drugs/components/CardList/types'
import UiTable from '@/components/Ui/UiTables/view'
import { useCardColumns } from '@/components/Modules/Script/components/Drugs/components/CardList/hooks/useCardColumns'
import UiBox from '@/components/Ui/UiBox/view'
import UiButton from '@/components/Ui/UiButton/view'
import { useOpenState } from '@/hooks/usoOpenState'
import DrugsForm from '@/components/Modules/Forms/Drugs/view'
import s from './cardList.module.scss'
import clsx from 'clsx'

const CardList: React.FC<CardListProps> = ({ myDrugs, scriptId }) => {
	const columns = useCardColumns()
	const sx = {
		minHeight: '200px',
		maxHeight: '300px',
	}
	const { open, handleToggle } = useOpenState(false)
	const textButton = open ? 'Приховати форму' : 'Показати форму'
	const isOpen = open ? s.cardList__form_open : ''
	const formClasses = clsx(s.cardList__form, isOpen)

	return (
		<UiBox width={'100%'} flex direction={'column'}>
			<UiTable rows={myDrugs} columns={columns} hideFooter sx={sx} />
			<div className={formClasses}>
				<DrugsForm scriptId={scriptId} textButton={'Додати'} />
			</div>
			<UiBox flex justify={'end'} pt={'xl'}>
				<UiButton onClick={handleToggle}>{textButton}</UiButton>
			</UiBox>
		</UiBox>
	)
}

export default CardList
