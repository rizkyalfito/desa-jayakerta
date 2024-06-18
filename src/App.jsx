import { ChakraProvider } from '@chakra-ui/react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Gallery from './components/Gallery';
import News from './components/News';
import Contact from './components/Contact';
import Footer from './components/Footer';
// import './App.css'; // Pastikan Anda memiliki file CSS yang diperlukan

const App = () => {
  return (
    <ChakraProvider>
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow">
          <Hero />
          <About />
          <Gallery />
          <News />
          <Contact />
        </main>
        <Footer />
      </div>
    </ChakraProvider>
  );
};

export default App;
