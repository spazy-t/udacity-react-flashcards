import React from 'react'
import { StyledView, StyledTitle, RegularBtn, StyledText } from '../styled/common'
import PropTypes from 'prop-types'

export default function NoCards(props) {
    const { nav, id } = props

    return(
        <StyledView>
            <StyledTitle>No cards!</StyledTitle>
            <RegularBtn onPress={() => nav.navigate('NewCard', { id: id })}>
                <StyledText>Add Card</StyledText>
            </RegularBtn>
            <RegularBtn onPress={() => nav.navigate('Home')}>
                <StyledText>To Deck List</StyledText>
            </RegularBtn>
        </StyledView>
    )
}

NoCards.propTypes = {
    nav: PropTypes.object.isRequired,
    id: PropTypes.string.isRequired
}