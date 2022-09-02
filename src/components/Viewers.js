import React from 'react';
import styled from 'styled-components';

function Viewers() {
    return (
        <Container>
            <Wrap>
                <img src="/images/viewers-disney.png" alt="" />
            </Wrap>
            <Wrap>
                <img src="/images/viewers-marvel.png" alt="" />
            </Wrap>
            <Wrap>
                <img src="/images/viewers-national.png" alt="" />
            </Wrap>
            <Wrap>
                <img src="/images/viewers-pixar.png" alt="" />
            </Wrap>
            <Wrap>
                <img src="/images/viewers-starwars.png" alt="" />
            </Wrap>
        </Container>
    )
}

export default Viewers

const Container = styled.div`
margin-top: 30px;
display: grid;
padding: 30px 0px 26px;
grid-gap:25px;
//this is tempale for the 5 grids
grid-template-columns: repeat(5, minmax(0, 1fr));
//fr is fraction of avalable space
`

const Wrap = styled.div`
// margin:10px; we are using grid gap
border-radius:10px;
border: 3px solid rgba(249,249,249, 0.1);
box-shadow: rgb(0 0 0/69%) 0px 26px 30px -10px, rgb(0 0 0 / 73%) 0px 16px 10px -10px;
transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;

img{
    width:100%;
    height:100%;
    object-fit: cover;
}

&:hover{
    cursor: pointer;
    transform: scale(1.05);
    // transition:all 0.2s ease;
    border: 3px solid rgba(249, 249, 249, 0.8);
}
`
