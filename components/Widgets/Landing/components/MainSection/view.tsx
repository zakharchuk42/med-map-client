import React from 'react'
import s from './first.module.scss'
import UiButton from '@/components/Ui/UiButton/view'
import { MyRoutes } from '@/constants/routes'
import { ColorsEnum } from '@/components/Ui/UiButton/types'
import addScript from '@/public/landing/add-script.png'
import visit from '@/public/landing/plane-visit.png'
import signIn from '@/public/landing/sign-in.png'
import Image from 'next/image'

const MainSection = () => {
	return (
		<div className={s.first}>
			<div className={s.first__left}>
				<div className={s.first__title}>
					<h1>Тримай своє лікування під контролем</h1>
				</div>
				<div className={s.first__text}>
					<p>
						Дана платформа дає можливість автоматизувати рутину з
						веденню своєї медкарти. Зберігайте всі свої рецепти та
						файли зручно і швидко. Ви точно згадаєте які саме ліки
						допомогли рік назад.
					</p>
				</div>

				<div className={s.first__buttons}>
					<UiButton
						component={'a'}
						href={MyRoutes.SIGN_IN}
						color={ColorsEnum.GREEN}
					>
						Увійти (Є демо користувач)
					</UiButton>
					<UiButton
						component={'a'}
						href={MyRoutes.SIGN_UP}
						color={ColorsEnum.ORANGE}
					>
						Реєстрація
					</UiButton>
				</div>
			</div>
			<div className={s.first__right} />
			<Image
				src={addScript}
				alt={'Добавити рецепт'}
				className={s.first__addScriptImage}
				quality={100}
			/>
			<Image
				src={signIn}
				alt={'Добавити рецепт'}
				className={s.first__signInImage}
				quality={100}
			/>
			<Image
				src={visit}
				alt={'Добавити рецепт'}
				className={s.first__visit}
				quality={100}
			/>
		</div>
	)
}

export default MainSection
