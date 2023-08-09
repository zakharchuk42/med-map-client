import * as yup from 'yup'

export const loginValidation = yup.object({
	email: yup
		.string()
		.email('Невірний формат пошти')
		.required('Пошта є обовʼязковою'),
	password: yup.string().required('Забули ввести пароль :('),
})

export const registerValidation = yup.object({
	email: yup
		.string()
		.email('Невірний формат пошти')
		.required('Пошта є обовʼязковою'),
	password: yup.string().required('Забули ввести пароль :('),
	name: yup.string().required('Введіть імʼя'),
	avatar: yup.string(),
})

export const addVisitValidation = yup.object({
	id: yup.number(),
	status: yup.string(),
	doctors: yup.string().required('Поле є обовʼязковим'),
	spec: yup.string().required('Поле є обовʼязковим'),
	date: yup.date().required('Поле є обовʼязковим'),
	city: yup.string().required('Поле є обовʼязковим'),
	impression: yup.string(),
	hospital: yup.string().required('Поле є обовʼязковим'),
	efficiency: yup.string(),
	phone: yup
		.string()
		.min(9, 'Мінімум 9 символів')
		.max(9, 'Максимум 9 символів')
		.required('Поле є обовʼязковим'),
	online: yup.string(),
	diagnose: yup.string(),
})

export const addScriptValidation = yup.object({
	name: yup.string().required('Поле є обовʼязковим'),
	analyses: yup.string(),
	otherNotes: yup.string(),
})

export const addDrugsValidation = yup.object({
	name: yup.string().required('Поле є обовʼязковим'),
	amount: yup.string().required('Поле є обовʼязковим'),
	days: yup.string().required('Поле є обовʼязковим'),
	startAt: yup.date().required('Поле є обовʼязковим'),
	time: yup.string(),
})
