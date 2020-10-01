import React from 'react'
import { Text } from 'react-native'
import { StyledView } from '../styled/common'
import { connect } from 'react-redux'

const ResultsBoard = (props) => {
    console.log('results board', props.results)
    return(
        <StyledView>
            <Text>Quiz Score</Text>
        </StyledView>
    )
}

function mapStateToProps({ results }) {
    return {
        results
    }
}

export default connect(mapStateToProps)(ResultsBoard)