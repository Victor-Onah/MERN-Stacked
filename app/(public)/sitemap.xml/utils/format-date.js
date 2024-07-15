/**
 * Formats date to YYYY-MM-DD format
 * @param {Date} date
 * @returns {string} YYYY-MM-DD formatted string
 */
export default function formatDateToYYYYMMDD(date) {
	const year = date.getFullYear();
	const month = String(date.getMonth() + 1).padStart(2, "0");
	const day = String(date.getDate()).padStart(2, "0");
	return `${year}-${month}-${day}`;
}
