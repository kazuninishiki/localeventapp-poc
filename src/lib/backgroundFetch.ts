import * as BackgroundFetch from 'expo-background-fetch'
import * as TaskManager from 'expo-task-manager'

export const BACKGROUND_FETCH_TASK = 'background-fetch-events'

TaskManager.defineTask(BACKGROUND_FETCH_TASK, async () => {
  try {
    console.log('log: Background fetch running...')
    // in real app: fetch fresh events from API here
    // for now: simulate with log
    return BackgroundFetch.BackgroundFetchResult.NewData
  } catch (err) {
    return BackgroundFetch.BackgroundFetchResult.Failed
  }
})

export const registerBackgroundFetch = async () => {
    const status = await BackgroundFetch.getStatusAsync()
    if (status === BackgroundFetch.BackgroundFetchStatus.Available) {
        await BackgroundFetch.registerTaskAsync(BACKGROUND_FETCH_TASK, {
        minimumInterval: 15 * 60,  // 15 min minimum (iOS enforced)
        stopOnTerminate: false,
        startOnBoot: true,
        })
    }
}