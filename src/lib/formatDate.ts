export const formatDateTime = (iso: string): string => {
  const date = new Date(iso)
  return date.toLocaleDateString('en-CA', {
    month: 'short',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
  })
}