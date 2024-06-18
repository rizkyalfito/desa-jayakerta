import { useState, useEffect } from 'react';
import { Box, Heading } from '@chakra-ui/react';
import logo from '../assets/logo.jpg';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const scrollThreshold = 20;
      if (scrollPosition > scrollThreshold) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header
      className={`p-4 text-white text-center fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-green-800' : 'bg-transparent'
      }`}
    >
      <div className="max-w-screen-lg mx-auto flex items-center justify-between">
        <Box as="a" href="/" display="flex" alignItems="center">
          <img src={logo} alt="Logo Desa Jayakerta" className="h-10 mr-2" />
          <Heading as="h1" fontSize="xl">
            Desa Jayakerta
          </Heading>
        </Box>
        <nav className="hidden md:flex">
          <a href="#home" className="mx-4 hover:underline">
            Beranda
          </a>
          <a href="#about" className="mx-4 hover:underline">
            Tentang
          </a>
          <a href="#news" className="mx-4 hover:underline">
            Berita
          </a>
          <a href="#gallery" className="mx-4 hover:underline">
            Galeri
          </a>
          <a href="#contact" className="mx-4 hover:underline">
            Kontak
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
