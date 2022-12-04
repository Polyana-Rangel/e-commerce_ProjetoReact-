import React, { useState } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Carrinho from '../Pages/Carrinho';
import Loja from "../Pages/Loja"
import estoque from "../../estoque.json"

export default function Router() {

    const [carrinho, setCarrinho] = useState([])
    const [brinquedos, setBrinquedos] = useState(estoque.brinquedos);

    return (
        <BrowserRouter>
            <Routes>
                <Route
                    path="/"
                    element={<Loja carrinho={carrinho} setCarrinho={setCarrinho} brinquedos={brinquedos} setBrinquedos={setBrinquedos} />}
                />
                <Route
                    path="/cart"
                    element={<Carrinho carrinho={carrinho} setCarrinho={setCarrinho} />}
                />

            </Routes>
        </BrowserRouter>
    )
}

