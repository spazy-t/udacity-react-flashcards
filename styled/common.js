import styled from 'styled-components/native'

export const StyledTouchable = styled.TouchableOpacity`
    border: 1px solid #000;
    border-radius: 5px;
    margin: 10px 0;
    width: 200px;
    align-items: center
`

export const StyledSubmitBtn = styled(StyledTouchable)`
    background-color: #000;
`

export const StyledSubmitText = styled.Text`
    font-size: 15px;
    font-weight: bold;
    padding: 5px;
    color: #fff;
`

export const StyledView = styled.View`
    align-items: center;
    margin: 0 15px;
`

export const StyledInput = styled.TextInput`
    border: 1px solid #000;
    border-radius: 25px;
    padding: 15px;
    margin: 15px;
    width: 100%;
`

export const StyledTitle = styled.Text`
    font-size: 20px;
    font-weight: bold;
`