import { Box, Heading } from '@chakra-ui/react';
import heroImage from '../assets/hero-image.jpg'; // Ganti dengan URL atau path gambar hero yang sesuai

const Hero = () => {
  return (
    <Box
      bgImage={`url(${heroImage})`}
      bgSize="cover"
      bgPosition="center"
      bgRepeat="no-repeat"
      h="400px"
      position="relative"
    >
      <Box
        bg="rgba(0,0,0,0.5)"
        pos="absolute"
        top="0"
        bottom="0"
        left="0"
        right="0"
        display="flex"
        alignItems="center"
        justifyContent="center"
        color="white"
        textAlign="center"
      >
        <Box>
          <Heading as="h1" fontSize="4xl" mb={4}>
            Selamat Datang di Desa Jayakerta
          </Heading>
          <Heading as="h2" fontSize="2xl">
            Informasi dan Berita Terkini
          </Heading>
        </Box>
      </Box>
    </Box>
  );
};

export default Hero;
