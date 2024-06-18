import { Box, Grid, Image, Heading } from '@chakra-ui/react';

const Gallery = () => {
  const imageUrls = [
    'https://via.placeholder.com/600x400?text=Image+1',
    'https://via.placeholder.com/600x400?text=Image+2',
    'https://via.placeholder.com/600x400?text=Image+3',
    'https://via.placeholder.com/600x400?text=Image+4',
    'https://via.placeholder.com/600x400?text=Image+5',
    'https://via.placeholder.com/600x400?text=Image+6',
  ];

  return (
    <section id="gallery" className="py-16">
      <Box bg="gray.100" p={8}>
        <Heading as="h2" size="xl" mb={8} textAlign="center">
          Galeri Desa Jayakerta
        </Heading>
        <Grid templateColumns="repeat(auto-fit, minmax(250px, 1fr))" gap={4}>
          {imageUrls.map((url, index) => (
            <Image
              key={index}
              src={url}
              alt={`Image ${index + 1}`}
              objectFit="cover"
              borderRadius="md"
              boxShadow="md"
            />
          ))}
        </Grid>
      </Box>
    </section>
  );
};

export default Gallery;
