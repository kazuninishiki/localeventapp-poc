export interface EventLocation {
  venueName: string
  venueAddress: string
  latitude: number
  longitude: number
}

export interface EventTime {
  startTime: string
  endTime: string
}

export interface EventDetail {
  id: string
  title: string
  description: string
  category: string
  organizer: string
  time: EventTime
  location: EventLocation
  imageUrl: string
}

export type EventSummary = Pick<EventDetail, 'id' | 'title' | 'category' | 'imageUrl'> & {
  startTime: string
  location: EventLocation
}

export interface Bookmark {
  eventId: string
  savedAt: string
}