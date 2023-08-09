export interface Event<T = EventTarget> {
	target: T
}

export interface UploadFilesProps {
	multiple?: boolean
	text?: string
	variant?: 'button' | 'field'
	scriptId?: number
}
