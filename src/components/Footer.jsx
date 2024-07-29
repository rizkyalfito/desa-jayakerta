import { Box, Grid, Text, Link, Stack, useColorModeValue, Center } from '@chakra-ui/react';
import { FaInstagram,FaYoutube } from 'react-icons/fa';

const Footer = () => {
  const textColor = useColorModeValue('whitesmoke', 'gray.800');
  const bgColor = useColorModeValue('gray.800', 'white');
  
  return (
    <Box as="footer" py={8} bg={bgColor} color={textColor}>
      <Grid templateColumns={{ base: '1fr', md: '1fr 1fr' }} gap={6} px={4} maxW="1200px" mx="auto">
        {/* Village Information */}
        <Center>
          <Box>
            <Text fontWeight="bold" mb={2} textAlign="center">
              Informasi Desa
            </Text>
            <Text mb={2} textAlign="justify">
              Desa Jayakerta, Kecamatan Jayakerta<br />
              Kabupaten Karawang, Provinsi Jawa Barat<br />
            </Text>
            <Text textAlign="center">
              © 2024 Desa Jayakerta. All rights reserved.
            </Text>
          </Box>
        </Center>

        {/* Social Media Links */}
        <Box>
          <Text fontWeight="bold" mb={2} textAlign="center">
            Ikuti Kami
          </Text>
          <Stack direction="row" spacing={4} justify="center">
            <Link href="https://instagram.com/kkndesajayakerta2024" isExternal>
              <FaInstagram size="24px" />
            </Link>
            <Link href="https://www.youtube.com/@KKNDesaJayakerta2024" isExternal>
              <FaYoutube size="24px" />
            </Link>
          </Stack>
        </Box>
      </Grid>
    </Box>
  );
};

export default Footer;
