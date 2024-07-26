import { useState, useEffect, useRef } from 'react';
import {
  Box,
  Heading,
  Text,
  Link,
  Image,
  Button,
  useColorModeValue,
  IconButton,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  useDisclosure,
} from '@chakra-ui/react';
import { ChevronLeftIcon, ChevronRightIcon } from '@chakra-ui/icons';
import newsData from '../data/newsData.json'; // Pastikan path-nya sesuai

// Impor gambar
import heroImage from '../assets/hero-image.jpg'; // Sesuaikan path dengan lokasi gambar

const News = () => {
  const [selectedItem, setSelectedItem] = useState(null);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const containerRef = useRef(null);

  const [newsItems, setNewsItems] = useState([]);

  useEffect(() => {
    // Mengganti path gambar dengan gambar yang diimpor
    const updatedNewsItems = newsData.map(item => ({
      ...item,
      image: heroImage, // Ganti dengan gambar yang sesuai
    }));
    setNewsItems(updatedNewsItems);
  }, []);

  const bgColor = useColorModeValue('gray.100', 'gray.700');
  const cardBgColor = useColorModeValue('white', 'gray.800');
  const cardBorderColor = useColorModeValue('gray.200', 'gray.700');
  const textColor = useColorModeValue('gray.900', 'white');
  const contentTextColor = useColorModeValue('gray.700', 'gray.400');

  const handleCardClick = (item) => {
    setSelectedItem(item);
    onOpen();
  };

  const scroll = (direction) => {
    if (containerRef.current) {
      const container = containerRef.current;
      const cardWidth = container.firstChild.offsetWidth;
      const scrollAmount = direction === 'left' ? -cardWidth : cardWidth;
      container.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <section id="news" className="py-16" style={{ backgroundColor: bgColor }}>
      <div className="container mx-auto px-4">
        <Heading as="h2" size="xl" mb={8} textAlign="center">
          Kegiatan Terbaru
        </Heading>
        <Box position="relative">
          <IconButton
            aria-label="Previous"
            icon={<ChevronLeftIcon />}
            position="absolute"
            left="0"
            top="50%"
            transform="translateY(-50%)"
            zIndex="10"
            onClick={() => scroll('left')}
          />
          <IconButton
            aria-label="Next"
            icon={<ChevronRightIcon />}
            position="absolute"
            right="0"
            top="50%"
            transform="translateY(-50%)"
            zIndex="10"
            onClick={() => scroll('right')}
          />
          <Box
            ref={containerRef}
            id="news-container"
            display="flex"
            overflowX="auto"
            padding="0 10px"
            scrollBehavior="smooth"
            sx={{
              '&::-webkit-scrollbar': {
                display: 'none',
              },
              msOverflowStyle: 'none',
              scrollbarWidth: 'none',
            }}
          >
            {newsItems.map((item, index) => (
              <Box
                key={index}
                maxW="sm"
                bg={cardBgColor}
                border="1px"
                borderColor={cardBorderColor}
                borderRadius="lg"
                shadow="lg"
                overflow="hidden"
                margin="10px"
                flex="0 0 auto"
                cursor="pointer"
                onClick={() => handleCardClick(item)}
              >
                <Link>
                  <Image src={item.image} alt={item.title} borderTopRadius="lg" />
                </Link>
                <Box p={5}>
                  <Link>
                    <Heading as="h5" size="md" mb={2} fontWeight="bold" color={textColor}>
                      {item.title}
                    </Heading>
                  </Link>
                  <Text fontSize="sm" color="gray.500" mb={2}>
                    {item.date}
                  </Text>
                  <Text mb={3} color={contentTextColor}>
                    {item.content.substring(0, 100)}...
                  </Text>
                  <Button
                    as="a"
                    size="sm"
                    colorScheme="blue"
                    variant="solid"
                    rightIcon={
                      <svg
                        className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 14 10"
                      >
                        <path
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round" // Properti yang benar
                          strokeWidth="2" // Properti yang benar
                          d="M1 5h12m0 0L9 1m4 4L9 9"
                        />
                      </svg>
                    }
                  >
                    Selengkapnya
                  </Button>
                </Box>
              </Box>
            ))}
          </Box>
        </Box>

        {/* Modal Component */}
        <Modal isOpen={isOpen} onClose={onClose} size={{ base: 'xs', md: 'lg', lg: '2xl' }}>
          <ModalOverlay />
          <ModalContent maxW="lg" maxH="90vh" overflow="hidden">
            <ModalHeader>{selectedItem?.title}</ModalHeader>
            <ModalCloseButton />
            <ModalBody overflowY="auto">
              <Box display="flex" justifyContent="center" mb={4}>
                <Image
                  src={selectedItem?.image}
                  alt={selectedItem?.title}
                  borderRadius="md"
                  maxW="100%" // Gambar memenuhi lebar modal
                  maxH="300px" // Membatasi tinggi gambar
                  objectFit="cover" // Memastikan gambar mempertahankan rasio aspek
                />
              </Box>
              <Text fontSize="lg" color={contentTextColor}>
                {selectedItem?.content}
              </Text>
            </ModalBody>
            <ModalFooter>
              <Button colorScheme="blue" onClick={onClose}>
                Close
              </Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </div>
    </section>
  );
};

export default News;
