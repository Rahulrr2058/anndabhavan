import { Card, Text, Title, Container, Grid, Stack, Avatar, Group } from '@mantine/core';
import Header from "@/components/modules/header";
import Footer from "@/components/modules/footer";



const AboutPage = () => {
    const services = [
        {
            title: 'Our Teaching',
            description: 'We offer comprehensive yoga and meditation classes for all levels, from beginners to advanced practitioners. Our experienced instructors guide you through traditional techniques adapted for modern life.',
        },
        {
            title: 'Yoga & Meditation',
            description: 'Ancient practices combined with contemporary understanding to help you achieve physical flexibility, mental clarity, and spiritual growth in a supportive environment.',
        },
        {
            title: 'Cuisine & Nutrition',
            description: 'Nourishing vegetarian meals prepared with organic ingredients, following Ayurvedic principles to support your wellness journey and complement your healing process.',
        },
        {
            title: 'Our Leisure',
            description: 'Peaceful spaces designed for relaxation and reflection, including meditation gardens, quiet reading areas, and serene walking paths through our natural surroundings.',
        },
        {
            title: 'Massage Therapy',
            description: 'Traditional and therapeutic massage techniques including Ayurvedic treatments, deep tissue work, and relaxation therapies to restore balance and vitality.',
        },
        {
            title: 'Meet Our Team',
            description: 'Our dedicated practitioners bring years of experience and genuine care to every session, creating a supportive community focused on your personal growth and healing.',
        },
    ];

    const teamMembers = [
        {
            name: 'Dr. Anjali Mehta',
            role: 'Founder & Director',
            image: 'https://images.pexels.com/photos/5327585/pexels-photo-5327585.jpeg?auto=compress&cs=tinysrgb&w=200',
            description: 'Ayurveda practitioner with 20+ years of experience',
        },
        {
            name: 'Swami Ramananda',
            role: 'Meditation Master',
            image: 'https://images.pexels.com/photos/8436730/pexels-photo-8436730.jpeg?auto=compress&cs=tinysrgb&w=200',
            description: 'Traditional yoga and meditation teacher',
        },
        {
            name: 'Dr. Kavitha Nair',
            role: 'Wellness Consultant',
            image: 'https://images.pexels.com/photos/3823488/pexels-photo-3823488.jpeg?auto=compress&cs=tinysrgb&w=200',
            description: 'Holistic health and nutrition specialist',
        },
    ];

    return (
        <div className="min-h-screen bg-white">
            <Header />

            {/* Hero Section */}
            <section className="pt-24 pb-16 bg-gradient-to-br from-emerald-50 to-teal-50">
                <Container size="lg">
                    <div className="text-center max-w-4xl mx-auto">
                        <Title order={1} size="3.5rem" mb="xl" c="dark">
                            About Ananda Bhavan
                        </Title>
                        <Text size="xl" c="gray.7" className="leading-relaxed">
                            Ananda Bhavan is a sanctuary for wellness, meditation, and holistic healing.
                            We are dedicated to offering authentic practices in a peaceful environment,
                            helping individuals find balance and inner peace through ancient wisdom and modern understanding.
                        </Text>
                    </div>
                </Container>
            </section>

            {/* Our Services */}
            <section className="py-20">
                <Container size="lg">
                    <Title order={2} size="2.5rem" mb="xl" ta="center" c="dark">
                        Our Services
                    </Title>
                    <Grid>
                        {services.map((service, index) => (
                            <Grid.Col key={index} span={{ base: 12, md: 6 }}>
                                <Card
                                    shadow="sm"
                                    padding="xl"
                                    className="h-full hover:shadow-md transition-shadow duration-300"
                                >
                                    <Title order={3} size="1.5rem" mb="md" c="emerald.6">
                                        {service.title}
                                    </Title>
                                    <Text c="gray.7" className="leading-relaxed">
                                        {service.description}
                                    </Text>
                                </Card>
                            </Grid.Col>
                        ))}
                    </Grid>
                </Container>
            </section>

            {/* Meet Our Team */}
            <section className="py-20 bg-gray-50">
                <Container size="lg">
                    <Title order={2} size="2.5rem" mb="xl" ta="center" c="dark">
                        Meet Our Team
                    </Title>
                    <Grid>
                        {teamMembers.map((member, index) => (
                            <Grid.Col key={index} span={{ base: 12, md: 4 }}>
                                <Card shadow="md" padding="xl" className="text-center h-full">
                                    <Avatar
                                        src={member.image}
                                        size={120}
                                        radius="50%"
                                        mx="auto"
                                        mb="lg"
                                    />
                                    <Title order={4} size="1.25rem" mb="xs">
                                        {member.name}
                                    </Title>
                                    <Text c="emerald.6" fw={500} mb="md">
                                        {member.role}
                                    </Text>
                                    <Text c="gray.7" size="sm">
                                        {member.description}
                                    </Text>
                                </Card>
                            </Grid.Col>
                        ))}
                    </Grid>
                </Container>
            </section>

            {/* Our Philosophy */}
            <section className="py-20">
                <Container size="lg">
                    <div className="max-w-4xl mx-auto">
                        <Title order={2} size="2.5rem" mb="xl" ta="center" c="dark">
                            Our Philosophy
                        </Title>
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                            <div>
                                <Stack gap="lg">
                                    <Text size="lg" c="gray.7" className="leading-relaxed">
                                        We believe that wellness is not just the absence of illness, but a state of
                                        complete physical, mental, and spiritual well-being. Our approach integrates
                                        time-tested practices with modern insights to create a holistic healing experience.
                                    </Text>
                                    <Text size="lg" c="gray.7" className="leading-relaxed">
                                        Every individual is unique, and so is their path to wellness. We honor this
                                        diversity by offering personalized guidance and creating a supportive community
                                        where everyone can flourish at their own pace.
                                    </Text>
                                    <Text size="lg" c="gray.7" className="leading-relaxed">
                                        Our commitment extends beyond individual healing to fostering a more conscious
                                        and compassionate world, one person at a time.
                                    </Text>
                                </Stack>
                            </div>
                            <div
                                className="h-96 bg-cover bg-center rounded-lg"
                                style={{
                                    backgroundImage: 'url(https://images.pexels.com/photos/3822622/pexels-photo-3822622.jpeg?auto=compress&cs=tinysrgb&w=600)',
                                }}
                            ></div>
                        </div>
                    </div>
                </Container>
            </section>

            <Footer />
        </div>
    );
};

export default AboutPage;