import React from 'react'
import { View } from 'react-native'
import { DashTitle, StyledText } from '../styled/common'

//Component that holds initial info for an individual deck, brought in by DeckList
//navigation is sent through via props to allow stack navigation to it's Details screen
const DeckContainer = ({ title, cardNum }) => {
 return(
     <View>
        <DashTitle>{title}</DashTitle>
        <StyledText>{cardNum === 1
            ? `${cardNum} Card`
            : `${cardNum} Cards`}
        </StyledText>
    </View>
 )
}

export default DeckContainer