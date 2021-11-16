import styled from 'styled-components'
import { AiOutlinePlus, AiOutlineMinus } from 'react-icons/ai'
import { HiOutlineTrash } from 'react-icons/hi'
import { useState } from 'react'

const formatPrice = price => `R$ ${(price*.01).toFixed(2)}`

const ContainerSummary = styled.div`
    box-sizing: border-box;
    padding: 0.5cm;
    box-shadow: 0px 0px 10px 0px rgba(0,0,0,0.5);
    display: inline-block;
`

const ContainerPrice = styled.div`
    box-sizing: border-box;
    padding-left: 0.1cm;
    width: 2.8cm;
    font-family: 'Roboto';
`

const ContainerQty = styled.div`
    box-sizing: border-box;
    display: flex;
    flex-direction: row;
    width: 2cm;
    padding-right: 0.4cm;
`

const TextQty = styled.span`
    text-align: end;
    font-family: 'Roboto';
    padding: 0 0.2cm;
`

const ContainerName = styled.div`
    box-sizing: border-box;
    width: 7cm;
    color: #222222;
    font-family: 'Roboto';
`

const ContainerLine = styled.div`
    box-sizing: border-box;
    display: flex;
    flex-direction: row;
    padding: 0.2cm 0;
`

const ContainerResume = styled.div`
    box-sizing: border-box;
    width: 100%;
    padding-top: 0.5cm;
    display: flex;
    justify-content: center;
`

const BoxResume = styled.span`
    font-family: 'Roboto';
    font-weight: 600;
`

const TextResume = styled.span`
    font-family: 'Roboto';
    padding-right: 1ch;
    font-weight: 400;
`

const ContainerHeader = styled.div`
    box-sizing: border-box;
    width: 100%;
    padding-bottom: 0.5cm;
`

const BoxHeader = styled.span`
    display: inline-block;
    width: ${({width}) => width};
    text-align: center;
    font-family: 'Roboto';
    font-weight: 500;
    color: #444444;
`

const DisplayQty = ({ qty, addItem, minusItem }) => {

    return (
        <ContainerQty>
            <AiOutlinePlus
                color='green'
                onClick={addItem}
                />
            <TextQty>{qty}</TextQty>
            <AiOutlineMinus
                color='red'
                onClick={minusItem}
                style={{opacity: qty > 1 ? 1 : 0}}
                />
        </ContainerQty>
    )
}

const DisplayName = ({ name }) => {

    return (
        <ContainerName>
            {name}
        </ContainerName>
    )
}

const DisplayPrice = ({ price, deleteItem }) => {

    return (
        <ContainerPrice>
            {formatPrice(price)}
            <HiOutlineTrash
                color='red'
                onClick={deleteItem}
                style={{
                    marginLeft: '0.4cm',
                }}
                />
        </ContainerPrice>
    )
}

const ItemLine = ({ name, price, qty, row, addItem, minusItem, deleteItem }) => {

    return (
        <ContainerLine>
            <DisplayQty
                qty={qty}
                addItem={() => addItem(row)}
                minusItem={() => minusItem(row)}
                />
            <DisplayName name={name} />
            <DisplayPrice price={price} deleteItem={() => deleteItem(row)}/>
        </ContainerLine>
    )
}

const Header = () => {

    return (
        <ContainerHeader>
            <BoxHeader width='2cm' >Quantidade</BoxHeader>
            <BoxHeader width='7cm' >Item</BoxHeader>
            <BoxHeader width='2.8cm' >Preço</BoxHeader>
        </ContainerHeader>
    )
}

const Resume = ({ total }) => {

    return (
        <ContainerResume>
            <TextResume>Total: </TextResume>
            <BoxResume>{formatPrice(total)}</BoxResume>
        </ContainerResume>
    )
}

const OrderSummary = ({ itemsList }) => {

    const [items, setItems] = useState(itemsList)

    const addItem = row => {
        const changedItem = {...items[row]}
        changedItem.qty += 1

        setItems([
            ...items.slice(0, row),
            changedItem,
            ...items.slice(row + 1)
        ])
    }

    const minusItem = row => {
        const changedItem = {...items[row]}
        if (changedItem.qty > 1) changedItem.qty -= 1

        setItems([
            ...items.slice(0, row),
            changedItem,
            ...items.slice(row + 1)
        ])
    }

    const deleteItem = row => {

        setItems([
            ...items.slice(0, row),
            ...items.slice(row + 1)
        ])
    }

    return (
        <ContainerSummary>
            <Header />
            {
                items.map(({ name, price, qty }, row) => {
                    return (
                    <ItemLine 
                        name={name}
                        price={price}
                        qty={qty}
                        row={row}
                        key={row}
                        addItem={addItem}
                        minusItem={minusItem}
                        deleteItem={deleteItem}
                    />
                    )
                })
            }
            <Resume total={
                items.reduce((prev, {price, qty}) => prev + qty * price, 0)
                } />
        </ContainerSummary>
    )
}

export default OrderSummary