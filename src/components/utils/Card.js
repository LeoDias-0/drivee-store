import styled from 'styled-components';
import { useHistory } from 'react-router';

export default function Card({ item }) {
  const history = useHistory();
  return (
    <StyledCard>
      <div className="img" onClick={() => history.push(`/item/${item.id}`)}>
        <img src={item.img} alt="" />
      </div>
      <div className="infos">
        <div>
          <h1 onClick={() => history.push(`/item/${item.id}`)}>{item.name}</h1>
          <span>{item.description}</span>
          <p>
            R${item.price},00
          </p>
        </div>
        <button>
          Adicionar ao carrinho
        </button>

      </div>
    </StyledCard>
  );
}

const StyledCard = styled.div`
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
                font-size: 12px;
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
                font-size: 15px;
            }
        }
`;
