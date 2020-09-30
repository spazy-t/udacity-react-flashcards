import styled from 'styled-components/native'

export const StyledTouchable = styled.TouchableOpacity`
    border: 1px solid #000;
    margin: 10px 0;
    align-items: center;
    justify-content: center;
    min-width: 200px;
    padding: 5px 0;
`

export const RegularBtn = styled(StyledTouchable)`
    background-color: #fff;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    padding: 10px;
    elevation: 5;
`

export const DashDeck = styled(StyledTouchable)`
    width: 80%;
    height: 100px;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    background-color: #fff;
    elevation: 5;
`

export const CorrectBtn = styled(StyledTouchable)`
    background-color: #99ff99;
    border-color: #0f0;
    border-radius: 15px;
    elevation: 5;
`

export const InCorrectBtn = styled(StyledTouchable)`
    background-color: #ff99ff;
    border-color: #ff33ff;
    border-radius: 15px;
    elevation: 5;
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
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
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
    margin-top: 15px;
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
    font-size: 18px;
    width: 90%;
    background-color: #ccc;
    color: #fff;
`

export const StyledTitle = styled.Text`
    align-self: center
    font-size: 20px;
    font-weight: bold;
`

export const StyledText = styled.Text`
    font-size: 18px;
`