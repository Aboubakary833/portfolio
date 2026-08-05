/**
 * Format a period range into renderable string
 */
export function formatDetailPeriod(
	start: { month: string; year: number },
	end?: { month: string; year: number },
) {
	return `${start.month} ${start.year} - ${
		end ? `${end.month} ${end.year}` : "Ongoing"
	}`;
}
