import s from './typography.module.scss'

export const colorMapper = {
	dark: s.typography__color_dark,
	white: s.typography__color_white,
	gray: s.typography__color_gray,
	gray_l: s.typography__color_gray_l,
	green: s.typography__color_green,
	blue: s.typography__color_blue,
	red: s.typography__color_red,
	orange: s.typography__color_orange,
}

export const variantMapper = {
	h1: s.typography__variant_h1,
	h2: s.typography__variant_h2,
	subtitle: s.typography__variant_subtitle,
	body: s.typography__variant_body,
	small: s.typography__variant_small,
}

export const weightMapper = {
	semibold: s.typography_semibold,
	bold: s.typography_bold,
}

export const alignMapper = {
	center: s.typography__align_center,
	right: s.typography__align_right,
}
