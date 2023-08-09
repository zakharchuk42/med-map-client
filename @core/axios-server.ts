import axios from 'axios'
import { cookies } from 'next/headers'

axios.defaults.baseURL = 'http://localhost:4000'

axios.interceptors.request.use((config) => {
	const nextCookies = cookies()
	const token = nextCookies.get('_token')
	config.headers.Authorization = 'Bearer ' + token?.value

	return config
})

export default axios
