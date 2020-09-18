import * as React from "react"
import { View, Text } from "react-native"
import { NavigationContainer } from '@react-navigation/native'
import StackNav from './navigation/StackNav'

//pull sin the stacknav to show the default screens
export default function App() {
  return (
    <View style={{ flex: 1 }}>
      <NavigationContainer>
        <StackNav />
      </NavigationContainer>
    </View>
  )
}
