import { ChakraProvider } from '@chakra-ui/react'
import Router from './components/Router/Router';
import { CartProvider } from './contexts/cartContext'

function App() {
  return (
    <ChakraProvider>
      <CartProvider>
        <Router />
      </CartProvider>
    </ChakraProvider>
  );
}

export default App;
