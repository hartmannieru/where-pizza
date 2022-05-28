import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { rem } from 'polished'
import Card from './Card';

const Cards = ({product}) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('db/db.json')
      .then(response => response.json())
      .then(json => setProducts(json[product]))
  }, [product]);

  return (
    <CardsBox>
      {
        products.map(({img, title, description, oldPrice, price}, index) => (
          <Card 
            img={img} 
            title={title} 
            description={description} 
            oldPrice={oldPrice}
            price={price}
            key={index}
          />
        ))
      }
    </CardsBox>
  )
}

export const CardsBox = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: ${rem(30)};
  margin-bottom: ${rem(48)};
  &:last-child {
    margin-bottom: ${rem(60)};
  }
  /* TODO: поинты вынести в переменные */
  @media (max-width: 1450px) {
    grid-template-columns: repeat( auto-fit, minmax(${rem(300)}, 1fr) );
  }
  @media ${props => props.theme.breakpoints.sm} {
    margin-bottom: ${rem(32)};
    &:last-child {
      margin-bottom: ${rem(31)};
    }
  }
`

export default Cards