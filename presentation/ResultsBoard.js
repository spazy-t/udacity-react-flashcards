import React from 'react'
import { StyledScroll, StyledTitle, StyledText, DashDeck } from '../styled/common'
import { connect } from 'react-redux'

const ResultsBoard = (props) => {
    const { results } = props

    return(
        <StyledScroll contentContainerStyle={{ alignItems: 'center' }}>
            {Object.keys(results).map((result) => (
                <DashDeck key={result}>
                    <StyledTitle>{`${results[result].deckId} Deck`}</StyledTitle>
                    <StyledText>{`Top score: ${results[result].score} out of ${results[result].cardNum}`}</StyledText>
                    <StyledText>{results[result].date}</StyledText>
                    <StyledText>{`Quiz studied ${results[result].timesPlayed} times`}</StyledText>
                </DashDeck>
            ))}
        </StyledScroll>
    )
}

function mapStateToProps({ results }) {
    return {
        results
    }
}

export default connect(mapStateToProps)(ResultsBoard)