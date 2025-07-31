import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { Burger, Button, Group, Text } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';

const Header = () => {
    const router = useRouter();
    const [opened, { toggle }] = useDisclosure(false);

    const navItems = [
        { label: 'Home', href: '/' },
        { label: 'About', href: '/about' },
        // { label: 'Treatments', href: '/treatments' },
        { label: 'Amenities', href: '/amenities' },
        { label: 'Contact', href: '/contact' },
    ];

    return (
        <header className="bg-white shadow-sm fixed w-full top-0 z-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    <Link href="/" className="flex-shrink-0">
                        <Text size="xl" fw={700} c="dark">
                            Ananda Bhavan
                        </Text>
                    </Link>

                    {/* Desktop Navigation */}
                    <nav className="hidden md:flex space-x-8">
                        {navItems.map((item) => (
                            <Link
                                key={item.href}
                                href={item.href}
                                className={`text-gray-600 hover:text-emerald-600 transition-colors duration-200 ${
                                    router.pathname === item.href ? 'text-emerald-600 font-medium' : ''
                                }`}
                            >
                                {item.label}
                            </Link>
                        ))}
                    </nav>

                    <div className="hidden md:block">
                        <Button
                            color="#17CF91"
                            component={Link}
                            href="/contact"
                            // className="bg-emerald-500 hover:bg-emerald-600 text-white px-6 py-2 rounded-full transition-all duration-200 hover:shadow-lg"
                        >
                            Book Now
                        </Button>
                    </div>

                    {/* Mobile menu button */}
                    <div className="md:hidden">
                        <Burger opened={opened} onClick={toggle} aria-label="Toggle navigation" />
                    </div>
                </div>

                {/* Mobile Navigation */}
                {opened && (
                    <div className="md:hidden">
                        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t">
                            {navItems.map((item) => (
                                <Link
                                    key={item.href}
                                    href={item.href}
                                    className={`block px-3 py-2 text-base font-medium transition-colors duration-200 ${
                                        router.pathname === item.href
                                            ? 'text-emerald-600 bg-emerald-50'
                                            : 'text-gray-600 hover:text-emerald-600 hover:bg-gray-50'
                                    }`}
                                    onClick={() => toggle()}
                                >
                                    {item.label}
                                </Link>
                            ))}
                            <div className="px-3 py-2">
                                <Button
                                    color="#17CF91"
                                    component={Link}
                                    href="/contact"
                                    fullWidth
                                    className="bg-emerald-500 hover:bg-emerald-600 text-white"
                                >
                                    Book Now
                                </Button>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </header>
    );
};

export default Header;