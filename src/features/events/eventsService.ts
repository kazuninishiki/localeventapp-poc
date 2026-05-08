import { EventDetail } from '../../types/events'
import { mockEvents } from '../../constants/mockEvents'

// simulate network delay — feels like real API
const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms))

export const fetchEvents = async (): Promise<EventDetail[]> => {
  await delay(800)           // fake 800ms network delay
  return mockEvents
}

export const fetchEventById = async (id: string): Promise<EventDetail> => {
  await delay(400)
  const event = mockEvents.find(e => e.id === id)
  if (!event) throw new Error(`Event ${id} not found`)
  return event
}