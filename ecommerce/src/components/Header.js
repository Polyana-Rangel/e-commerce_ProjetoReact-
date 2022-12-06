import React from 'react'
import styled from "styled-components";


const Header = ({ children }) => {


  return (
    <HeaderContainer>
      <HeaderTitle>
        <h1>Jornada Espacial</h1>
        <span>👽👾👩‍🚀⚗️</span>
      </HeaderTitle>
      
      <HeaderBody>
   
        {children}
      </HeaderBody>
    </HeaderContainer>
  )
}

export default Header

const HeaderContainer = styled.header`
  padding: 2rem 2rem 0;
  display: flex;
  flex-direction: column;
  width: 100%;

  max-height: 300px;
  background-color:	#101010; 
`

const HeaderTitle = styled.div`
  display: flex;
  flex-direction:column;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  box-shadow: 0 0 5px #03e9f4,
              0 0 25px #03e9f4,
              0 0 50px #03e9f4,
              0 0 105px #03e9f4;

  h1 {
    font-size: 3rem;
    color: #03e9f4;
  }

  span {
    font-size: 3rem;
  }
`

const HeaderBody = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 2rem;
  padding-bottom: 1rem;


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
