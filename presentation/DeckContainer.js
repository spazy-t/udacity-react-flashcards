import React from 'react'
import { View, Text } from 'react-native'
import { StyledTouchable } from '../styled/common'

//Component that holds initial info for an individual deck, brought in by DeckList
//navigation is sent through via props to allow stack navigation to it's Details screen
const DeckContainer = ({ navigation, title, cardNum }) => {
 return(
     <View>
         <StyledTouchable onPress={() => navigation.navigate('DeckDetails', { id: title })}>
             <Text>{title}</Text>
             <Text>{cardNum}</Text>
         </StyledTouchable>
     </View>
 )
}

export default DeckContainer