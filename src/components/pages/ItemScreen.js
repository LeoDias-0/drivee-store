import { useParams } from "react-router";
import { useEffect, useState } from "react";
import styled from "styled-components";
import { getItem } from "../../services/API";

export default function ItemScreen(){
    const {id} = useParams()
    const [item, setItem]=useState({})
        useEffect(() => {
            getItem(id)
                .then((res) => {
                    setItem(res.data[0]);
                })
                .catch((err) => {
                    console.log(err);
                });
        }, []);
    
        return (
            <Container>
                <span>
                    {item.name}
                </span>
                <div className="img">
                 <img src={item.img} alt="" />
                </div> 
                <div>
                    <p>
                        {item.description}
                    </p>
                </div>
                <h1>R${item.price},00</h1>
                <button>Adicionar ao carrinho</button>
                   
            </Container>
    
    
        );
}

const Container = styled.div`
    margin-top: 100px;
    width: 100%;
    font-family: 'Roboto';

    & span{
        background-color: #FFFFFF;
        height: 100px;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 38px;
        font-weight: 700;
        cursor:default;
    }

     & .img{
        width: 120px;
        max-height: 120px;
        margin-left: 10%;
        & img{
            object-fit: cover;
        }
    }

    & div{
        display: flex;
        align-items: center;
        justify-content: center;
        margin: 10px;

        & p{
            width: 75%;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 25px;
        }
    }

    & h1{
        display: flex;
        align-items: center;
        justify-content: center;
        position: fixed;
        left: 0;
        right: 0;
        bottom: 150px;
        font-size: 50px;
        font-weight: 700;
    }

    & button{
        position: fixed;
        left: 0;
        right: 0;
        bottom: 0;
        width: 100%;
        height: 140px;
        border: none;
        background-color: #1E90FF;
        color: #FFFFFF;
        font-size: 35px;
    }
`;
