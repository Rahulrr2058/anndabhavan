import {Button, Card, Text, Title, Group, Stack, Avatar, Container, Grid, Image, BackgroundImage} from '@mantine/core';
import { IconLeaf, IconHeart, IconSun } from '@tabler/icons-react';
import Header from "@/components/modules/header";
import Footer from "@/components/modules/footer";
import Link from 'next/link';

const HomePage = () => {
  const services = [
    {
      title: 'Yoga & Meditation',
      description: 'Ancient practices for modern wellness, helping you find balance and inner peace.',
      image: 'https://images.pexels.com/photos/3822622/pexels-photo-3822622.jpeg?auto=compress&cs=tinysrgb&w=400',
      icon: <IconLeaf size={24} />,
    },
    {
      title: 'Ayurveda',
      description: 'Traditional healing methods tailored to your unique constitution and needs.',
      image: 'https://images.pexels.com/photos/3997993/pexels-photo-3997993.jpeg?auto=compress&cs=tinysrgb&w=400',
      icon: <IconHeart size={24} />,
    },
    {
      title: 'Holistic Healing',
      description: 'Comprehensive wellness approaches addressing mind, body, and spirit.',
      image: 'https://images.pexels.com/photos/3997991/pexels-photo-3997991.jpeg?auto=compress&cs=tinysrgb&w=400',
      icon: <IconSun size={24} />,
    },
  ];

  const therapists = [
    {
      name: 'Dr. Priya Sharma',
      role: 'Ayurveda Specialist',
      image: 'https://images.pexels.com/photos/5327585/pexels-photo-5327585.jpeg?auto=compress&cs=tinysrgb&w=200',
    },
    {
      name: 'Ravi Patel',
      role: 'Yoga Master',
      image: 'https://images.pexels.com/photos/8436730/pexels-photo-8436730.jpeg?auto=compress&cs=tinysrgb&w=200',
    },
    {
      name: 'Maya Krishnan',
      role: 'Meditation Guide',
      image: 'https://images.pexels.com/photos/3823488/pexels-photo-3823488.jpeg?auto=compress&cs=tinysrgb&w=200',
    },
  ];

  return (
      <div className="min-h-screen bg-white">
        <Header />

        {/* Hero Section */}
        <section className="relative h-screen flex items-center justify-center overflow-hidden">
          <div
              className="absolute inset-0 bg-cover bg-center bg-no-repeat"
              style={{
                backgroundImage: 'url(https://images.pexels.com/photos/1051838/pexels-photo-1051838.jpeg?auto=compress&cs=tinysrgb&w=1920)',
              }}
          >
            {/*<div className="absolute inset-0 bg-black bg-opacity-40"></div>*/}
          </div>
          {/*<Image  src={"herosection.webp"}/>*/}
          {/*<BackgroundImage src={"/herosection.webp"}/>*/}

          <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
            <Title order={1} size="4rem" fw={300} mb="xl" className="leading-tight">
              Find Your Inner Peace
            </Title>
            <Text size="xl" mb="xl" className="max-w-2xl mx-auto leading-relaxed">
              Discover tranquility through ancient wisdom and modern wellness practices
              in our serene mountain sanctuary.
            </Text>
            <Button
                color="#17CF91"
                component={Link}
                href="/about"
                size="lg"
                // className="bg-emerald-500 hover:bg-emerald-600 text-white px-8 py-3 rounded-full transition-all duration-300 hover:shadow-xl hover:scale-105"
            >
              Begin Your Journey
            </Button>
          </div>
        </section>

        {/* Philosophy Section */}
        <section className="py-20 bg-gray-50">
          <Container size="lg">
            <div className="max-w-3xl mx-auto text-center">
              <Title order={2} size="2.5rem" mb="xl" c="dark">
                Our Philosophy
              </Title>
              <Text size="lg" c="gray.7" className="leading-relaxed">
                At Ananda Bhavan, we believe that true wellness comes from the harmony of mind, body, and spirit.
                Our approach integrates ancient wisdom with modern understanding, creating a sanctuary where
                healing happens naturally and transformation becomes possible.
              </Text>
            </div>
          </Container>
        </section>

        {/* Featured Services */}
        <section className="py-20">
          <Container size="lg">
            <Title order={2} size="2.5rem" mb="xl" ta="center" c="dark">
              Featured Services
            </Title>
            <Grid>
              {services.map((service, index) => (
                  <Grid.Col key={index} span={{ base: 12, md: 4 }}>
                    <Card
                        shadow="md"
                        padding="xl"
                        className="h-full hover:shadow-xl transition-all duration-300 hover:-translate-y-2 cursor-pointer group"
                    >
                      <div
                          className="h-48 bg-cover bg-center rounded-lg mb-4"
                          style={{ backgroundImage: `url(${service.image})` }}
                      ></div>
                      <Group mb="md">
                        <div className="text-emerald-500 group-hover:text-emerald-600 transition-colors">
                          {service.icon}
                        </div>
                        <Title order={3} size="1.5rem">
                          {service.title}
                        </Title>
                      </Group>
                      <Text c="gray.7" className="leading-relaxed">
                        {service.description}
                      </Text>
                    </Card>
                  </Grid.Col>
              ))}
            </Grid>
          </Container>
        </section>

        {/* Meet the Therapists */}
        <section className="py-20 bg-gray-50">
          <Container size="lg">
            <Title order={2} size="2.5rem" mb="xl" ta="center" c="dark">
              Meet Our Therapists
            </Title>
            <Grid>
              {therapists.map((therapist, index) => (
                  <Grid.Col key={index} span={{ base: 12, sm: 6, md: 4 }}>
                    <div className="text-center group">
                      <Avatar
                          src={therapist.image}
                          size={120}
                          radius="50%"
                          mx="auto"
                          mb="md"
                          className="group-hover:scale-105 transition-transform duration-300"
                      />
                      <Title order={4} size="1.25rem" mb="xs">
                        {therapist.name}
                      </Title>
                      <Text c="emerald.6" fw={500}>
                        {therapist.role}
                      </Text>
                    </div>
                  </Grid.Col>
              ))}
            </Grid>
          </Container>
        </section>

        {/* Call to Action */}
        <section className="py-20 bg-emerald-500">
          <Container size="lg">
            <div className="text-center text-white">
              <Title order={2} size="2.5rem" mb="xl">
                Ready to Begin Your Journey?
              </Title>
              <Text size="xl" mb="xl" className=" text-center mb-5" >
                Take the first step towards wellness and inner peace.
                Our experienced team is here to guide you every step of the way.
              </Text>
              <Button

                  component={Link}
                  href="/contact"
                  size="lg"
                  variant="white"
                  className="text-emerald-600 hover:bg-gray-100 px-8 py-3 rounded-full transition-all duration-300 hover:shadow-xl hover:scale-105"
              >
                Start Today
              </Button>
            </div>
          </Container>
        </section>

        {/* Contact Section */}
        <section className="py-20">
          <Container size="lg">
            <Title order={2} size="2.5rem" mb="xl" ta="center" c="dark">
              Contact Us
            </Title>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div>
                <Stack gap="lg">
                  <div>
                    <Text fw={600} mb="xs">Visit Us</Text>
                    <Text c="gray.7">123 Wellness Street, Peaceful Valley</Text>
                  </div>
                  <div>
                    <Text fw={600} mb="xs">Call Us</Text>
                    <Text c="gray.7">+1 (555) 123-4567</Text>
                  </div>
                  <div>
                    <Text fw={600} mb="xs">Email Us</Text>
                    <Text c="gray.7">info@anandabhavan.com</Text>
                  </div>
                </Stack>
              </div>
              <div className="h-64 bg-gray-200 rounded-lg flex items-center justify-center">
                <Text c="gray.6">Interactive Map Coming Soon</Text>
              </div>
            </div>
          </Container>
        </section>

        <Footer />
      </div>
  );
};

export default HomePage;