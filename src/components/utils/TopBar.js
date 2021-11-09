import styled from "styled-components"
import { BsPersonCircle, BsCart2 } from 'react-icons/bs';

export default function TopBar(){
    return (
        <Top>
            <div>
                <h1>Drivee</h1>
            </div>
            <div>
                <BsPersonCircle style={{fontSize: 50}}/>
                <div>
                    <span>Login</span>
                    <span>Cadastre-se</span>
                </div>
                <BsCart2 style={{fontSize: 50}}/>
            </div>
        </Top>
    )
}

const Top = styled.div`
    background-color: #FFF159;
    position: fixed;
    top:0;
    left:0;
    width: 100%;
    height: 100px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    box-sizing: border-box;
    padding: 20px;
    

    & div{
        display: flex;
        width: 180px;

        & div{
            margin-left: 3px;
            flex-direction: column;
            justify-content: space-around;
            font-size: 21px;
        }
    }
`;