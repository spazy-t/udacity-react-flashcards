import * as Notifications from 'expo-notifications'
import * as Permissions from 'expo-permissions'
import AsyncStorage from '@react-native-community/async-storage'
import { NOTIFICATION_KEY } from '../constants/actionTypes'

export function setLocalNotification() {
    AsyncStorage.getItem(NOTIFICATION_KEY)
    .then(JSON.parse)
    .then((data) => {
        if(data === null) {
            console.log('nah yeah')
            Permissions.askAsync(Permissions.NOTIFICATIONS)
            .then(({ status }) => {
                if(status === 'granted') {
                    console.log('permissions granted')
                    Notifications.cancelAllScheduledNotificationsAsync()

                    Notifications.setNotificationHandler({
                        handleNotification: async () => ({
                            shouldPlaySound: true,
                            shouldShowAlert: true,
                            shouldSetBadge: false
                        })
                    })

                    Notifications.scheduleNotificationAsync({
                        content: {
                            title: ' Time to study!',
                            body: 'complete at least one quiz for the day'
                        },
                        trigger: {
                            hour: 0,
                            minute: 1,
                            repeats: true
                        }
                    })

                    AsyncStorage.setItem(NOTIFICATION_KEY, JSON.stringify(true))
                }
            })
        } else {
            console.log('yeah nah!', data)
        }
    })
}

export function clearLocalNotification() {
    console.log('clear notifications')
    return AsyncStorage.removeItem(NOTIFICATION_KEY)
    .then(Notifications.cancelAllScheduledNotificationsAsync)
}