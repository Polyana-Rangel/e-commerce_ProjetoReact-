import React, { createContext, useState, useEffect, useContext } from 'react';

const CartContext = createContext({});

export const CartProvider = ({ children }) => {
    const [brinquedos, setBrinquedos] = useState([]);
    const [totalPrice, setTotalPrice] = useState(0);
  
    useEffect(() => {
      async function loadStoragedData() {
        const items = localStorage.getItem('@Cart:Brinquedos');
        const total = localStorage.getItem('@Cart:ValorTotal')
          ? localStorage.getItem('@Cart:ValorTotal')
          : '0';
  
        if (items) {
          setBrinquedos(JSON.parse(items));
          setTotalPrice(JSON.parse(total));
        }
      }
  
      loadStoragedData();
    }, []);
  
    useEffect(() => {
      localStorage.setItem('@Cart:Brinquedos', JSON.stringify(brinquedos));
      localStorage.setItem('@Cart:ValorTotal', JSON.stringify(totalPrice));
    }, [brinquedos]);
  
    const addToCart = (brinquedoSelected) => {
      const checkBrinquedoExists = brinquedos.findIndex(
        (element) => element.name === brinquedoSelected.name,
      );
  
      if (checkBrinquedoExists === -1) {
        const { id, name, price, url } = brinquedoSelected;
        const newBrinquedo = {
          id,
          name,
          url,
          price,
          amount: 1,
        };
  
        setTotalPrice(totalPrice + parseInt(price, 10));
        setBrinquedos([...brinquedos, newBrinquedo]);
      } else {
        const items = brinquedos.map((element) => {
          if (brinquedoSelected.name === element.name) {
            const { id, name, price, amount, url } = element;
            const newBrinquedo = {
              id,
              name,
              url,
              price,
              amount: amount + 1,
            };
  
            setTotalPrice(totalPrice + parseInt(price, 10));
  
            return newBrinquedo;
          }
  
          return element;
        });
  
        setBrinquedos(items);
      }
    };
  
  
  

    const decrement = (id) => {
      const items = brinquedos.map((brinquedo) => {
        if (id === brinquedo.id) {
          const { id, url, name: brinquedoName, price, amount } = brinquedo;
  
          const newBrinquedo = {
            id,
            url,
            name: brinquedoName,
            price,
            amount: amount - 1,
          };
  
          setTotalPrice(totalPrice - parseInt(price, 10));
  
          if (newBrinquedo.amount > 0) {
            return newBrinquedo;
          }
  
          return;
        }
        return brinquedo;
      });
  
      const filtered = items.filter(Boolean);
  
      setBrinquedos(filtered);
    };
  
    return (
      <CartContext.Provider
        value={{
          brinquedos,
          totalPrice,
          decrement,
          addToCart
        }}
      >
        {children}
      </CartContext.Provider>
    );
  };

  export function useCart() {
    const context = useContext(CartContext);
  
    return context;
  }