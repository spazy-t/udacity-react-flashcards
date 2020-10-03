import * as Notifications from 'expo-notifications'
import * as Permissions from 'expo-permissions'
import AsyncStorage from '@react-native-community/async-storage'
import { NOTIFICATION_KEY } from '../constants/actionTypes'

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
                    tomorrow.setDate(tomorrow.getDate() + 1)
                    tomorrow.setHours(12)
                    tomorrow.setMinutes(0)

                    Notifications.scheduleNotificationAsync({
                        content: {
                            title: ' Time to study!',
                            body: 'complete at least one quiz for the day'
                        },
                        trigger: tomorrow
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