import React, { useEffect, useState } from 'react'
import { handleCart } from "../Router/Cordinator"
import { useNavigate } from "react-router-dom";
import background from "../../img/img.jpg"
import styled from "styled-components";
import CardBrinquedos from "../CardBrinquedos"
import Header from '../Header';
import { Input } from "@chakra-ui/react"

export default function Loja({ carrinho, setCarrinho, brinquedos, setBrinquedos }) {
  const navigate = useNavigate();
  const [brinquedosFiltrados, setBrinquedosFiltrados] = useState([])
  const [elementoBuscado, setElementoBuscado] = useState("")
  const [ordenacao, setOrdenacao] = useState("")
  const [valorMaximo, setValorMaximo]= useState()
  const [valorMinimo, setValorMinimo]= useState()
  


  useEffect(() => {
    setBrinquedosFiltrados(brinquedos)

  }, [])

  useEffect(() => {
    const busca = brinquedos.filter((brinquedo) => brinquedo.name.toLowerCase().includes(elementoBuscado.toLowerCase()))
    setBrinquedosFiltrados(busca)

  }, [elementoBuscado])

  function maximo (ev){
    setValorMaximo (ev.target.value)
    const brinquedosAteOValorMaximo = brinquedosFiltrados.filter((brinquedo)=> brinquedo.price <= valorMaximo)
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

  const brinquedosRenderizados = brinquedosFiltrados.map((brinquedo) => {
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
    <>
      <Header>
        <div>
          <input type="text" value={elementoBuscado} onChange={(ev) => setElementoBuscado(ev.target.value)} placeholder="Pesquisar" />
          <input type="number" value={valorMaximo} onChange={(ev) => maximo(ev.target.value)} placeholder="Valor Maximo" />
          <input type="number" value={elementoBuscado} onChange={(ev) => setElementoBuscado(ev.target.value)} placeholder="Valor Minimo" />

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
          {brinquedosRenderizados}
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
  /* height:100vh; */
  background-image:url(${background});
  background-size: cover;
  background-repeat: no-repeat;
  padding: 2rem 0;
`