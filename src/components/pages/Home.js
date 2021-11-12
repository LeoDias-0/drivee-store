import { useEffect, useState } from 'react';
import styled from 'styled-components';
import Card from '../utils/Card';
import { getItems } from '../../services/API';

export default function Home() {
  const [items, setItems] = useState([]);

  useEffect(() => {
      getItems()
      .then((res) => {
        console.log(res)
        setItems(res.data);
      })
      .catch((err) => {
        console.log('err');
      });
  }, []);

  return (
      <Container>
        <span>
          Todos os produtos
        </span>
        <Cards>
          {items.map((item) => <Card item={item} key={item.id} />)}
        </Cards>
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
`;
