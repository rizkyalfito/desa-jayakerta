import { Box, Grid, Image, Heading, Text, useColorModeValue } from '@chakra-ui/react';

import galeri1 from '../assets/galeri/galeri1.jpg';
import galeri2 from '../assets/galeri/galeri2.jpg';
import galeri3 from '../assets/galeri/galeri3.jpg';
import galeri4 from '../assets/galeri/galeri4.jpg';
import galeri5 from '../assets/galeri/galeri5.jpg';
import galeri6 from '../assets/galeri/galeri6.jpg';
import galeri7 from '../assets/galeri/galeri7.jpg';
import galeri8 from '../assets/galeri/galeri8.jpg';

const Gallery = () => {
  const imageUrls = [
    { src: galeri1, text: 'Kegiatan SD' },
    { src: galeri2, text: 'Kantor Desa' },
    { src: galeri3, text: 'Kegiatan MI' },
    { src: galeri4, text: 'Pemandangan Sawah di Desa Jayakerta' },
    { src: galeri5, text: 'Rapat Minggon Desa' },
    { src: galeri6, text: 'Senam' },
    { src: galeri7, text: 'Suasana Desa Jayakerta' },
    { src: galeri8, text: 'Masjid / Mushola' }
  ];

  const bgColor = useColorModeValue('gray.100', 'gray.700');
  const overlayColor = useColorModeValue('rgba(0, 0, 0, 0.6)', 'rgba(255, 255, 255, 0.6)');

  return (
    <section id='gallery' className="py-16" style={{ backgroundColor: bgColor }}>
      <Box p={8}>
        <Heading as="h2" size="xl" mb={8} textAlign="center">
          Galeri Desa Jayakerta
        </Heading>
        <Grid templateColumns="repeat(auto-fit, minmax(250px, 1fr))" gap={4}>
          {imageUrls.map((image, index) => (
            <Box
              key={index}
              position="relative"
              overflow="hidden"
              borderRadius="md"
              boxShadow="md"
              _hover={{
                '& .overlay': { opacity: 1 },
                '& .text': { opacity: 1 }
              }}
            >
              <Image
                src={image.src}
                alt={`Image ${index + 1}`}
                objectFit="cover"
                transition="transform 0.3s ease"
                _hover={{ transform: 'scale(1.1)' }}
                borderRadius="md"
                width="100%"
                height="100%"
              />
              <Box
                className="overlay"
                position="absolute"
                top="0"
                left="0"
                width="100%"
                height="100%"
                backgroundColor={overlayColor}
                opacity="0"
                transition="opacity 0.3s ease"
              />
              <Text
                className="text"
                position="absolute"
                bottom="0"
                left="0"
                width="100%"
                textAlign="center"
                color="white"
                fontSize="lg"
                p={2}
                opacity="0"
                transition="opacity 0.3s ease"
              >
                {image.text}
              </Text>
            </Box>
          ))}
        </Grid>
      </Box>
    </section>
  );
};

export default Gallery;
