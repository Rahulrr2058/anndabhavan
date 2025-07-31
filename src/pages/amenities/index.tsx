import { Card, Text, Title, Container, Grid, Group, Stack, Badge } from '@mantine/core';
import { IconWifi, IconCar, IconCoffee, IconLeaf, IconBook, IconSun } from '@tabler/icons-react';
import Header from "@/components/modules/header";
import Footer from "@/components/modules/footer";


const AmenitiesPage = () => {
    const amenities = [
        {
            title: 'Meditation Gardens',
            description: 'Peaceful outdoor spaces with walking paths, water features, and quiet seating areas for contemplation.',
            image: 'https://images.pexels.com/photos/1051838/pexels-photo-1051838.jpeg?auto=compress&cs=tinysrgb&w=600',
            icon: <IconLeaf size={24} />,
            features: ['Zen garden', 'Water fountains', 'Meditation benches', 'Native plants'],
        },
        {
            title: 'Library & Reading Room',
            description: 'Extensive collection of wellness, spirituality, and self-development books in a quiet environment.',
            image: 'https://images.pexels.com/photos/1370295/pexels-photo-1370295.jpeg?auto=compress&cs=tinysrgb&w=600',
            icon: <IconBook size={24} />,
            features: ['Wellness books', 'Comfortable seating', 'Natural lighting', 'Study areas'],
        },
        {
            title: 'Organic Café',
            description: 'Healthy, organic meals and beverages prepared according to Ayurvedic principles.',
            image: 'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=600',
            icon: <IconCoffee size={24} />,
            features: ['Organic ingredients', 'Vegetarian menu', 'Herbal teas', 'Fresh juices'],
        },
        {
            title: 'Relaxation Lounges',
            description: 'Comfortable spaces for rest and reflection between treatments and sessions.',
            image: 'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=600',
            icon: <IconSun size={24} />,
            features: ['Comfortable seating', 'Soft lighting', 'Calming music', 'Temperature control'],
        },
        {
            title: 'Parking & Transportation',
            description: 'Convenient parking facilities and shuttle service from nearby transportation hubs.',
            image: 'https://images.pexels.com/photos/164634/pexels-photo-164634.jpeg?auto=compress&cs=tinysrgb&w=600',
            icon: <IconCar size={24} />,
            features: ['Free parking', 'Shuttle service', 'Bicycle storage', 'EV charging'],
        },
        {
            title: 'WiFi & Connectivity',
            description: 'High-speed internet access throughout the facility for your convenience.',
            image: 'https://images.pexels.com/photos/1181467/pexels-photo-1181467.jpeg?auto=compress&cs=tinysrgb&w=600',
            icon: <IconWifi size={24} />,
            features: ['High-speed WiFi', 'Charging stations', 'Work areas', 'Digital detox zones'],
        },
    ];

    const facilitiesInfo = [
        {
            title: 'Operating Hours',
            details: [
                'Monday - Friday: 6:00 AM - 9:00 PM',
                'Saturday: 7:00 AM - 8:00 PM',
                'Sunday: 8:00 AM - 6:00 PM',
                'Holiday hours may vary',
            ],
        },
        {
            title: 'Accessibility',
            details: [
                'Wheelchair accessible entrances',
                'Accessible restrooms',
                'Elevator access to all floors',
                'Reserved parking spaces',
            ],
        },
        {
            title: 'Safety & Security',
            details: [
                '24/7 security monitoring',
                'Emergency response systems',
                'First aid stations',
                'Secure locker facilities',
            ],
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
                            Amenities
                        </Title>
                        <Text size="xl" c="gray.7" className="leading-relaxed">
                            Experience comfort and convenience in our thoughtfully designed facilities.
                            Every amenity is crafted to enhance your wellness journey and provide a
                            seamless, peaceful experience.
                        </Text>
                    </div>
                </Container>
            </section>

            {/* Amenities Grid */}
            <section className="py-20">
                <Container size="lg">
                    <Grid>
                        {amenities.map((amenity, index) => (
                            <Grid.Col key={index} span={{ base: 12, md: 6, lg: 4 }}>
                                <Card
                                    shadow="md"
                                    padding="xl"
                                    className="h-full hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                                >
                                    <div
                                        className="h-40 bg-cover bg-center rounded-lg mb-4"
                                        style={{ backgroundImage: `url(${amenity.image})` }}
                                    ></div>
                                    <Group mb="md">
                                        <div className="text-emerald-500">
                                            {amenity.icon}
                                        </div>
                                        <Title order={3} size="1.25rem">
                                            {amenity.title}
                                        </Title>
                                    </Group>
                                    <Text c="gray.7" mb="md" className="leading-relaxed">
                                        {amenity.description}
                                    </Text>
                                    <Stack gap="xs">
                                        {amenity.features.map((feature, idx) => (
                                            <Group key={idx} gap="xs">
                                                <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
                                                <Text size="sm" c="gray.6">
                                                    {feature}
                                                </Text>
                                            </Group>
                                        ))}
                                    </Stack>
                                </Card>
                            </Grid.Col>
                        ))}
                    </Grid>
                </Container>
            </section>

            {/* Facilities Information */}
            <section className="py-20 bg-gray-50">
                <Container size="lg">
                    <Title order={2} size="2.5rem" mb="xl" ta="center" c="dark">
                        Facility Information
                    </Title>
                    <Grid>
                        {facilitiesInfo.map((info, index) => (
                            <Grid.Col key={index} span={{ base: 12, md: 4 }}>
                                <Card shadow="sm" padding="xl" className="h-full">
                                    <Title order={3} size="1.5rem" mb="lg" c="emerald.6">
                                        {info.title}
                                    </Title>
                                    <Stack gap="md">
                                        {info.details.map((detail, idx) => (
                                            <Group key={idx} gap="xs" align="flex-start">
                                                <div className="w-2 h-2 bg-emerald-500 rounded-full mt-2 flex-shrink-0"></div>
                                                <Text c="gray.7">
                                                    {detail}
                                                </Text>
                                            </Group>
                                        ))}
                                    </Stack>
                                </Card>
                            </Grid.Col>
                        ))}
                    </Grid>
                </Container>
            </section>

            {/* Special Features */}
            <section className="py-20">
                <Container size="lg">
                    <div className="max-w-4xl mx-auto">
                        <Title order={2} size="2.5rem" mb="xl" ta="center" c="dark">
                            Special Features
                        </Title>
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                            <div>
                                <Stack gap="lg">
                                    <div>
                                        <Title order={3} size="1.5rem" mb="md" c="emerald.6">
                                            Eco-Friendly Design
                                        </Title>
                                        <Text c="gray.7" className="leading-relaxed">
                                            Our facility is built with sustainable materials and incorporates
                                            green building practices, including solar panels, rainwater harvesting,
                                            and natural ventilation systems.
                                        </Text>
                                    </div>
                                    <div>
                                        <Title order={3} size="1.5rem" mb="md" c="emerald.6">
                                            Healing Environment
                                        </Title>
                                        <Text c="gray.7" className="leading-relaxed">
                                            Every space is designed according to Vastu principles and incorporates
                                            elements of nature, natural lighting, and calming colors to promote
                                            healing and well-being.
                                        </Text>
                                    </div>
                                    <div>
                                        <Title order={3} size="1.5rem" mb="md" c="emerald.6">
                                            Technology Integration
                                        </Title>
                                        <Text c="gray.7" className="leading-relaxed">
                                            Modern amenities seamlessly blend with traditional practices,
                                            including sound systems for meditation, air purification systems,
                                            and climate control for optimal comfort.
                                        </Text>
                                    </div>
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

export default AmenitiesPage;