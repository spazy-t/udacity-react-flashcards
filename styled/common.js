import styled from 'styled-components/native'

export const StyledTouchable = styled.TouchableOpacity`
    border: 1px solid #000;
    border-radius: 5px;
    margin: 10px 0;
    align-items: center;
    justify-content: center;
    min-width: 200px;
    padding: 5px 0;
`

export const CorrectBtn = styled(StyledTouchable)`
    background-color: #0f0;
    border-color: #0f0;
`

export const InCorrectBtn = styled(StyledTouchable)`
    background-color: #f00;
    border-color: #f00;
`

export const JustTextBtn = styled(StyledTouchable)`
    height: auto;
    width: auto;
    padding: 5px;
    min-width: 0;  
`

export const StyledSubmitBtn = styled(StyledTouchable)`
    background-color: #000;
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

export const StyledInput = styled.TextInput`
    border: 1px solid #000;
    border-radius: 25px;
    padding: 15px;
    margin: 15px;
    font-size: 18px;
    width: 90%;
`

export const StyledTitle = styled.Text`
    align-self: center
    font-size: 20px;
    font-weight: bold;
`

export const StyledText = styled.Text`
    font-size: 18px;
`