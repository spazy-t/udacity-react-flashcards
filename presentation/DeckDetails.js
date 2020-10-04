import React, { Component } from 'react'
import { Alert, Animated, ImageBackground } from 'react-native'
import { connect } from 'react-redux'
import { RegularBtn,
        StyledView,
        StyledText,
        HeaderText,
        styles } from '../styled/common'
import { handleDeleteDeck } from '../actions/shared'
import studyImage from '../images/studyImage.jpg'
import PropTypes from 'prop-types'

//Details screen for an individual deck, shows the title and number of cards, buttons to start quiz or add card
class DeckDetails extends Component {
    state = {
        pos: new Animated.ValueXY({ x: 0, y: -300 })
    }

    //start animation when component mounts
    componentDidMount() {
        const { navigation, deckToShow } = this.props
        //change stack navigation header title to that of the relevant deck being shown
        navigation.setOptions({ headerTitle: `${deckToShow.title} Deck` })

        Animated.spring(this.state.pos, {
            toValue: { x: 0, y: 0 },
            delay: 300,
            friction: 5,
            tension: 30,
            useNativeDriver: false
        }).start()
    }

    //stops the component from rerendering a deck that has been deleted
    shouldComponentUpdate(nextProps) {
        if(nextProps.deckToShow === undefined) {
            return false
        } else {
            return true
        }
    }
    
    //deletes deck when delete btn pressed and user has validated the delete (via asyncStorage)
    handleDelete = () => {
        const { navigation, deckToShow, handleDeleteDeck } = this.props
        
        //show warning before navigating and deleting
        Alert.alert('Delete Deck?',
            'Are you sure you want to delete this deck?',
            [{
                text: 'cancel',
                onPress: () => console.log('cancel deck delete'),
                style: 'cancel'
            },
            {
                text: 'OK',
                onPress: () => {
                    navigation.goBack()
                    handleDeleteDeck(deckToShow.title)
                }
            }]
        )
    }

    render() {
        const { navigation, deckToShow } = this.props
        //show deck information in ui, on buttons pass in params so corresponding component knows which deck to deal with in store state
        return(
            <ImageBackground source={studyImage} style={styles.backgroundImage}>
                <StyledView>
                    <HeaderText>{deckToShow.cards.length === 1
                        ? `${deckToShow.cards.length} Card`
                        : `${deckToShow.cards.length} Cards`}
                    </HeaderText>
                    <Animated.View
                        style={this.state.pos.getLayout()}>
                        <RegularBtn onPress={() => navigation.navigate('Quiz', { id: deckToShow.title})}>
                            <StyledText>Start Quiz</StyledText>
                        </RegularBtn>
                        <RegularBtn onPress={() => navigation.navigate('NewCard', { id: deckToShow.title })}>
                            <StyledText>Add Card</StyledText>
                        </RegularBtn>
                        <RegularBtn onPress={this.handleDelete}>
                            <StyledText>Delete Deck</StyledText>
                        </RegularBtn>
                    </Animated.View>
                </StyledView>
            </ImageBackground>
        )
    }
}

function mapStateToProps({ decks }, { route }) {
    const { id } = route.params

    return {
        deckToShow: decks[id]
    }
}

DeckDetails.propTypes = {
    navigation: PropTypes.object.isRequired,
    deckToShow: PropTypes.object,
    handleDeleteDeck: PropTypes.func.isRequired
}

export default connect(mapStateToProps, { handleDeleteDeck })(DeckDetails)