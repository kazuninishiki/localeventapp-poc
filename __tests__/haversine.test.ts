import { getDistance, formatDistance } from '../src/lib/haversine'

describe('getDistance', () => {
  it('calculates distance between 2 coordinates', () => {
    // Toronto City Hall to CN Tower — known distance ~1km, data available in gmaps
    const distance = getDistance(43.6534, -79.3839, 43.6426, -79.3871)
    expect(distance).toBeGreaterThan(0)
    expect(distance).toBeLessThan(5)
  })
  // pre-determined virtual events were to use 0,0 coords
  it('returns -1 for virtual events (0,0 coords)', () => {
    const distance = getDistance(43.6534, -79.3839, 0, 0)
    expect(distance).toBe(-1)
  })
})

describe('formatDistance', () => {
  it('formats km correctly', () => {
    expect(formatDistance(2.3)).toBe('2.3km')
  })

  it('formats meters for distances under 1km', () => {
    expect(formatDistance(0.5)).toBe('500m')
  })

  it('returns Virtual for -1', () => {
    expect(formatDistance(-1)).toBe('Virtual')
  })
})