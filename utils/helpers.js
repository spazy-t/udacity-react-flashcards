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
                    //if no notification is set and persmissions granted, make sure and clear any notifications
                    Notifications.cancelAllScheduledNotificationsAsync()

                    //set up how to handle the notification config
                    Notifications.setNotificationHandler({
                        handleNotification: async () => ({
                            shouldPlaySound: true,
                            shouldShowAlert: true,
                            shouldSetBadge: false
                        })
                    })

                    //create a date object to trigger the notification (android)
                    let tomorrow = new Date()
                    tomorrow.setDate(tomorrow.getDate() + 1)
                    tomorrow.setHours(12)
                    tomorrow.setMinutes(0)

                    //set and schedule notification for a days time at 12pm
                    Notifications.scheduleNotificationAsync({
                        content: {
                            title: 'Time to study!',
                            body: 'complete at least one quiz for the day'
                        },
                        trigger: tomorrow
                    })

                    //store in storage to be read when app is opened up again
                    AsyncStorage.setItem(NOTIFICATION_KEY, JSON.stringify(true))
                }
            })
        }
    })
}

//method to clear the notification from storage, if a quiz is completed for the day
export function clearLocalNotification() {
    return AsyncStorage.removeItem(NOTIFICATION_KEY)
    .then(Notifications.cancelAllScheduledNotificationsAsync)
}