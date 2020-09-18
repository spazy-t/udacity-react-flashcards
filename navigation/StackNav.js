import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import TabNav from './TabNav'
import DeckDetails from '../presentation/DeckDetails'
import Quiz from '../containers/Quiz'
import NewCard from '../containers/NewCard'

const Stack = createStackNavigator()

//the main nav for the app which nests a tab nav for the default screen
const StackNav = () => (
    <Stack.Navigator>
        <Stack.Screen name="Home" component={TabNav} />
        <Stack.Screen name="DeckDetails" component={DeckDetails} />
        <Stack.Screen name="Quiz" component={Quiz} />
        <Stack.Screen name="NewCard" component={NewCard} />
    </Stack.Navigator>
)

export default StackNav