export const formatDate = (date: Date) =>
	date.toString().split('T')[0].split('-').reverse().join('.')

export const formatTime = (date: Date) =>
	date.toString().split('T')[1].slice(0, 5)
