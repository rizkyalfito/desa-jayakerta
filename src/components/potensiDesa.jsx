import { useState } from 'react';
import {
  Box,
  Grid,
  Heading,
  Text,
  Image,
  Button,
  Icon
} from '@chakra-ui/react';
import { InfoOutlineIcon } from '@chakra-ui/icons';
import potensiData from '../data/potensiData.json'; // Pastikan path-nya sesuai

const PotensiDesa = () => {
  const [selectedCategory, setSelectedCategory] = useState('UMKM');

  const categories = [...new Set(potensiData.map(item => item.kategori))];
  const filteredData = potensiData.filter(item => item.kategori === selectedCategory);

  // Warna yang digunakan
  const cardBgColor = 'whitesmoke'; // Background card
  const cardBorderColor = '#12372A'; // Border color
  const textColor = '#12372A'; // Text color
  const contentTextColor = '#12372A'; // Content text color

  const isEmpty = filteredData.length === 0;

  return (
    <section id="potensi" className="py-16">
      <div className="container mx-auto px-4">
        <Heading as="h2" size="xl" mb={8} textAlign="center" color={textColor}>
          Potensi Desa Jayakerta
        </Heading>

        <Grid templateColumns="repeat(auto-fit, minmax(120px, 1fr))" gap={4} mb={8}>
          {categories.map((category, index) => (
            <Button
              key={index}
              onClick={() => setSelectedCategory(category)}
              variant={selectedCategory === category ? 'solid' : 'outline'}
              colorScheme="teal"
              borderColor={textColor}
              color={selectedCategory === category ? 'white' : textColor}
              bg={selectedCategory === category ? textColor : 'transparent'}
              _hover={{ bg: textColor, color: 'white' }}
              _focus={{ boxShadow: 'none' }}
            >
              {category}
            </Button>
          ))}
        </Grid>

        {isEmpty ? (
          <Box textAlign="center" p={5} borderWidth="1px" borderRadius="lg" bg={cardBgColor} borderColor={cardBorderColor}>
            <Icon as={InfoOutlineIcon} boxSize={10} color="gray.400" mb={4} />
            <Text fontSize="lg" color={textColor}>
              Potensi desa di bidang <strong>{selectedCategory}</strong> belum tersedia.
            </Text>
          </Box>
        ) : (
          <Grid templateColumns="repeat(auto-fit, minmax(300px, 1fr))" gap={6}>
            {filteredData.map(item => (
              <Box
                key={item.id}
                bg={cardBgColor}
                border="1px"
                borderColor={cardBorderColor}
                borderRadius="lg"
                shadow="lg"
                overflow="hidden"
                p={5}
              >
                <Image src={item.gambar} alt={item.judul} borderRadius="lg" mb={4} />
                <Heading as="h5" size="md" mb={2} fontWeight="bold" color={textColor}>
                  {item.judul}
                </Heading>
                <Text color={contentTextColor}>
                  {item.deskripsi}
                </Text>
              </Box>
            ))}
          </Grid>
        )}
      </div>
    </section>
  );
};

export default PotensiDesa;
