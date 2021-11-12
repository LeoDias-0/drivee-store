import styled from 'styled-components'

const ContainerNoShapeButton = styled.button`
    outline: none;
    border-width: 0px solid;
    margin: 20px;
    box-sizing: border-box;
    border-radius: .375em;
    width: 100%;
    font-size: 16px;
    min-height: 48px;
    border-color: transparent;
    background-color: transparent;
    color: #3483fa;
    font-family: 'Roboto';
    font-size: 16px;
    font-weight: 400;
    transition: background-color 0.8s;
    &:hover {
        background-color: rgba(52, 131, 250, 0.2);
    }
`

const NoShapeButton = ({ innerText }) => {
    return (
        <ContainerNoShapeButton>
            {innerText}
        </ContainerNoShapeButton>
    )
}

export default NoShapeButton