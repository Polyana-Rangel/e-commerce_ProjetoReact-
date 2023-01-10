import React, { useState } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Carrinho from '../Pages/Carrinho';
import Loja from "../Pages/Loja"
import estoque from "../../estoque.json"

export default function Router() {
    const [brinquedos, setBrinquedos] = useState(estoque.brinquedos);

    return (
        <BrowserRouter>
            <Routes>
                <Route
                    path="/"
                    element={<Loja brinquedos={brinquedos} />}
                />
                <Route
                    path="/cart"
                    element={<Carrinho />}
                />
            </Routes>
        </BrowserRouter>
    )
}

