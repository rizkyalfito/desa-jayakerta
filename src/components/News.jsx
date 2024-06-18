import { Box, Heading, Text } from '@chakra-ui/react';

const News = () => {
  const newsItems = [
    {
      title: 'Pembangunan Infrastruktur Baru',
      date: '10 Juni 2024',
      content:
        'Desa Jayakerta akan segera memulai pembangunan infrastruktur baru untuk meningkatkan kualitas hidup masyarakat.',
    },
    {
      title: 'Festival Budaya Tahunan',
      date: '15 Mei 2024',
      content:
        'Sambut festival budaya tahunan Desa Jayakerta yang akan diadakan pada bulan depan, datang dan ikuti berbagai acara menarik!',
    },
  ];

  return (
    <section id="news" className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <Heading as="h2" size="xl" mb={8} textAlign="center">
          Berita Terbaru
        </Heading>
        {newsItems.map((item, index) => (
          <Box key={index} mb={8}>
            <Heading as="h3" size="lg" mb={2}>
              {item.title}
            </Heading>
            <Text fontSize="sm" color="gray.500" mb={2}>
              {item.date}
            </Text>
            <Text>{item.content}</Text>
          </Box>
        ))}
      </div>
    </section>
  );
};

export default News;
