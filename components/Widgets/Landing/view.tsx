import React from 'react'
import s from './landing.module.scss'
import Section from '@/components/Widgets/Landing/components/Section/view'
import MainSection from '@/components/Widgets/Landing/components/MainSection/view'
import ImagesLanding from '@/components/Widgets/Landing/components/Images/view'
import SignInForm from '@/components/Modules/Forms/SignIn/view'
import AuthLayout from '@/components/Layout/Auth/view'

const sectionsArray = [
	{ title: '', text: '' },
	{
		title: 'Лаконічність. Простота. Інтуїтивність. Зручність.',
		text: 'Всі візити до лікаря структуруються у зручній таблиці. У ній зібрана мінімальна необхідна інформація та інтуїтивно зрозумілий інтерфейс',
	},
	{
		title: 'Багатофункціональність. Простота.',
		text: 'До кожного візиту є можливість додати рецепт виписаний лікарем.',
		list: [
			'⚕️ПЛАН ЛІКУВАННЯ: інформативна табличка для обліку ліків',
			'⚕️ПРОГРЕС: автоматична секція, яка сама вираховую прогрес лікування',
			'⚕️АНАЛІЗИ: будь-які аналізи які приписав лікар',
			'⚕️ІНШІ НОТАТКИ: дієти, масажі чи інші рекомендації. Можна записувати нотатки, щоб не забути щось важливе',
			'⚕️ФАЙЛИ: завантажуйте свої аналізи, рентгени та інші документи. Так вони завжди будуть поруч.',
		],
	},
	{
		title: 'Швидкий доступ до лікування. Інтуїтивність.',
		text: 'Для більшої зручності рецепт, який має "Статус лікування: Триває" автоматично відображається на головній сторінці. Так Вам не доведеться постійно шукати його в таблиці.',
	},
	{
		title: 'Всі документи на одному екрані. Зручність.',
		text: 'Файли, що були завантажені на сторінці "Рецепт", автоматично будуть відображатись у "Мої документи" у картці з назвою рецепта',
	},
]

const LandingLayout = () => {
	return (
		<>
			<div className={s.landing}>
				<MainSection />
				{sectionsArray.map((section) => (
					<Section
						title={section.title}
						text={section.text}
						list={section.list}
					/>
				))}
				<ImagesLanding />
			</div>
			<div className={s.landing__auth}>
				<AuthLayout
					title={'Увійти'}
					subtitle={'Увійдіть щоб залишатись на звʼязку'}
				>
					<SignInForm />
				</AuthLayout>
			</div>
		</>
	)
}

export default LandingLayout
