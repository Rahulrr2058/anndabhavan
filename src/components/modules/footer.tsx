import { Text, Group, Stack } from '@mantine/core';
import { IconMapPin, IconPhone, IconMail } from '@tabler/icons-react';

const Footer = () => {
    return (
        <footer className="bg-gray-900 text-white py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div>
                        <Text size="xl" fw={700} mb="md">
                            Ananda Bhavan
                        </Text>
                        <Text size="sm" c="gray.4" className="max-w-sm">
                            A sanctuary for wellness, meditation, and holistic healing.
                            Find your inner peace in our serene environment.
                        </Text>
                    </div>

                    <div>
                        <Text size="lg" fw={600} mb="md">
                            Contact Info
                        </Text>
                        <Stack gap="xs">
                            <Group gap="xs">
                                <IconMapPin size={16} />
                                <Text size="sm" c="gray.4">
                                    123 Wellness Street, Peaceful Valley
                                </Text>
                            </Group>
                            <Group gap="xs">
                                <IconPhone size={16} />
                                <Text size="sm" c="gray.4">
                                    +1 (555) 123-4567
                                </Text>
                            </Group>
                            <Group gap="xs">
                                <IconMail size={16} />
                                <Text size="sm" c="gray.4">
                                    info@anandabhavan.com
                                </Text>
                            </Group>
                        </Stack>
                    </div>

                    <div>
                        <Text size="lg" fw={600} mb="md">
                            Opening Hours
                        </Text>
                        <Stack gap="xs">
                            <Group justify="space-between">
                                <Text size="sm" c="gray.4">Monday - Friday</Text>
                                <Text size="sm" c="gray.4">6:00 AM - 9:00 PM</Text>
                            </Group>
                            <Group justify="space-between">
                                <Text size="sm" c="gray.4">Saturday</Text>
                                <Text size="sm" c="gray.4">7:00 AM - 8:00 PM</Text>
                            </Group>
                            <Group justify="space-between">
                                <Text size="sm" c="gray.4">Sunday</Text>
                                <Text size="sm" c="gray.4">8:00 AM - 6:00 PM</Text>
                            </Group>
                        </Stack>
                    </div>
                </div>

                <div className="border-t border-gray-800 mt-8 pt-8 text-center">
                    <Text size="sm" c="gray.4">
                        © 2024 Ananda Bhavan. All rights reserved.
                    </Text>
                </div>
            </div>
        </footer>
    );
};

export default Footer;