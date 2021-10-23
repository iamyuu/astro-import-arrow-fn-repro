// WORK
/** @param {string} date */
// export function formatDate(date) {
//   return new Date(date).toLocaleString()
// }

// DOESN'T WORK
// FIXME: SyntaxError: Unexpected identifier
/** @param {string} date */
export const formatDate = date => {
  return new Date(date).toLocaleString()
}
