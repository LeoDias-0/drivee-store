import styled from 'styled-components'


const ContainerHeader = styled.div`
    font-family: 'Roboto';
    font-size: 21px;
    line-height: calc(1rem + 10px);
    font-weight: 500;
    margin-bottom: 10px;
`

const MiniHeaderForForm = ({ children }) => {
    return (
        <ContainerHeader>
            {children}
        </ContainerHeader>
    )
}

export default MiniHeaderForForm