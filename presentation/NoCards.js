import React from 'react'
import { Text } from 'react-native'
import { StyledView, StyledTitle, StyledTouchable } from '../styled/common'

export default function NoCards(props) {
    const { nav, id } = props

    return(
        <StyledView>
            <StyledTitle>No cards!</StyledTitle>
            <StyledTouchable onPress={() => nav.navigate('NewCard', { id: id })}>
                <Text>Add Card</Text>
            </StyledTouchable>
            <StyledTouchable onPress={() => nav.navigate('Home')}>
                <Text>To Deck List</Text>
            </StyledTouchable>
        </StyledView>
    )
}