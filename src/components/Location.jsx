import { Box, Grid, Heading, Text, useColorModeValue } from '@chakra-ui/react';

const Location = () => {
  const mapUrl = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31738.463422652978!2d107.29153532064244!3d-6.08915465940223!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e6bd522cb4e47f3%3A0x77bdceecf1a9b150!2sJayakerta%2C%20Kec.%20Jayakerta%2C%20Karawang%2C%20Jawa%20Barat!5e0!3m2!1sid!2sid!4v1721921055564!5m2!1sid!2sid"

  
  const bgColor = useColorModeValue('gray.100', 'gray.700');
  const textColor = useColorModeValue('gray.900', 'white');

  return (
    <section id="location" className="py-16" style={{ backgroundColor: bgColor }}>
      <div className="container mx-auto px-4">
        <Heading as="h2" size="xl" mb={8} textAlign="center">
          Lokasi Desa Jayakerta
        </Heading>

        <Grid templateColumns={{ base: '1fr', md: '1fr 1fr' }} gap={6}>
          {/* Google Maps Embed */}
          <Box>
            <iframe
              src={mapUrl}
              width="100%"
              height="400"
              style={{ border: 0, borderRadius: '8px' }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Google Maps"
            ></iframe>
          </Box>

          {/* Description and Contact Information */}
          <Box>
            <Heading as="h3" size="lg" mb={4} color={textColor}>
              Sistem Informasi Geospasial
            </Heading>
            <Text mb={6} color={textColor}>
              Peta Digital memuat segala informasi berbasis lokasi. Peta Digital dapat digunakan sebagai alat bantu dalam perumusan kebijakan serta mendukung pelaksanaan kegiatan yang berkaitan dengan tata ruang kebumian. Kemudian dari ketersediaan data geospasial desa akan dapat dibangun analisis data spasial yang akan menghasilkan informasi.
            </Text>
            <Heading as="h4" size="md" mb={2} color={textColor}>
              Informasi Kontak
            </Heading>
            <Text color={textColor}>
              Desa Jayakerta, Kecamatan XYZ<br />
              Kabupaten ABC, Provinsi DEF<br />
              Telp: (123) 456-7890<br />
              Email: desa.jayakerta@example.com
            </Text>
          </Box>
        </Grid>
      </div>
    </section>
  );
};

export default Location;