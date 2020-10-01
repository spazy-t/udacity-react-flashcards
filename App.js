import * as React from "react"
import { View } from "react-native"
import { NavigationContainer } from '@react-navigation/native'
import StackNav from './navigation/StackNav'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import reducer from './reducers'
import middleware from './middleware'

//TODO: add prop types
/**
 * pulls in the stacknav to show the default screens
 * uses redux provider to make connecting to store availbel within the app
 * creates the store to pass in with relevant reducer and middleware
 */
export default function App() {
  return (
    <Provider store={createStore(reducer, middleware)}>
      <View style={{ flex: 1 }}>
        <NavigationContainer>
          <StackNav />
        </NavigationContainer>
      </View>
    </Provider>
  )
}
