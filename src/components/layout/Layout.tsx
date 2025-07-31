import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { ColorSchemeScript, MantineProvider } from '@mantine/core';
// import { Notifications } from '@mantine/notifications';
import '@mantine/core/styles.css';
// import '@mantine/notifications/styles.css';
import '../styles/globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
    title: 'Ananda Bhavan - Wellness & Meditation Center',
    description: 'Find your inner peace through yoga, meditation, and holistic healing at Ananda Bhavan wellness center.',
};

export default function RootLayout({
                                       children,
                                   }: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
        <head>
            <ColorSchemeScript />
        </head>
        <body className={inter.className}>
        <MantineProvider>
            {/*<Notifications />*/}
            {children}
        </MantineProvider>
        </body>
        </html>
    );
}