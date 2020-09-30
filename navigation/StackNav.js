import React, { Fragment } from 'react'
import { ImageBackground } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack'
import TabNav from './TabNav'
import DeckDetails from '../presentation/DeckDetails'
import Quiz from '../containers/Quiz'
import NewCard from '../containers/NewCard'
import studyImage from '../images/studyImage.jpg'

const Stack = createStackNavigator()
//img: https://pixabay.com/illustrations/geometry-mathematics-cube-1023846/
//the main nav for the app which nests a tab nav for the default screen
const StackNav = () => (
    <Fragment>
        <ImageBackground source={studyImage} style={{ flex: 1, resizeMode: 'cover', justifyContent: 'center' }}>
            <Stack.Navigator screenOptions={{ cardStyle: { backgroundColor: 'rgba(0, 0, 0, 0)' }, headerTitleStyle: { fontSize: 20, fontWeight: 'bold' },
                headerStyle: { backgroundColor: '#b3ffb3' }}}>
                <Stack.Screen options={{ headerShown: false }} name="Home" component={TabNav} />
                <Stack.Screen name="DeckDetails" component={DeckDetails} />
                <Stack.Screen name="Quiz" component={Quiz} />
                <Stack.Screen name="NewCard" component={NewCard} />
            </Stack.Navigator>
        </ImageBackground>
    </Fragment>
)

export default StackNav