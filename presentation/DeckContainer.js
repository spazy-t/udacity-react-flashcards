import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'

//Component that holds initial info for an individual deck, brought in by DeckList
//navigation is sent through via props to allow stack navigation to it's Details screen
const DeckContainer = ({ navigation }) => {
 return(
     <View>
         <Text>Deck Container</Text>
         <TouchableOpacity onPress={() => navigation.navigate('DeckDetails')}>
             <Text>SHOW</Text>
         </TouchableOpacity>
     </View>
 )
}

export default DeckContainer