export function formatDate(date: Date | string): string {
  return new Date(date).toLocaleString('en-US', {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  })
}
