import React from 'react'
import background from "../../img/img.jpg"
import styled from "styled-components";
import CardBrinquedos from "../CardBrinquedos"
import Header from '../Header';


export default function Loja({ carrinho, setCarrinho, brinquedos, setBrinquedos }) {
 

  function comprar(id) {
    const i = carrinho.findIndex((item) => item.id === id);
    console.log(i);
    if (i !== -1) {
      carrinho[i] = { ...carrinho[i], amount: carrinho[i].amount + 1 };
    } else {
      const brinquedoEncontrado = brinquedos.find((brinquedo) => brinquedo.id === id);
      const novoBrinquedo = { ...brinquedoEncontrado, amount: 1 };
      const novaLista = [...carrinho, (carrinho[1] = novoBrinquedo)];

      setCarrinho(novaLista);
    }
  }

  const brinquedosRenderizados = brinquedos.map((brinquedo) => {
    return <CardBrinquedos
      key={brinquedo.id}
      id={brinquedo.id}
      name={brinquedo.name}
      image={brinquedo.url}
      comprar={comprar}
      price={brinquedo.price}>

    </CardBrinquedos>
  })


  return (
    <LojaContainer>
      <Header/>
      <BrinquedosContainer>
        {brinquedosRenderizados}
      </BrinquedosContainer>
    </LojaContainer>
  )
}

const BrinquedosContainer = styled.section`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 2rem;
  background-image:url(${background});
  background-size: cover;
  background-repeat: no-repeat;
  padding-top:2rem;
  

`;
const LojaContainer = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
`