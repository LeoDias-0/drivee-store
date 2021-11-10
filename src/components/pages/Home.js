import { useHistory } from "react-router";
import { useEffect, useState } from "react";
import styled from "styled-components"
import axios from "axios";
import Card from "../utils/Card";

export default function Home(){
    const history=useHistory();
    const [items, setItems] = useState([]);

    useEffect(()=>{
        axios.get("http://localhost:4000/items")
        .then(res=>{
            setItems(res.data)
        })
        .catch(err=>{
            console.log("deu ruim")
        })
    },[])

    
    return (
        <Container>
            <span>
                Todos os produtos
            </span>
            <Cards>
                {items.map(item => <Card item={item} key={item.id}/>)}
            </Cards>
            
        </Container>
        
    )
}

const Container = styled.div`
    margin-top: 150px;
    width: 100%;

    & span{
        display: flex;
        justify-content: center;
        font-size: 28px;
        font-weight: 700;
        margin-bottom: 50px;
        cursor:default;
    }
`;

const Cards = styled.div`
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;

    & .card{
        width: 30%;
        height: 250px;
        background-color: #FFFFFF;
        display: flex;
        margin-bottom: 20px;
        border-radius: 20px;

       

        @media screen and (max-width: 1100px){
            width:48%
        }

        @media screen and (max-width: 711px){
            width:80%
        }

    & .img{
        width: 50%;
        height: 100%;
        cursor: pointer;
        & img{
            object-fit: cover;
            width: 100%;
            height: 100%;
            border-radius: 20px 0px 0px 20px;
        }
    }
    & .infos{
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        box-sizing: border-box;
        padding: 20px;
        align-items: center;
        width: 50%;
        & h1{
            font-size: 32px;
            font-weight: 600;
            color:#1C1C1C;
            cursor: pointer;
        }
        & span{
            font-size: 22px;
            color: #4F4F4F;
        }
        & p{
            font-size: 28px;
        }
        & div{
            display: flex;
            flex-direction: column;
            align-items: center;
        }
        & button{
            width: 100%;
            height: 40px;
            border: none;
            border-radius: 10px;
            background-color: #1E90FF;
            color: #FFFFFF;
        }
    }
    }
`;
