import React from 'react'
import { Text } from 'react-native'
import { StyledView, StyledTitle, RegularBtn } from '../styled/common'

export default function NoCards(props) {
    const { nav, id } = props

    return(
        <StyledView>
            <StyledTitle>No cards!</StyledTitle>
            <RegularBtn onPress={() => nav.navigate('NewCard', { id: id })}>
                <Text>Add Card</Text>
            </RegularBtn>
            <RegularBtn onPress={() => nav.navigate('Home')}>
                <Text>To Deck List</Text>
            </RegularBtn>
        </StyledView>
    )
}