export const formatDateTime = (iso: string): string => {

  if (!iso) return ''           
    const date = new Date(iso)
  if (isNaN(date.getTime())) return iso  
  
  return date.toLocaleDateString('en-CA', {
    month: 'short',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
  })
}