// getting rid of syntaxe highlights
// redundant, aded in tsconfig.json as compilerOption
// import { describe, beforeEach, it, expect } from '@jest/globals'

import { useBookmarkStore } from '../src/features/bookmarks/bookmarkStore'

describe('bookmarkStore', () => {
  beforeEach(() => {
    useBookmarkStore.setState({ bookmarkedIds: [] })
  })

  it('adds bookmark', () => {
    useBookmarkStore.getState().toggleBookmark('evt_001')
    expect(useBookmarkStore.getState().bookmarkedIds).toContain('evt_001')
  })

  it('removes bookmark when toggled twice', () => {
    useBookmarkStore.getState().toggleBookmark('evt_001')
    useBookmarkStore.getState().toggleBookmark('evt_001')
    expect(useBookmarkStore.getState().bookmarkedIds).not.toContain('evt_001')
  })

  it('isBookmarked returns correct value', () => {
    useBookmarkStore.getState().toggleBookmark('evt_002')
    expect(useBookmarkStore.getState().isBookmarked('evt_002')).toBe(true)
    expect(useBookmarkStore.getState().isBookmarked('evt_001')).toBe(false)
  })
})