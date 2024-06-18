import { useState } from 'react';
import { Box, Heading, Text, Input, Textarea, Button, useToast } from '@chakra-ui/react';

const Contact = () => {
  const toast = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Kirim email atau lakukan sesuai kebutuhan aplikasi Anda
    console.log(formData);

    // Tampilkan pesan sukses menggunakan toast
    toast({
      title: 'Pesan Terkirim!',
      description: 'Terima kasih telah mengirim pesan.',
      status: 'success',
      duration: 5000,
      isClosable: true,
    });

    // Reset form setelah submit
    setFormData({
      name: '',
      email: '',
      message: '',
    });
  };

  return (
    <section id="contact" className="p-4 text-center" >
      <div className="container mx-auto max-w-screen-lg">
        <Heading as="h2" size="xl" mb={4}>
          Hubungi Kami
        </Heading>
        <Text mb={2}>
          Email: <a href="mailto:info@desajayakerta.id" className="text-blue-500 hover:underline">info@desajayakerta.id</a>
        </Text>
        <Text mb={4}>
          Phone: <a href="tel:+62123456789" className="text-blue-500 hover:underline">+62 123 456 789</a>
        </Text>

        <Box as="form" onSubmit={handleSubmit}>
          <Input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Nama Anda"
            mb={4}
            required
            size="md"
            variant="filled"
          />
          <Input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Email Anda"
            mb={4}
            required
            size="md"
            variant="filled"
          />
          <Textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Pesan Anda"
            mb={4}
            rows={6}
            required
            size="md"
            variant="filled"
          />
          <Button colorScheme="blue" type="submit" size="md">
            Kirim Pesan
          </Button>
        </Box>
      </div>
    </section>
  );
};

export default Contact;
