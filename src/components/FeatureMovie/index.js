import React from 'react';
import { Container } from './styles';

export default function FeatureMovie({ item }) {
    
  let firsDate = new Date(item.first_air_date);
  let genres = [];

  for(let i in item.genres){
    genres.push( item.genres[i].name );
  }

  let description = item.overview;
  if(description.length > 200) description = description.substring(0, 200) + "..."


  return (
    <Container item={item}>
        <div className='vertical'>
            <div className='horizontal'>
                <div className='name'>{ item.original_name }</div>

                <div className='info'>
                    <div className='points'>{ item.vote_average } pontos</div>
                    <div className='year'>{firsDate.getFullYear()}</div>
                    <div className='seasons'>{ item.number_of_seasons } temporada{item.number_of_seasons !== 1 ? 's' : ''}</div>
                </div>

                <div className='description'>{ description }</div>

                <div className='buttons'>
                    <a className='watchButton' href={`/watch/${item.id}`}>► Assistir</a>
                    <a className='myListButton' href={`/list/add/${item.id}`}>+ Minha Lista</a>
                </div>

                <div className='genres'><strong>Gêneros:</strong> { genres.join(', ') }</div>

            </div>
        </div>
    </Container>
  );
}