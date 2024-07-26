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

  const bgColor = useColorModeValue('whitesmoke', 'gray.800');
  const cardBgColor = 'whitesmoke';
  const cardShadow = '0 4px 6px rgba(0, 0, 0, 0.1)'; // Shadow untuk card
  const textColor = '#12372A';
  const contentTextColor = '#12372A';

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
        <Heading as="h2" size="xl" mb={8} textAlign="center" color={textColor}>
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
                shadow={cardShadow}
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
                  <Text fontSize="sm" color={contentTextColor} mb={2}>
                    {item.date}
                  </Text>
                  <Text mb={3} color={contentTextColor} textAlign="justify">
                    {item.content.substring(0, 100)}...
                  </Text>
                  <Button
                    as="a"
                    size="sm"
                    colorScheme="teal"
                    bg="#12372A"
                    color="whitesmoke"
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
                          strokeLinejoin="round"
                          strokeWidth="2"
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
          <ModalContent bg={cardBgColor} color={textColor}>
            <ModalHeader>{selectedItem?.title}</ModalHeader>
            <ModalCloseButton />
            <ModalBody overflowY="auto" textAlign="justify">
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
              <Button colorScheme="teal" bg="#12372A" color="whitesmoke" onClick={onClose}>
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
