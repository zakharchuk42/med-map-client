import React from 'react'
import s from './board.module.scss'
import { BoardProps } from '@/components/Layout/Page/Board/types'

const Board: React.FC<BoardProps> = ({ children }) => {
	return <div className={s.board}>{children}</div>
}

export default Board
