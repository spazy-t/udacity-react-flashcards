import React, { Component } from 'react'
import { View } from 'react-native'
import DeckContainer from '../presentation/DeckContainer'
import { connect } from 'react-redux'
import { receiveData } from '../actions/decks'

//A list of all the available decks, each has a container showing the initial data
//navigation is sent through as the container doesn't inherit that component
class DeckList extends Component {
    //dummy init data to test redux
    componentDidMount() {
        this.props.dispatch(receiveData({
            java: {
                title: 'java',
                cards: []
            }
        }))
    }

    render() {
        return(
            <View>
                <DeckContainer navigation={this.props.navigation}/>
            </View>
        )
    }
}

//connect to redux store in order to grab initial data and create decklist
export default connect()(DeckList)