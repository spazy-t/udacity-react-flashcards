import React from 'react'
import { Text } from 'react-native'
import { StyledTitle, StyledView } from '../styled/common'

//Component that holds initial info for an individual deck, brought in by DeckList
//navigation is sent through via props to allow stack navigation to it's Details screen
const DeckContainer = ({ title, cardNum }) => {
 return(
     <StyledView>
        <StyledTitle>{title}</StyledTitle>
        <Text>{cardNum}</Text>
    </StyledView>
 )
}

export default DeckContainer