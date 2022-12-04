import React from 'react'
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import CardCarrinho from '../CardCarrinho';
import { handleHome } from "../Router/Cordinator"
import background from "../../img/img.jpg"
import Header from '../Header';


export default function Carrinho({ carrinho, setCarrinho }) {
  const navigate = useNavigate();

  let preçoTotal = 0;

  carrinho.map((item) => (preçoTotal = preçoTotal + item.price * item.amount));

  function remover(id) {
    const brinquedo = carrinho && carrinho.find((item) => item.id === id);
    console.log(brinquedo);

    if (brinquedo.amount > 1) {
      const novoCarrinho = carrinho.map((item) => {
        if (brinquedo.id === item.id && item.amount >= 1) {
          return { ...item, amount: item.amount - 1 };
        } else {
          return item;
        }
      });

      setCarrinho(novoCarrinho);
    } else {

      const carrinhoSemItem = carrinho.filter((item) => item.id !== id);
      setCarrinho(carrinhoSemItem);
    }
  }

  const carrrinhoRenderizado = carrinho.map((item) => {
    return <CardCarrinho
      key={item.id}
      id={item.id}
      url={item.url}
      name={item.name}
      amount={item.amount}
      deleteItem={remover}
      price={item.price}></CardCarrinho>
  })

  return (
    <>
      <Header>
        <button onClick={() => handleHome(navigate)} class="neon-bt" >
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          Voltar
        </button>
      </Header>

      <CarrinhoBody>
        <h3>Preço Total: R$ {preçoTotal}</h3>
        
        <CarrinhoContainer>
          {carrrinhoRenderizado}
        </CarrinhoContainer>
      </CarrinhoBody>
    </>

  )
}

const CarrinhoBody = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-image:url(${background});
  background-size: cover;
  background-repeat: no-repeat;  
  height: 100vh;

  h3{
    font-size: 2rem;
    font-weight: bold;
    width: 50%;
    border: 4px solid gray;
    border-radius: 8px;
    background-color: white;
    margin: 2rem 0;
   
    color: #03e9f4;
    text-align: center;
    padding: 16px;
  }
`

const CarrinhoContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 2rem;
`
