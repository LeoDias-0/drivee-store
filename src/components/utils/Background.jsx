import styled from 'styled-components'

const ContainerBackground = styled.div`
    background-color: #E7E7E7;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    box-sizing: border-box;
    z-index: -2;
`

const YellowRegion = styled.div`
    box-sizing: border-box;
    position: absolute;
    background-color: #fff059;
    top: 0;
    left: 0;
    right: 0;
    height: 40%;
    z-index: -1;
`

const Background = ({ children }) => {
    return (
        <ContainerBackground>
            <YellowRegion />
            {children}
        </ContainerBackground>
    )
}

export default Background