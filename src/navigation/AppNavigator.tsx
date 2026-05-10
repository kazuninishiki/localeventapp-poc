import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { RootStackParamList, TabParamList } from '../types/navigation'
import { BookmarksStackParamList } from '../types/navigation'
import EventListScreen from '../features/events/EventListScreen'
import EventDetailScreen from '../features/events/EventDetailScreen'
import BookMarksScreen from '../features/bookmarks/BookMarksScreen'


const Tab = createBottomTabNavigator<TabParamList>()
const Stack = createNativeStackNavigator<RootStackParamList>()
const BookmarksStack_Nav = createNativeStackNavigator<BookmarksStackParamList>()

const EventsStack = () => (
  <Stack.Navigator>
    <Stack.Screen name="EventList" component={EventListScreen} />
    <Stack.Screen name="EventDetail" component={EventDetailScreen} />
  </Stack.Navigator>
)

const BookmarksStack = () => (
  <BookmarksStack_Nav.Navigator>
    <BookmarksStack_Nav.Screen name="BookmarkList" component={BookMarksScreen} />
    <BookmarksStack_Nav.Screen name="EventDetail" component={EventDetailScreen} />
  </BookmarksStack_Nav.Navigator>
)

const AppNavigator = () => (
  <NavigationContainer>
    <Tab.Navigator>
      <Tab.Screen name="Events" component={EventsStack} />
      <Tab.Screen name="Bookmarks" component={BookmarksStack} />
    </Tab.Navigator>
  </NavigationContainer>
)




export default AppNavigator