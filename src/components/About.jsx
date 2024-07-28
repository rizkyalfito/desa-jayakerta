import { Box, Heading, Text, Image, Grid, GridItem } from '@chakra-ui/react';

import sejarahImage from '../assets/sejarah.jpg';
import masyarakatImage from '../assets/masyarakat.jpg';

const aboutContent = [
  {
    title: 'TentangDesa Jayakerta',
    info: 'Desa Jayakerta adalah sebuah desa yang terletak di Kabupaten Karawang, Provinsi Jawa Barat, Indonesia. Terletak di wilayah yang subur, Desa Jayakerta dikenal sebagai pusat pertanian dengan hamparan sawah yang luas dan hijau.',
    image: sejarahImage,
  },
  {
    title: 'Masyarakat Desa Jayakerta',
    info: 'Dengan mata pencaharian utama masyarakat adalah pertanian, serta Sumber Daya Manusia yang jika dibina dan diarahkan dengan baik akan menjadi objek pembangunan. Kecamatan Jayakerta memiliki beberapa produk unggulan, di antaranya produk padi dari lahan sawah yang merupakan sektor dominan.',
    image: masyarakatImage,
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
