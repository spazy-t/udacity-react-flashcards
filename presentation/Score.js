import React, { Component } from 'react'
import { View, Text } from 'react-native'
import { clearLocalNotification, setLocalNotification } from '../utils/helpers'

//TODO: clear Notification here

export default class Score extends Component {
    componentDidMount() {
        clearLocalNotification()
        .then(setLocalNotification())
    }

    render() {
        const { totalCards, score } = this.props

        return(
            <View>
                <Text>{`You're score ${score} / ${totalCards}`}</Text>
            </View>
        )
    }
    
}