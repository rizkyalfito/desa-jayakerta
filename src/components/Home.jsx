import Hero from './Hero';
import News from './News';
import Gallery from './Gallery';
import { useColorModeValue } from '@chakra-ui/react';
import PotensiDesa from './potensiDesa';
import Location from './Location';
import About from './About';
import Jumbotron from './Jumbotron';

const Home = () => {
  const bgColor = useColorModeValue('gray.50', 'gray.800');

  return (
    <>
      <Hero />
      <div className="container mx-auto p-4" style={{ backgroundColor: bgColor }}>
        <About/>
        <News />
        <Jumbotron/>
        <Gallery />
        <PotensiDesa />
        <Location/>
      </div>
    </>
  );
};

export default Home;
