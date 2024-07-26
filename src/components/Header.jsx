import { useState, useEffect } from 'react';
import { Box, Heading, IconButton, Link, useDisclosure, Drawer, DrawerBody, DrawerCloseButton, DrawerContent, DrawerHeader, DrawerOverlay, useBreakpointValue } from '@chakra-ui/react';
import { HamburgerIcon } from '@chakra-ui/icons';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const isMobile = useBreakpointValue({ base: true, md: false });

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header
      className={`p-4 fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-primary' : 'bg-whitesmoke'
      }`}
    >
      <div className="max-w-screen-lg mx-auto flex items-center justify-between">
        <Box as="a" href="/" display="flex" alignItems="center">
          <Heading as="h1" fontSize="xl" className="md:block text-primary">
            Desa Jayakerta
          </Heading>
        </Box>
        {isMobile ? (
          <>
            <IconButton
              aria-label="Toggle Menu"
              icon={<HamburgerIcon />}
              onClick={onOpen}
              variant="ghost"
              className="text-primary"
            />
            <Drawer
              isOpen={isOpen}
              onClose={onClose}
              placement="left"
              size="full"
            >
              <DrawerOverlay />
              <DrawerContent>
                <DrawerCloseButton />
                <DrawerHeader>Menu</DrawerHeader>
                <DrawerBody>
                  <Box as="nav" display="flex" flexDirection="column" alignItems="center">
                    <Link href="/" className="block py-2 px-4 hover:underline text-primary" onClick={onClose}>
                      Beranda
                    </Link>
                    <Link href="#about" className="block py-2 px-4 hover:underline text-primary" onClick={onClose}>
                      Tentang
                    </Link>
                    <Link href="#news" className="block py-2 px-4 hover:underline text-primary" onClick={onClose}>
                      Berita
                    </Link>
                    <Link href="#gallery" className="block py-2 px-4 hover:underline text-primary" onClick={onClose}>
                      Galeri
                    </Link>
                    <Link href="#contact" className="block py-2 px-4 hover:underline text-primary" onClick={onClose}>
                      Kontak
                    </Link>
                  </Box>
                </DrawerBody>
              </DrawerContent>
            </Drawer>
          </>
        ) : (
          <Box display="flex" alignItems="center">
            <Link href="/" className="mx-4 text-primary hover:underline">
              Beranda
            </Link>
            <Link href="#about" className="mx-4 text-primary hover:underline">
              Tentang
            </Link>
            <Link href="#news" className="mx-4 text-primary hover:underline">
              Berita
            </Link>
            <Link href="#gallery" className="mx-4 text-primary hover:underline">
              Galeri
            </Link>
            <Link href="#contact" className="mx-4 text-primary hover:underline">
              Kontak
            </Link>
          </Box>
        )}
      </div>
    </header>
  );
};

export default Header;
