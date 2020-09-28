import * as Notifications from 'expo-notifications'
import * as Permissions from 'expo-permissions'
import AsyncStorage from '@react-native-community/async-storage'
import { NOTIFICATION_KEY } from '../constants/actionTypes'

//TODO: change timer for a day not a few seconds
export function setLocalNotification() {
    AsyncStorage.getItem(NOTIFICATION_KEY)
    .then(JSON.parse)
    .then((data) => {
        if(data === null) {
            Permissions.askAsync(Permissions.NOTIFICATIONS)
            .then(({ status }) => {
                if(status === 'granted') {
                    Notifications.cancelAllScheduledNotificationsAsync()

                    Notifications.setNotificationHandler({
                        handleNotification: async () => ({
                            shouldPlaySound: true,
                            shouldShowAlert: true,
                            shouldSetBadge: false
                        })
                    })

                    let tomorrow = new Date()
                    tomorrow = tomorrow.getTime() + (1000)
                    let notificationDate = new Date(tomorrow)

                    Notifications.scheduleNotificationAsync({
                        content: {
                            title: ' Time to study!',
                            body: 'complete at least one quiz for the day'
                        },
                        trigger: notificationDate
                    })

                    AsyncStorage.setItem(NOTIFICATION_KEY, JSON.stringify(true))
                }
            })
        }
    })
}

export function clearLocalNotification() {
    console.log('clear notifications')
    return AsyncStorage.removeItem(NOTIFICATION_KEY)
    .then(Notifications.cancelAllScheduledNotificationsAsync)
}