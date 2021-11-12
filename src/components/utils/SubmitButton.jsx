import styled from 'styled-components'

const SubmitButtonContainer = styled.button`
    box-sizing: border-box;
    margin-top: 10px;
    padding: 10px;
    border-color: transparent;
    background-color: #3483fa;
    color: #fff;
    width: 100%;
    border-radius: .375em;
    font-size: 16px;
    box-shadow: 0 0 0 1px rgb(0 0 0 / 25%);
    min-height: 48px;
    font-family: 'Roboto';
    font-size: 16px;
    font-weight: 400;
`

const SubmitButton = ({ innerText, onClick }) => {
    return (
        <SubmitButtonContainer onClick={onClick}>
        {innerText}
        </SubmitButtonContainer>
    )
}

export default SubmitButton