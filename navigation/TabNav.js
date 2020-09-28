import React, { Fragment } from 'react'
import { View } from 'react-native'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'
import DeckList from '../containers/DeckList'
import NewDeck from '../containers/NewDeck'

const Tabs = createMaterialTopTabNavigator()

//set up a tab nav which is pulled in from the stacknav
const TabNav = () => (
    <Fragment>
        <View style={{ height: 40, backgroundColor: '#fff' }} />
        <Tabs.Navigator>
            <Tabs.Screen name="DeckList" component={DeckList} />
            <Tabs.Screen name="NewDeck" component={NewDeck} />
        </Tabs.Navigator>
    </Fragment>
)

export default TabNav