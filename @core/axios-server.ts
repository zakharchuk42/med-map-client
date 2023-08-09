import axios from 'axios'
import { cookies } from 'next/headers'

axios.defaults.baseURL = 'https://med-map-server-production.up.railway.app'

axios.interceptors.request.use((config) => {
	const nextCookies = cookies()
	const token = nextCookies.get('_token')
	config.headers.Authorization = 'Bearer ' + token?.value

	return config
})

export default axios
