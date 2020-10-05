import React from 'react'
import {
    StyledScroll,
    StyledTitle,
    StyledText,
    ResultContainer,
    HeaderText
} from '../styled/common'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

//displays recently completed quiz's. Shows how many times played, best score and what date
const ResultsBoard = (props) => {
    const { results } = props
    const resultsKeys = Object.keys(results).sort()

    //if no results have been saved show prompt to take a quiz
    if(resultsKeys.length === 0) {
        return(
            <HeaderText>Take a quiz to show results</HeaderText>
        )
    }

    return(
        <StyledScroll contentContainerStyle={{ alignItems: 'center' }}>
            {resultsKeys.map((result) => (
                <ResultContainer key={result}>
                    <StyledTitle>{`${results[result].deckId} Deck`}</StyledTitle>
                    <StyledText>{`Top score: ${results[result].score} out of ${results[result].cardNum}`}</StyledText>
                    <StyledText>{results[result].date}</StyledText>
                    <StyledText>{`Quiz studied ${results[result].timesPlayed} times`}</StyledText>
                </ResultContainer>
            ))}
        </StyledScroll>
    )
}

//grabs the results data from state to determine which quiz's have been completed
function mapStateToProps({ results }) {
    return {
        results
    }
}

ResultsBoard.propTypes = {
    results: PropTypes.object.isRequired
}

export default connect(mapStateToProps)(ResultsBoard)