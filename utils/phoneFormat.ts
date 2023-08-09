import { isHaveLength } from '@/utils/isHaveLength'

export const phoneFormat = (phone: string): string => {
	let phone_formatted: string

	if (isHaveLength(phone)) {
		phone_formatted = `+380 ${phone.replace(
			/(\d{2})(\d{3})(\d{2})(\d{2})/g,
			` ($1) $2-$3-$4`,
		)}`
	} else {
		phone_formatted = '—'
	}

	return phone_formatted
}
