import React from 'react'
import { View, Text } from 'react-native'

export default function Score(props) {
    const { totalCards, score } = props

    return(
        <View>
            <Text>{`You're score ${score} / ${totalCards}`}</Text>
        </View>
    )
}