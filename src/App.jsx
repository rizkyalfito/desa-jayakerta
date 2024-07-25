import { useState } from 'react';
import { ChakraProvider, extendTheme } from '@chakra-ui/react';
import { mode } from '@chakra-ui/theme-tools';
import Header from './components/Header';
import Home from './components/Home';
import Footer from './components/Footer';
import ColorModeSwitcher from './components/ColorModeSwitcher';

const theme = extendTheme({
  styles: {
    global: (props) => ({
      body: {
        bg: mode('white', 'gray.800')(props),
        color: mode('gray.800', 'white')(props),
      },
    }),
  },
});

const App = () => {
  const [isColorModeOpen, setIsColorModeOpen] = useState(false); // State untuk toggle ColorModeSwitcher

  const toggleColorMode = () => {
    setIsColorModeOpen(!isColorModeOpen);
  };

  return (
    <ChakraProvider theme={theme}>
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow">
          <Home />
        </main>
        <Footer />
        <ColorModeSwitcher isOpen={isColorModeOpen} toggle={toggleColorMode} />
      </div>
    </ChakraProvider>
  );
};

export default App;
