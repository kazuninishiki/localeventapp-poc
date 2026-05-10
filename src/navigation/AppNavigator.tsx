import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { RootStackParamList, TabParamList } from '../types/navigation'
import EventListScreen from '../features/events/EventListScreen'
import BookMarkScreen from '../features/bookmarks/BookMarksScreen'
import EventDetailScreen from '../features/events/EventDetailScreen'

const Tab = createBottomTabNavigator<TabParamList>()
const Stack = createNativeStackNavigator<RootStackParamList>()

const EventsStack = () => (
  <Stack.Navigator>
    <Stack.Screen name="EventList" component={EventListScreen} />
    <Stack.Screen name="EventDetail" component={EventDetailScreen} />
  </Stack.Navigator>
)

const AppNavigator = () => (
  <NavigationContainer>
    <Tab.Navigator>
      <Tab.Screen name="Events" component={EventsStack} />
      <Tab.Screen name="Bookmarks" component={BookMarkScreen} />
    </Tab.Navigator>
  </NavigationContainer>
)

export default AppNavigator