import React, { Fragment } from 'react'
import { ImageBackground } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack'
import TabNav from './TabNav'
import DeckDetails from '../screens/DeckDetails'
import Quiz from '../containers/Quiz'
import NewCard from '../containers/NewCard'
import studyImage from '../images/studyImage.jpg'
import { styles } from '../styled/common'

//init stack nav
const Stack = createStackNavigator()
//img: https://pixabay.com/illustrations/geometry-mathematics-cube-1023846/
//the main nav for the app which nests a tab nav for the default screens
const StackNav = () => (
    <Fragment>
        <ImageBackground source={studyImage} style={styles.backgroundImage}>
            <Stack.Navigator screenOptions={{
                cardStyle: { backgroundColor: 'rgba(0, 0, 0, 0)' },
                headerTitleStyle: { fontSize: 20, fontWeight: 'bold' },
                headerStyle: { backgroundColor: 'rgb(255, 255, 255)' }
            }}>
                <Stack.Screen options={{ headerShown: false }} name="Home" component={TabNav} />
                <Stack.Screen name="DeckDetails" component={DeckDetails} />
                <Stack.Screen name="Quiz" component={Quiz} />
                <Stack.Screen name="NewCard" component={NewCard} />
            </Stack.Navigator>
        </ImageBackground>
    </Fragment>
)

export default StackNav