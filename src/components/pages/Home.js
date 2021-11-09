import { useHistory } from "react-router";
import styled from "styled-components"

export default function Home(){
    const history=useHistory();

    
    return (
        <Container>
            <span>
                Todos os produtos
            </span>
            <Cards>
                <div className="card">
                    <div className="img" onClick={()=> history.push("/item")}>
                        <img src="https://a-static.mlcdn.com.br/618x463/bolsa-feminina-dhaffy-preto-alca-de-mao-e-transversal-dhaffy-bolsas/dhaffybolsas/5690822015/31df2a78d92da7e167ddcadc561cfd17.jpg" alt=""/>
                    </div>
                    <div className="infos">
                        <div>
                            <h1 onClick={()=> history.push("/item")}>bolsa</h1> 
                            <span>Bolsa adoravel</span>
                            <p>R$50,00</p>
                        </div>
                        <button>
                            Adicionar ao carrinho
                        </button>
                        
                    </div>
                </div> 


                <div className="card">
                    <div className="img" onClick={()=> history.push("/item")}>
                        <img src="https://a-static.mlcdn.com.br/618x463/bolsa-feminina-dhaffy-preto-alca-de-mao-e-transversal-dhaffy-bolsas/dhaffybolsas/5690822015/31df2a78d92da7e167ddcadc561cfd17.jpg" alt=""/>
                    </div>
                    <div className="infos">
                        <div>
                            <h1 onClick={()=> history.push("/item")}>bolsa</h1> 
                            <span>Bolsa adoravel</span>
                            <p>R$50,00</p>
                        </div>
                        <button>
                            Adicionar ao carrinho
                        </button>
                        
                    </div>
                </div> 


                <div className="card">
                    <div className="img" onClick={()=> history.push("/item")}>
                        <img src="https://a-static.mlcdn.com.br/618x463/bolsa-feminina-dhaffy-preto-alca-de-mao-e-transversal-dhaffy-bolsas/dhaffybolsas/5690822015/31df2a78d92da7e167ddcadc561cfd17.jpg" alt=""/>
                    </div>
                    <div className="infos">
                        <div>
                            <h1 onClick={()=> history.push("/item")}>bolsa</h1> 
                            <span>Bolsa adoravel</span>
                            <p>R$50,00</p>
                        </div>
                        <button>
                            Adicionar ao carrinho
                        </button>
                        
                    </div>
                </div> 
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
        background-color: #F0FFFF;
        display: flex;
        margin-bottom: 20px;
        border-radius: 20px;

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
