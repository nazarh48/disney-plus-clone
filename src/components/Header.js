import React from 'react';
import styled from 'styled-components';

function Header() {
  return (
    <Nav>
      <Logo src="/images/logo.svg" />
      <NavMenu>
        <a>
            <img src="/images/home-icon.svg" alt="" />
            <span>HOME</span>
        </a>
        <a>
            <img src="/images/search-icon.svg" alt="" />
            <span>SEARCH</span>
        </a>
        <a>
            <img src="/images/watchlist-icon.svg" alt="" />
            <span>WATCHLIST</span>
        </a>
        <a>
            <img src="/images/original-icon.svg" alt="" />
            <span>ORIGINAL</span>
        </a>
        <a>
            <img src="/images/MOVIE-icon.svg" alt="" />
            <span>MOVIES</span>
        </a>
        <a>
            <img src="/images/SERIES-icon.svg" alt="" />
            <span>SERIES</span>
        </a>
      </NavMenu>
      <UserImage src="/images/nazar.JPG" />

      
    </Nav>
  )
}

export default Header

const Nav = styled.nav`
height: 70px;
background:#090b13;
display: flex;
align-items:center;
padding:0 30px;

`

const Logo = styled.img`
width:80px;
cursor: pointer;
`
const NavMenu = styled.div`
display:flex;
flex:1;
margin-left: 25px;
align-items: center;

a{
    display:flex;
    align-items:center;
    padding: 0 20px;
    

    img{
        width:20px;
        cursor: pointer;
    }

    span{
        font-size: 13px;
        letter-spacing: 1.42px;
        cursor: pointer;
        position: relative;

        &:after{
            content:"";
            height:2px;
            background: white;
            position: absolute;
            // top:0;
            left:0;
            right:0;
            bottom: -6px;
            opacity:0;
            transform-origin: left center;
            transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
            transform: scaleX(0);

        }
    }
    &:hover {
        span:after{
            transform: scaleX(1);
            opacity:1;
        }
    }
}

`

const UserImage = styled.img`
widht:42px;
height:42px;
border-radius:50%;
cursor: pointer;
display: flex;

`