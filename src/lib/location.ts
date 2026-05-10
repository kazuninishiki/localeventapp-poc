import * as Location from 'expo-location' // for device location access, reads GPS co-ord (user consent popup)

export interface UserLocation {
  latitude: number
  longitude: number
}

export const getUserLocation = async (): Promise<UserLocation | null> => {
  const { status } = await Location.requestForegroundPermissionsAsync()
  
  if (status !== 'granted') return null

  const location = await Location.getCurrentPositionAsync({})
  return {
    latitude: location.coords.latitude,
    longitude: location.coords.longitude
  }
}