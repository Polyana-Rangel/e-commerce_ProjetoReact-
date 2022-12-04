import React from 'react'
import { handleCart } from "./Router/Cordinator"
import { useNavigate } from "react-router-dom";
import styled from "styled-components";



const Header = () => {
   
    const navigate = useNavigate();
  return (
    <HeaderContainer>
{/* 
<div>

<input placeholder="Pesquisar" />
<button>
</button>
 </div> */}

        <h1 >Jornada Espacial <span  >👽👾👩‍🚀⚗️ </span></h1>
        <a onClick={() => handleCart(navigate)} class="neon-bt" >

      <span></span>

      <span></span>

      <span></span>

      <span></span>

      Vá para Carrinho

    </a>
       
    </HeaderContainer>
  )
}

export default Header

const HeaderContainer = styled.header`
padding:0 2rem;
/* display: flex;
flex-direction: column;
justify-content: space-between; */

width: 100%;
background-color:	#101010; 
height: 230px;


h1{
    font-size: 3rem;
    display: flex;
    flex-direction:column;
    align-items: center;
    justify-content: center;
    margin:0;
    color: #03e9f4;


    background: #03e9f4;

color: black;

border-radius: 50%;

box-shadow: 0 0 5px #03e9f4,

            0 0 25px #03e9f4,

            0 0 50px #03e9f4,

            0 0 105px #03e9f4;

    
}
button{
    font-size: 1rem 
}
.neon-bt {

position: relative;

display: inline-block;

padding: 10px 20px;

color: #03e9f4;

font-size: 16px;

text-decoration: none;

text-transform: uppercase;

overflow: hidden;

transition: 0.2s;

margin-top: 40px;

letter-spacing: 4px

}



.neon-bt:hover {

background: #03e9f4;

color: #fff;

border-radius: 5px;

box-shadow: 0 0 5px #03e9f4,

            0 0 25px #03e9f4,

            0 0 50px #03e9f4,

            0 0 100px #03e9f4;

}





/*animação do span para criar linhas*/





.neon-bt span {

position: absolute;

display: block;

}





/*span 1*/

.neon-bt span:nth-child(1) {

top: 0;

left: -100%;

width: 100%;

height: 2px;

background: linear-gradient(90deg, transparent, #03e9f4);

animation: btn-anim1 1s linear infinite;

}



@keyframes btn-anim1 {

0% {

  left: -100%;

}

50%,100% {

  left: 100%;

}

}



/*span 2*/

.neon-bt span:nth-child(2) {

top: -100%;

right: 0;

width: 2px;

height: 100%;

background: linear-gradient(180deg, transparent, #03e9f4);

animation: btn-anim2 1s linear infinite;

animation-delay: .25s

}



@keyframes btn-anim2 {

0% {

  top: -100%;

}

50%,100% {

  top: 100%;

}

}





/*span 3*/



.neon-bt span:nth-child(3) {

bottom: 0;

right: -100%;

width: 100%;

height: 2px;

background: linear-gradient(270deg, transparent, #03e9f4);

animation: btn-anim3 1s linear infinite;

animation-delay: .5s

}



@keyframes btn-anim3 {

0% {

  right: -100%;

}

50%,100% {

  right: 100%;

}

}



/*span 4*/



.neon-bt span:nth-child(4) {

bottom: -100%;

left: 0;

width: 2px;

height: 100%;

background: linear-gradient(360deg, transparent, #03e9f4);

animation: btn-anim4 1s linear infinite;

animation-delay: .75s

}



@keyframes btn-anim4 {

0% {

  bottom: -100%;

}

50%,100% {

  bottom: 100%;

}

}

`
