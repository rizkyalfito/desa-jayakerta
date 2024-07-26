import { Box, Flex, Heading, Text, useColorModeValue } from '@chakra-ui/react';
import { useSpring, animated } from '@react-spring/web';

const Jumbotron = () => {
  // Define background color with transparency
  const bgColor = useColorModeValue('rgba(245, 245, 245, 0.9)', 'rgba(18, 55, 42, 0.9)');
  const textColor = useColorModeValue('#12372A', 'whitesmoke');

  // Animation values
  const propsPopulation = useSpring({ number: 50000, from: { number: 0 }, config: { duration: 2000 } });
  const propsArea = useSpring({ number: 120, from: { number: 0 }, config: { duration: 2000 } });
  const propsVillages = useSpring({ number: 12, from: { number: 0 }, config: { duration: 2000 } });

  return (
    <Box as="section" py={16} bg={bgColor} color={textColor} className="rounded-md">
      <div className="container mx-auto px-4">
        <Heading as="h2" size="xl" mb={8} textAlign="center" color={textColor}>
          Jayakerta dalam Fakta
        </Heading>
        <Flex direction={{ base: 'column', md: 'row' }} align="center" justify="space-between" spacing={6}>
          {/* Total Population */}
          <Box flex="1" textAlign="center">
            <Heading as="h3" size="lg" mb={2}>
              <animated.span>{propsPopulation.number.to(n => Math.floor(n))}</animated.span>
            </Heading>
            <Text fontSize="lg">Jumlah Penduduk</Text>
          </Box>

          {/* Area Size */}
          <Box flex="1" textAlign="center">
            <Heading as="h3" size="lg" mb={2}>
              <animated.span>{propsArea.number.to(n => `${Math.floor(n)} km²`)}</animated.span>
            </Heading>
            <Text fontSize="lg">Luas Wilayah</Text>
          </Box>

          {/* Additional Data - Jumlah Desa */}
          <Box flex="1" textAlign="center">
            <Heading as="h3" size="lg" mb={2}>
              <animated.span>{propsVillages.number.to(n => Math.floor(n))}</animated.span>
            </Heading>
            <Text fontSize="lg">Jumlah Desa</Text>
          </Box>
        </Flex>
      </div>
    </Box>
  );
};

export default Jumbotron;
