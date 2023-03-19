import React from 'react';
import { Container } from './styles';
import LogoNetflix from '../../images/netflix.png'
import LogoNetflixAvatar from '../../images/netflix-avatar.png'

export default function Header({ background }) {
  return (
    <Container background={background}>
        <div className='logo'>
            <a href='/'>
                <img src={LogoNetflix} alt='Netflix'/>
            </a>
        </div>
        <div className='user'>
            <a href='/'>
                <img src={LogoNetflixAvatar} alt='Avatar'/>
            </a>
        </div>
    </Container>
  );
}