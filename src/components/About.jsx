import { Box, Heading, Text, Image, Grid, GridItem } from '@chakra-ui/react';

const aboutContent = [
  {
    title: 'Sejarah Desa Jayakerta',
    info: 'Desa Jayakerta adalah sebuah desa yang terletak di Karawang, Jawa Barat, Indonesia. Desa ini memiliki sejarah panjang yang kaya akan budaya dan tradisi.',
    image: "./assets/hero-image.jpg",
  },
  {
    title: 'Potensi Desa Jayakerta',
    info: 'Desa Jayakerta dikenal dengan produk kerajinan tangan dan produk lokal berkualitas tinggi, yang dipasarkan baik di dalam negeri maupun luar negeri.',
    image: "../assets/hero-image.jpg",
  },
  {
    title: 'Masyarakat Desa Jayakerta',
    info: 'Masyarakat Desa Jayakerta sangat menjunjung tinggi nilai-nilai gotong royong dan kebersamaan, yang tercermin dalam berbagai kegiatan sosial dan budaya yang rutin diadakan.',
    image: "../assets/hero-image.jpg",
  },
];

const About = () => {
  return (
    <section id="about" className="py-16 bg-whitesmoke">
      <div className="container mx-auto px-4">
        <Heading as="h2" size="xl" mb={8} textAlign="center" color="#12372A">
          Tentang Desa Jayakerta
        </Heading>
        <Grid templateColumns={{ base: '1fr', md: '1fr 1fr' }} gap={10}>
          {aboutContent.map((item, index) => (
            <GridItem
              key={index}
              display="flex"
              flexDirection="column"
              alignItems="center"
              justifyContent={item.title === 'Masyarakat Desa Jayakerta' ? 'center' : 'flex-start'}
              textAlign={item.title === 'Masyarakat Desa Jayakerta' ? 'center' : 'left'}
            >
              <Image
                src={item.image}
                alt={item.title}
                borderRadius="md"
                mb={4}
                boxSize="200px"
                objectFit="cover"
                border="1px"
                borderColor="#12372A"
              />
              <Box textAlign="center">
                <Heading as="h3" size="lg" mb={2} color="#12372A">
                  {item.title}
                </Heading>
                <Text color="#12372A">{item.info}</Text>
              </Box>
            </GridItem>
          ))}
        </Grid>
      </div>
    </section>
  );
};

export default About;
