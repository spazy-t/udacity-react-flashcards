import React, { Fragment } from 'react'
import { View, StatusBar } from 'react-native'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'
import DeckList from '../containers/DeckList'
import NewDeck from '../containers/NewDeck'
import ResultsBoard from '../screens/ResultsBoard'
import { styles } from '../styled/common'

//init tab navigation to be nested in stack nav
const Tabs = createMaterialTopTabNavigator()

//set up a tab nav which is pulled in from the stacknav
const TabNav = () => (
    <Fragment>
        <View style={styles.statusBar}>
            <StatusBar translucent backgroundColor='#fff' barStyle='dark-content' />
        </View>
        <Tabs.Navigator
            sceneContainerStyle={{ backgroundColor: 'rgba(0, 0, 0, 0)' }}
            tabBarOptions={{
                labelStyle: { fontSize: 18, fontWeight: 'bold' },
                style: { backgroundColor: 'rgba(255, 255, 255, 0.9)' },
                activeTintColor: '#000',
                indicatorStyle: { backgroundColor: '#000'}
            }} >
            <Tabs.Screen name='DeckList' component={DeckList} />
            <Tabs.Screen name='NewDeck' options={{ title: 'New Deck' }} component={NewDeck} />
            <Tabs.Screen name='Results' component={ResultsBoard} />
        </Tabs.Navigator>
    </Fragment>
)

export default TabNav