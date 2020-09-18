import React, { Component } from 'react'
import { View, Text } from 'react-native'
import DeckContainer from '../presentation/DeckContainer'

//A list of all the available decks, each has a container showing the initial data
//navigation is sent through as the container doesn't inherit that component
class DeckList extends Component {
    render() {
        return(
            <View>
                <DeckContainer navigation={this.props.navigation}/>
            </View>
        )
    }
}

export default DeckList