import React from 'react'
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import CardCarrinho from '../CardCarrinho';
import {handleHome} from "../Router/Cordinator"
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

        const carrrinhoRenderizado = carrinho.map((item)=>{
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
        <CarrinhoContainer>
          <Header/>
        {/* <h2 id="cart">Carrinho <span role="img" aria-label="cart">🛒 </span></h2> */}
        <button onClick={() => handleHome(navigate)}>Voltar</button>
        {carrrinhoRenderizado}
        <h3>Preço Total: R$ {preçoTotal}</h3>

      </CarrinhoContainer>

    )
}

const CarrinhoContainer = styled.main`

 display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 2rem;
  background-image:url(${background});
  background-size: cover;
  background-repeat: no-repeat;
  /* padding-top:2rem; */
  height:100vh;

  button{
    display:flex;

    font-size: 3rem;
    border-radius: 4px;
    background-color: #03e9f4;
   
    color: black;
    text-align: center;
    font-size: 28px;
    padding: 5px;
    width: 100px;
    height: 60px;
    cursor: pointer;
    margin: 5px;
 
  flex-direction: column;
  align-items: center;
  border-radius:50%;
  }
  h3{
    display:flex;

    font-size: 3rem;
    border-radius: 4px;
    background-color: #03e9f4;
   
    color: black;
    text-align: center;
    font-size: 28px;
    padding: 16px;
    width: 100px;
    /* height: vh;
    cursor: pointer; */
    margin: 5px;
 
  flex-direction: column;
  align-items: center;
  }
  
`
