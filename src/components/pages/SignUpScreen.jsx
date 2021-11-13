import SubmitButton from '../utils/SubmitButton'
import InfoInput from '../utils/InfoInput'
import Background from '../utils/Background'
import ContainerForm from '../utils/ContainerForm'
import NoShapeButton from '../utils/NoShapeButton'
import MiniHeaderForForm from '../utils/MiniHeaderForForm'
import { useState } from 'react'
import { postSignUp } from '../../services/API'
import { validateSignUpInfo} from '../../validations/validateSignUpInfo'
import Swal from 'sweetalert2'


const SignUpScreen = () => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [repeatedPassword, setRepeatedPassword] = useState('')

    const handleSubmitButton = async () => {

        const body = {
            name,
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

        if (password !== repeatedPassword) showErrorMessage('A senhas devem ser iguais!')

        const validationsErrorsDetails = validateSignUpInfo.validate(body).error?.details
        if (validationsErrorsDetails) showErrorMessage('Dados inválidos!')
        
        try {
            await postSignUp(body)
        } catch (error) {
            showErrorMessage('Houve um erro interno, tente novamente mais tarde!')
        }
    }
    
    
    return (
        <Background>
            <ContainerForm>
                <MiniHeaderForForm>
                    Digite seus dados para se cadastrar
                </MiniHeaderForForm>
                <InfoInput
                    type={'text'}
                    placeholder={'Nome'}
                    valueToTrack={[name, setName]} />
                <InfoInput
                    type={'email'}
                    placeholder={'E-mail'}
                    valueToTrack={[email, setEmail]} />
                <InfoInput
                    type={'password'}
                    placeholder={'Senha'}
                    valueToTrack={[password, setPassword]} />
                <InfoInput
                    type={'password'}
                    placeholder={'Repita sua senha'}
                    valueToTrack={[repeatedPassword, setRepeatedPassword]} />
                <SubmitButton innerText={'Cadastrar'} onClick={handleSubmitButton} />
                <NoShapeButton innerText={'Já possui um conta?'} />
            </ContainerForm>
        </Background>
    )
}

export default SignUpScreen
