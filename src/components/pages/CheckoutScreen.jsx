import Background from '../utils/Background'
import ContainerOrder from '../utils/ContainerOrder'
import OrderSummary from '../utils/OrderSummary'
import SubmitButton from '../utils/SubmitButton'
import NoShapeButton from '../utils/NoShapeButton'
import styled from 'styled-components'
import Swal from 'sweetalert2'
import { useHistory } from 'react-router'

const Separator = styled.div`
    max-height: 1px;
    min-height: 1px;
    background-color: #888888;
    width: 13cm;
    margin-top: 0.8cm;
    margin-bottom: 0.5cm;
`

const CheckoutScreen = ({ cartList }) => {
    const history = useHistory()

    const orderSucceed = () => Swal.fire({
        title: 'Compra concluída com sucesso!',
        icon: 'success',
        text: 'Pagamento efetivado.',
        confirmButtonText: 'Voltar para a página inicial.',
        allowOutsideClick: false
    }).then(() => history.push('/'))

    return (
        <Background>
            <ContainerOrder>
                <OrderSummary itemsList={cartList} />
                <Separator />
                <SubmitButton
                    width={'11.8cm'}
                    innerText={'Concluir compra'}
                    onClick={orderSucceed}
                    />
                <NoShapeButton
                    width={'11.8cm'}
                    innerText={'Continuar comprando'}
                    goTo={'/'}
                    />
            </ContainerOrder>
            
        </Background>
    )
}

export default CheckoutScreen