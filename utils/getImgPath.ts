import axios from 'axios'

export const getImgPath = (img: string, path?: string) =>
	path
		? `${axios.defaults.baseURL}/${path}/${img}`
		: `${axios.defaults.baseURL}/${img}`
