import React, { Component } from 'react'
import { View } from 'react-native'
import { connect } from 'react-redux'
import { StyledTitle } from '../styled/common'
import { clearLocalNotification, setLocalNotification } from '../utils/helpers'
import { saveResult } from '../actions/results'

class Score extends Component {
    componentDidMount() {
        clearLocalNotification()
        .then(setLocalNotification())

        //TODO: set results data here either in component or callback
        this.props.dispatch(saveResult({
            deckId: 'Heidi',
            score: 10,
            date: '12/10/2020'
        }))
    }

    render() {
        const { totalCards, score } = this.props

        return(
            <View>
                <StyledTitle>{`You're score ${score} / ${totalCards}`}</StyledTitle>
            </View>
        )
    }
}

export default connect()(Score)