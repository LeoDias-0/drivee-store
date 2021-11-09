import styled from "styled-components"
import { BsPersonCircle, BsCart2 } from 'react-icons/bs';
import { useState } from "react";

export default function TopBar(){
    const [isOpen, setIsOpen]= useState("")

    function openCloseMenu(){
        isOpen ? setIsOpen(""):setIsOpen("open");
    }

    return (
        <>
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
                    <BsCart2 onClick={openCloseMenu} style={{fontSize: 50}}/>
                </div>
            </Top>
            <StyledCart>
            <div className={`cart ${isOpen}`}>

            </div>
            </StyledCart>
        </>
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
    z-index:1;

    & h1{
        font-size: 32px;
        font-weight: 700;
    }
    

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

const StyledCart = styled.div`
    & .cart{
        position: fixed;
        top: 100px;
        right: -100%;
        background-color: #FFFFFF;
        width:33%;
        z-index:1;
        height: 100%;
        box-sizing: border-box;
        padding: 20px;
        transition: 1s;
    }

    & .cart.open{
        right:0
    }

`;