import * as React from "react"
import { View } from "react-native"
import { NavigationContainer } from '@react-navigation/native'
import StackNav from './navigation/StackNav'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import reducer from './reducers'
import middleware from './middleware'

/**
 * pulls in the stacknav to show the default screens
 * uses redux provider to make connecting to store availabel within the app
 * creates the store and passes in the relevant reducers and middleware
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
