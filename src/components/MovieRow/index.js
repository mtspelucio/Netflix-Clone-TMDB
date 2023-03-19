import React, { useState } from 'react';
import { Container, List } from './styles';


export default function MovieRow({ title, items }) {

  const [scrollX, setScrollX] = useState(0); 

  const handleLeftArrow = () => {
    let x = scrollX + Math.round(window.innerWidth / 2)
    if(x > 0) x = 0

    setScrollX(x)
  }

  const handleRightArrow = () => {
    let x = scrollX - Math.round(window.innerWidth / 2)
    let listW = items.results.length * 150;
    if((window.innerWidth - listW) > x){
      x = (window.innerWidth - listW) - 60
    }
    setScrollX(x)
  }


  return (
    <Container>
      <h2>{title}</h2>
      <div className='listArea'>

        <div className='left' onClick={handleLeftArrow}>〈</div>
        <div className='right' onClick={handleRightArrow}>〉</div>

        <List 
          className='list'
          quantiti = { items.results.length }
          scroll = { scrollX }
        >
          {items.results.length > 0 && items.results.map((item, key) => (
            <div key={key} className='item'>
              <img src={`https://image.tmdb.org/t/p/w300${item.poster_path}`} alt={item.original_title} />
            </div>
          ))}
        </List>
      </div>
    </Container>
  );
}