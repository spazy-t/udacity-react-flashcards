import React from 'react'
import { View, Text } from 'react-native'

//TODO: clear Notification here

export default function Score(props) {
    const { totalCards, score } = props

    return(
        <View>
            <Text>{`You're score ${score} / ${totalCards}`}</Text>
        </View>
    )
}