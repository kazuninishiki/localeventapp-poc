import { create } from 'zustand'
import { addBookmark, removeBookmark, getBookmarks } from '../../db/database'

interface BookmarkStore {
  bookmarkedIds: string[]
  loadBookmarks: () => void
  toggleBookmark: (eventId: string) => void
  isBookmarked: (eventId: string) => boolean
}

export const useBookmarkStore = create<BookmarkStore>((set, get) => ({
  bookmarkedIds: [],

  loadBookmarks: () => {
    const ids = getBookmarks()
    set({ bookmarkedIds: ids })
  },

  toggleBookmark: (eventId: string) => {
    const { bookmarkedIds } = get()
    const isBookmarked = bookmarkedIds.includes(eventId)
    console.log('toogleBookmark called:', eventId, 'current bookmarked:', isBookmarked)
    if (isBookmarked) {
      removeBookmark(eventId)
      set({ bookmarkedIds: bookmarkedIds.filter(id => id !== eventId) })
    } else {
      addBookmark(eventId)
      set({ bookmarkedIds: [...bookmarkedIds, eventId] })
    }
    console.log('new state:', get().bookmarkedIds)
  },

  isBookmarked: (eventId: string) => {
    return get().bookmarkedIds.includes(eventId)
  }
}))