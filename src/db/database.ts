// db handling, uses sqlite for ease of implementation for local database
import * as SQLite from 'expo-sqlite'

const db = SQLite.openDatabaseSync('eventapp.db')

export const initDatabase = () => {
  db.execSync(`
    CREATE TABLE IF NOT EXISTS bookmarks (
      id TEXT PRIMARY KEY,
      savedAt TEXT NOT NULL
    )
  `)
}

export const addBookmark = (eventId: string) => {
  db.runSync(
    'INSERT OR IGNORE INTO bookmarks (id, savedAt) VALUES (?, ?)',
    [eventId, new Date().toISOString()]
  )
}

export const removeBookmark = (eventId: string) => {
  db.runSync('DELETE FROM bookmarks WHERE id = ?', [eventId])
}

export const getBookmarks = (): string[] => {
  const rows = db.getAllSync<{ id: string }>('SELECT id FROM bookmarks')
  return rows.map(r => r.id)
}