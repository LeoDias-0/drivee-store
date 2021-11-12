import styled from 'styled-components'

const ContainerInput = styled.input`
    background-color: #FFFFFF;
    margin: 10px 0;
    padding: 10px;
    box-sizing: border-box;
    width: 100%;
    border-color: transparent;
    border-radius: .375em;
    font-size: 16px;
    box-shadow: 0 0 0 1px rgb(0 0 0 / 25%);
    min-height: 48px;
    font-family: 'Roboto';
    font-size: 16px;
    font-weight: 400;
`

const InfoInput = ({ placeholder, valueToTrack }) => {
    const [value, setValue] = valueToTrack
    return (
        <ContainerInput
            placeholder={placeholder}
            onChange={e => setValue(e.target.value)}
            value={value} />
    )
}

export default InfoInput