import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'

//Details screen for an individual deck, shows the title and number of cards, buttons to start quiz or add card
const DeckDetails = ({ navigation }) => {
 return(
     <View>
         <Text>Deck Details</Text>
         <TouchableOpacity onPress={() => navigation.navigate('Quiz')}>
             <Text>QUIZ</Text>
         </TouchableOpacity>
         <TouchableOpacity onPress={() => navigation.navigate('NewCard')}>
             <Text>NEW CARD</Text>
         </TouchableOpacity>
     </View>
 )
}

export default DeckDetails