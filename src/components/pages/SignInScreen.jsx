import SubmitButton from '../utils/SubmitButton'
import InfoInput from '../utils/InfoInput'
import Background from '../utils/Background'
import ContainerForm from '../utils/ContainerForm'
import NoShapeButton from '../utils/NoShapeButton'
import MiniHeaderForForm from '../utils/MiniHeaderForForm'
import { useState } from 'react'
import { useHistory } from 'react-router'
import { validateSignInInfo } from '../../validations/validateSignInInfo'
import Swal from 'sweetalert2'
import { postSignIn } from '../../services/API'


const SignInScreen = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [onLoad, setOnLoad] = useState(false)
    const history = useHistory()

    const handleSignInClick = async () => {
        const body = {
            email,
            password
        }

        const showErrorMessage = text => {
            Swal.fire({
                title: 'Erro!',
                text,
                icon: 'error',
                confirmButtonText: 'Ok'
            })
        }

        const validationsErrorsDetails = validateSignInInfo.validate(body).error?.details
        if (validationsErrorsDetails) return showErrorMessage('Dados inválidos!')
        
        setOnLoad(true)

        try {
            const response = await postSignIn(body)

            const token = response.data.token

            localStorage.setItem('drivee_store:token', token)

            history.push('/')
        } catch (error) {
            if (error.response.status === 401){
                showErrorMessage('Dados inválidos!')
            } else if (error.response.status === 409) {
                showErrorMessage('E-mail não cadastrado!')
            } else if (error.response.status === 422){
                showErrorMessage('Dados inválidos!')
            } else {
                showErrorMessage('Houve um erro interno, tente novamente mais tarde!')
            }

            setOnLoad(false)
        }
    }

    return (
        <Background>
            <ContainerForm>
                <MiniHeaderForForm>
                    Olá! Para continuar digite seu e-mail
                </MiniHeaderForForm>
                <InfoInput
                    type={'email'}
                    placeholder={'E-mail'}
                    valueToTrack={[email, setEmail]}
                    />
                <InfoInput
                    type={'password'}
                    placeholder={'Senha'}
                    valueToTrack={[password, setPassword]}
                    />

                <SubmitButton
                    innerText={'Entrar'}
                    onClick={handleSignInClick}
                    onLoad={onLoad}
                    />
                <NoShapeButton innerText={'Primeira vez? Cadastre-se!'} goTo={'/sign-up'}/>
            </ContainerForm>
        </Background>
    )
}

export default SignInScreen