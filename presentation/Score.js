import React, { Component } from 'react'
import { View, Text } from 'react-native'
import { StyledTitle } from '../styled/common'
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
                <StyledTitle>{`You're score ${score} / ${totalCards}`}</StyledTitle>
            </View>
        )
    }
    
}