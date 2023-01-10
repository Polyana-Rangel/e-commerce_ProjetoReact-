import React, { useEffect, useState } from 'react'
import { handleCart } from "../Router/Cordinator"
import { useNavigate } from "react-router-dom";
import background from "../../img/img.jpg"
import styled from "styled-components";
import CardBrinquedos from "../CardBrinquedos"
import Header from '../Header';
import { useCart } from '../../contexts/cartContext';

export default function Loja({ brinquedos }) {
  const { addToCart } = useCart();
  const navigate = useNavigate();
  const [brinquedosFiltrados, setBrinquedosFiltrados] = useState([])
  const [elementoBuscado, setElementoBuscado] = useState("")
  const [ordenacao, setOrdenacao] = useState("")
  const [valorMaximo, setValorMaximo]= useState("")
  const [valorMinimo, setValorMinimo]= useState("")

  useEffect(() => {
    setBrinquedosFiltrados(brinquedos)
  }, [])

  useEffect(() => {
    const busca = brinquedos.filter((brinquedo) => brinquedo.name.toLowerCase().includes(elementoBuscado.toLowerCase()))
    setBrinquedosFiltrados(busca)

  }, [elementoBuscado])

  function maximo (event){
    const result = event.target.value.replace(/\D/g, '');

    setValorMaximo(result)

    const brinquedosAteOValorMaximo = brinquedos.filter((brinquedo) => {
      if(valorMinimo != "") {
        return brinquedo.price <= Number(result) && brinquedo.price >= Number(valorMinimo)
      }
      
      return brinquedo.price <= Number(result) 
    })

    if(result === "") {
      window.location.reload();
    }

    setBrinquedosFiltrados(brinquedosAteOValorMaximo)
  }

  function minimo (event){
    const result = event.target.value.replace(/\D/g, '');

    setValorMinimo(result)

    const brinquedosAteOValorMaximo = brinquedos.filter((brinquedo)=> {
      if(valorMaximo != "") {
        return brinquedo.price <= Number(result) && brinquedo.price >= Number(valorMinimo)
      }

      return brinquedo.price >= Number(result)
    })

    if(result === "") {
      window.location.reload();
    }

    setBrinquedosFiltrados(brinquedosAteOValorMaximo)
  }

  function crescente() {
    const ordenar = brinquedosFiltrados.sort((a, b) => b.price - a.price)
    setBrinquedosFiltrados(ordenar)
  }

  function decrescente() {
    const ordenar = brinquedosFiltrados.sort((a, b) => a.price - b.price)
    setBrinquedosFiltrados(ordenar)
  }

  function sort(ev) {
    setOrdenacao(ev.target.value)

    if (ordenacao==="crescente"){
      crescente()
    } if (ordenacao === "decrescente"){
      decrescente()
    }
  }

  const brinquedosRenderizados = brinquedosFiltrados.map((brinquedo) => {
    return (
      <CardBrinquedos
        key={brinquedo.id}
        id={brinquedo.id}
        name={brinquedo.name}
        image={brinquedo.url}
        comprar={() => addToCart(brinquedo)}
        price={brinquedo.price}>
      </CardBrinquedos>
    );
  })

  return (
    <>
      <Header>
        <div>
          <Input type="text" value={elementoBuscado} onChange={(ev) => setElementoBuscado(ev.target.value)} placeholder="Pesquisar" />
          <Input type="text" class="number" value={valorMinimo} onChange={minimo} placeholder="Valor Minimo" />
          <Input type="text" class="number" value={valorMaximo} onChange={maximo} placeholder="Valor Maximo" />

          <select value={ordenacao} onChange={(ev) => sort(ev)}>
            <option value="">Escolha</option>
            <option value="crescente">Crescente</option>
            <option value="decrescente">Decrescente</option>
          </select>

        </div>
        <button onClick={() => handleCart(navigate)} className="neon-bt" >
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          Vá para Carrinho
        </button>
      </Header>
      <LojaContainer>
        <BrinquedosContainer>
          {brinquedosRenderizados.length > 0 ? brinquedosRenderizados : <div><h1>Não existem produtos nesse valor.</h1></div>}
        </BrinquedosContainer>
      </LojaContainer>
    </>
  )
}

const BrinquedosContainer = styled.section`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 2rem;
`;

const LojaContainer = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height:100vh;
  background-image:url(${background});
  background-size: cover;
  background-repeat: no-repeat;
  padding: 2rem 0;
`

const Input = styled.input`
  background: none;
  border: 1px solid #03e9f4;
  border-radius: 8px;
  height: 32px;
  color: white;
  padding: 0 8px;

  ::placeholder {
    color: white;
  }

  & + Input {
    margin-left: 16px;
  }

  
`