import SubmitButton from '../utils/SubmitButton'
import InfoInput from '../utils/InfoInput'
import Background from '../utils/Background'
import ContainerForm from '../utils/ContainerForm'
import NoShapeButton from '../utils/NoShapeButton'
import MiniHeaderForForm from '../utils/MiniHeaderForForm'
import { useState } from 'react'
import { postSignUp } from '../../services/API'

const SignUpScreen = () => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [repeatedPassword, setRepeatedPassword] = useState('')

    const handleSubmitButton = async () => {
        // TODO: 
        // Algumas validações básicas

        const body = {
            name,
            email,
            password
        }
        
        try {
            const response = await postSignUp(body)

            if (response.status === 200) alert('Usuário cadastrado com sucesso!')
        } catch (error) {

        }
    }
    
    
    return (
        <Background>
            <ContainerForm>
                <MiniHeaderForForm>
                    Digite seus dados para se cadastrar
                </MiniHeaderForForm>
                <InfoInput
                    placeholder={'Nome'}
                    valueToTrack={[name, setName]} />
                <InfoInput
                    placeholder={'E-mail'}
                    valueToTrack={[email, setEmail]} />
                <InfoInput
                    placeholder={'Senha'}
                    valueToTrack={[password, setPassword]} />
                <InfoInput
                    placeholder={'Repita sua senha'}
                    valueToTrack={[repeatedPassword, setRepeatedPassword]} />
                <SubmitButton innerText={'Cadastrar'} onClick={handleSubmitButton} />
                <NoShapeButton innerText={'Já possui um conta?'} />
            </ContainerForm>
        </Background>
    )
}

export default SignUpScreen