import React from 'react'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'
import DeckList from '../containers/DeckList'
import NewDeck from '../containers/NewDeck'

const Tabs = createMaterialTopTabNavigator()

//set up a tab nav which is pulled in from the stacknav
const TabNav = () => (
    <Tabs.Navigator>
        <Tabs.Screen name="DeckList" component={DeckList} />
        <Tabs.Screen name="NewDeck" component={NewDeck} />
    </Tabs.Navigator>
)

export default TabNav