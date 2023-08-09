type GetDateProgress = (startDate: Date | undefined, days: string) => number

export const getDateProgress: GetDateProgress = (startDate, days) => {
	if (!startDate) return 0

	const perCent = 100 / Number(days)
	const diffInDays = Math.round(
		(new Date().getTime() - new Date(startDate).getTime()) /
			(1000 * 3600 * 24),
	)

	const progress = perCent * diffInDays

	return progress > 100 ? 100 : progress
}
