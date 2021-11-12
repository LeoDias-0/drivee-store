import { useEffect, useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import Card from '../utils/Card';
import ContainerForm from '../utils/ContainerForm';

export default function Home() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:4000/items')
      .then((res) => {
        setItems(res.data);
      })
      .catch(() => {
        console.log('deu ruim');
      });
  }, []);

  return (
    <ContainerForm>
      <Container>
        <span>
          Todos os produtos
        </span>
        <Cards>
          {items.map((item) => <Card item={item} key={item.id} />)}
        </Cards>
      </Container>
    </ContainerForm>
    

  );
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
`;
