import styled from 'styled-components/native'
import { StyleSheet } from 'react-native'

export const StyledTouchable = styled.TouchableOpacity`
    border: 1px solid #000;
    margin: 10px 0;
    align-items: center;
    justify-content: center;
    min-width: 200px;
    padding: 5px 0;
`

export const ResultContainer = styled.View`
    width: 80%;
    height: auto;
    background-color: #fff;
    border: 1px solid #000;
    border-radius: 10px;
    align-items: center;
    justify-content: center;
    padding: 10px 0;
    margin: 10px 0;
`

export const RegularBtn = styled(StyledTouchable)`
    background-color: #fff;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    padding: 10px;
`

export const DashDeck = styled(StyledTouchable)`
    width: 80%;
    height: 100px;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    background-color: #fff;
`

export const CorrectBtn = styled(StyledTouchable)`
    background-color: #99ff99;
    border-color: #0f0;
    border-radius: 5px;
`

export const InCorrectBtn = styled(StyledTouchable)`
    background-color: #fa323c;
    border-color: #fa020f;
    border-radius: 5px;
`

export const JustTextBtn = styled(StyledTouchable)`
    height: auto;
    width: auto;
    padding: 10px;
    min-width: 0;
    border-radius: 15px;
    background-color: #fff;
`

export const StyledSubmitBtn = styled(StyledTouchable)`
    background-color: #000;
    border-radius: 10px;
`

export const StyledSubmitText = styled.Text`
    text-align: center;
    font-size: 18px;
    font-weight: bold;
    padding: 5px;
    color: #fff;
`

export const StyledView = styled.View`
    flex: 1;
    align-items: center;
`

export const StyledScroll = styled.ScrollView`
    flex: 1;
    margin-top: 15px;
`

export const StyledInput = styled.TextInput`
    border: 1px solid #000;
    border-radius: 25px;
    padding: 15px;
    margin: 15px;
    font-size: 20px;
    width: 90%;
    background-color: #ccc;
    color: #000;
`

export const StyledTitle = styled.Text`
    align-self: center
    font-size: 25px;
    font-weight: bold;
`

export const HeaderText = styled(StyledTitle)`
    background-color: rgba(0, 0, 0, 0.6);
    width: 100%;
    padding: 10px 0;
    text-align: center;
    color: #fff;
    margin-bottom: 10px;
`

export const HeaderView = styled.View`
    background-color: rgba(0, 0, 0, 0.6);
    width: 100%;
    padding: 10px 0;
    margin-bottom: 10px;
`

export const DashTitle = styled(StyledTitle)`
    font-size: 30px;
`

export const StyledText = styled.Text`
    font-size: 22px;
    align-self: center;
`

export const QuizAnswerText = styled(StyledText)`
    font-size: 26px;
    text-transform: uppercase;
`

export const QuizSubText = styled.Text`
    font-size: 20px;
    color: #fff;
    font-weight: bold;
    text-align: center;
    margin-top: 10px;
`

/**
 * Stylesheet styles
 */

 export const styles = StyleSheet.create({
    backgroundImage: {
        flex: 1,
        resizeMode: 'cover',
        justifyContent: 'center'
    },
    animationText: {
        color: '#fff',
        fontSize: 25,
        fontWeight: 'bold',
        textAlign: 'center'
    }
 })