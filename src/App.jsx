import { ChakraProvider, extendTheme } from '@chakra-ui/react';
import { mode } from '@chakra-ui/theme-tools';
import Header from './components/Header';
import Home from './components/Home';
import Footer from './components/Footer';

const theme = extendTheme({
  styles: {
    global: (props) => ({
      body: {
        bg: mode('white', 'gray.800')(props),
      },
    }),
  },
});

const App = () => {
 
  return (
    <ChakraProvider theme={theme}>
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow">
          <Home />
        </main>
        <Footer />
      </div>
    </ChakraProvider>
  );
};

export default App;
