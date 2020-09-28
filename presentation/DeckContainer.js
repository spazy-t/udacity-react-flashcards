import React from 'react'
import { View } from 'react-native'
import { StyledTitle, StyledText } from '../styled/common'

//Component that holds initial info for an individual deck, brought in by DeckList
//navigation is sent through via props to allow stack navigation to it's Details screen
const DeckContainer = ({ title, cardNum }) => {
 return(
     <View>
        <StyledTitle>{title}</StyledTitle>
        <StyledText>{cardNum}</StyledText>
    </View>
 )
}

export default DeckContainer