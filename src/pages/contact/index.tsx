import { useState } from 'react';
import { Button, Card, Text, Title, Container, Grid, Group, Stack, TextInput, Textarea, Select } from '@mantine/core';

import { IconMapPin, IconPhone, IconMail, IconClock } from '@tabler/icons-react';
import Header from "@/components/modules/header";
import Footer from "@/components/modules/footer";


const ContactPage = () => {
    const [isSubmitting, setIsSubmitting] = useState(false);

    // const form = useForm({
    //   initialValues: {
    //     name: '',
    //     email: '',
    //     phone: '',
    //     service: '',
    //     message: '',
    //   },
    //   validate: {
    //     name: (value) => (value.length < 2 ? 'Name must have at least 2 letters' : null),
    //     email: (value) => (/^\S+@\S+$/.test(value) ? null : 'Invalid email'),
    //     message: (value) => (value.length < 10 ? 'Message must be at least 10 characters' : null),
    //   },
    // });
    //
    // const handleSubmit = async (values: typeof form.values) => {
    //   setIsSubmitting(true);
    //
    //   // Simulate form submission
    //   await new Promise(resolve => setTimeout(resolve, 1000));
    //
    //   // notifications.show({
    //   //   title: 'Message Sent!',
    //   //   message: 'Thank you for contacting us. We will get back to you soon.',
    //   //   color: 'green',
    //   // });
    //
    //   // form.reset();
    //   setIsSubmitting(false);
    // };

    const contactInfo = [
        {
            icon: <IconMapPin size={24} />,
            title: 'Visit Us',
            details: ['123 Wellness Street', 'Peaceful Valley, CA 90210', 'United States'],
        },
        {
            icon: <IconPhone size={24} />,
            title: 'Call Us',
            details: ['+1 (555) 123-4567', '+1 (555) 123-4568', 'Emergency: +1 (555) 911-0000'],
        },
        {
            icon: <IconMail size={24} />,
            title: 'Email Us',
            details: ['info@anandabhavan.com', 'treatments@anandabhavan.com', 'support@anandabhavan.com'],
        },
        {
            icon: <IconClock size={24} />,
            title: 'Opening Hours',
            details: ['Mon-Fri: 6:00 AM - 9:00 PM', 'Saturday: 7:00 AM - 8:00 PM', 'Sunday: 8:00 AM - 6:00 PM'],
        },
    ];

    const serviceOptions = [
        { value: 'yoga', label: 'Yoga Classes' },
        { value: 'meditation', label: 'Meditation Sessions' },
        { value: 'ayurveda', label: 'Ayurvedic Treatments' },
        { value: 'massage', label: 'Massage Therapy' },
        { value: 'consultation', label: 'Wellness Consultation' },
        { value: 'retreat', label: 'Retreat Programs' },
        { value: 'other', label: 'Other' },
    ];

    return (
        <div className="min-h-screen bg-white">
            <Header />

            {/* Hero Section */}
            <section className="pt-24 pb-16 bg-gradient-to-br from-emerald-50 to-teal-50">
                <Container size="lg">
                    <div className="text-center max-w-4xl mx-auto">
                        <Title order={1} size="3.5rem" mb="xl" c="dark">
                            Contact Us
                        </Title>
                        <Text size="xl" c="gray.7" className="leading-relaxed">
                            Ready to begin your wellness journey? We're here to help you find the perfect
                            path to inner peace and holistic health. Reach out to us today.
                        </Text>
                    </div>
                </Container>
            </section>

            {/* Contact Information */}
            <section className="py-20">
                <Container size="lg">
                    <Grid>
                        {contactInfo.map((info, index) => (
                            <Grid.Col key={index} span={{ base: 12, sm: 6, md: 3 }}>
                                <Card shadow="sm" padding="xl" className="text-center h-full">
                                    <div className="text-emerald-500 mb-4 flex justify-center">
                                        {info.icon}
                                    </div>
                                    <Title order={3} size="1.25rem" mb="md">
                                        {info.title}
                                    </Title>
                                    <Stack gap="xs">
                                        {info.details.map((detail, idx) => (
                                            <Text key={idx} c="gray.7" size="sm">
                                                {detail}
                                            </Text>
                                        ))}
                                    </Stack>
                                </Card>
                            </Grid.Col>
                        ))}
                    </Grid>
                </Container>
            </section>

            {/* Contact Form and Map */}
            <section className="py-20 bg-gray-50">
                <Container size="lg">
                    <Grid>
                        <Grid.Col span={{ base: 12, lg: 6 }}>
                            <Card shadow="md" padding="xl">
                                <Title order={2} size="2rem" mb="xl" c="dark">
                                    Send Us a Message
                                </Title>
                                <form >
                                    <Stack gap="md">
                                        <Grid>
                                            <Grid.Col span={{ base: 12, sm: 6 }}>
                                                <TextInput
                                                    label="Full Name"
                                                    placeholder="Your full name"
                                                    required

                                                />
                                            </Grid.Col>
                                            <Grid.Col span={{ base: 12, sm: 6 }}>
                                                <TextInput
                                                    label="Email"
                                                    placeholder="your@email.com"
                                                    required

                                                />
                                            </Grid.Col>
                                        </Grid>

                                        <Grid>
                                            <Grid.Col span={{ base: 12, sm: 6 }}>
                                                <TextInput
                                                    label="Phone Number"
                                                    placeholder="(555) 123-4567"

                                                />
                                            </Grid.Col>
                                            <Grid.Col span={{ base: 12, sm: 6 }}>
                                                <Select
                                                    label="Service Interest"
                                                    placeholder="Select a service"
                                                    data={serviceOptions}

                                                />
                                            </Grid.Col>
                                        </Grid>

                                        <Textarea
                                            label="Message"
                                            placeholder="Tell us about your wellness goals and how we can help..."
                                            required
                                            minRows={4}

                                        />

                                        <Button
                                            type="submit"
                                            size="lg"
                                            loading={isSubmitting}
                                            className="bg-emerald-500 hover:bg-emerald-600 text-white"
                                        >
                                            Send Message
                                        </Button>
                                    </Stack>
                                </form>
                            </Card>
                        </Grid.Col>

                        <Grid.Col span={{ base: 12, lg: 6 }}>
                            <Card shadow="md" padding="xl" className="h-full">
                                <Title order={2} size="2rem" mb="xl" c="dark">
                                    Find Us
                                </Title>
                                <div className="h-96 bg-gray-200 rounded-lg flex items-center justify-center mb-6">
                                    <div className="text-center">
                                        <IconMapPin size={48} className="text-gray-400 mx-auto mb-4" />
                                        <Text c="gray.6">Interactive Map</Text>
                                        <Text c="gray.5" size="sm">Coming Soon</Text>
                                    </div>
                                </div>
                                <Stack gap="md">
                                    <div>
                                        <Text fw={600} mb="xs">Getting Here</Text>
                                        <Text c="gray.7" size="sm">
                                            We're conveniently located in the heart of Peaceful Valley,
                                            easily accessible by car or public transportation.
                                        </Text>
                                    </div>
                                    <div>
                                        <Text fw={600} mb="xs">Parking</Text>
                                        <Text c="gray.7" size="sm">
                                            Free parking is available on-site. We also offer bicycle
                                            storage and EV charging stations.
                                        </Text>
                                    </div>
                                    <div>
                                        <Text fw={600} mb="xs">Public Transport</Text>
                                        <Text c="gray.7" size="sm">
                                            Bus routes 15, 22, and 34 stop within walking distance.
                                            The Metro Green Line station is 0.5 miles away.
                                        </Text>
                                    </div>
                                </Stack>
                            </Card>
                        </Grid.Col>
                    </Grid>
                </Container>
            </section>

            {/* FAQ Section */}
            <section className="py-20">
                <Container size="lg">
                    <Title order={2} size="2.5rem" mb="xl" ta="center" c="dark">
                        Frequently Asked Questions
                    </Title>
                    <div className="max-w-4xl mx-auto">
                        <Grid>
                            <Grid.Col span={{ base: 12, md: 6 }}>
                                <Stack gap="lg">
                                    <div>
                                        <Text fw={600} mb="xs" c="emerald.6">
                                            Do I need to book in advance?
                                        </Text>
                                        <Text c="gray.7" size="sm">
                                            Yes, we recommend booking treatments and classes in advance to ensure availability.
                                            Walk-ins are welcome based on availability.
                                        </Text>
                                    </div>
                                    <div>
                                        <Text fw={600} mb="xs" c="emerald.6">
                                            What should I bring to my first visit?
                                        </Text>
                                        <Text c="gray.7" size="sm">
                                            Just bring comfortable clothing and an open mind. We provide all necessary
                                            equipment, mats, and props for classes and treatments.
                                        </Text>
                                    </div>
                                    <div>
                                        <Text fw={600} mb="xs" c="emerald.6">
                                            Are there packages available?
                                        </Text>
                                        <Text c="gray.7" size="sm">
                                            Yes, we offer various wellness packages and membership options.
                                            Contact us to learn about our current offerings and discounts.
                                        </Text>
                                    </div>
                                </Stack>
                            </Grid.Col>
                            <Grid.Col span={{ base: 12, md: 6 }}>
                                <Stack gap="lg">
                                    <div>
                                        <Text fw={600} mb="xs" c="emerald.6">
                                            Is parking free?
                                        </Text>
                                        <Text c="gray.7" size="sm">
                                            Yes, we provide complimentary parking for all our guests.
                                            We also have designated spaces for electric vehicles with charging stations.
                                        </Text>
                                    </div>
                                    <div>
                                        <Text fw={600} mb="xs" c="emerald.6">
                                            Can I purchase gift certificates?
                                        </Text>
                                        <Text c="gray.7" size="sm">
                                            Absolutely! Gift certificates are available for individual treatments,
                                            class packages, or custom amounts. Perfect for sharing wellness with loved ones.
                                        </Text>
                                    </div>
                                    <div>
                                        <Text fw={600} mb="xs" c="emerald.6">
                                            What is your cancellation policy?
                                        </Text>
                                        <Text c="gray.7" size="sm">
                                            We require 24-hour notice for cancellations. Late cancellations may be
                                            subject to a fee. Please contact us as soon as possible if you need to reschedule.
                                        </Text>
                                    </div>
                                </Stack>
                            </Grid.Col>
                        </Grid>
                    </div>
                </Container>
            </section>

            <Footer />
        </div>
    );
};

export default ContactPage;