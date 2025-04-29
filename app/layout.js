import { Inter } from 'next/font/google';
import './globals.css';
import Navigation from './ui/navigation/Navigation';
import Footer from './ui/navigation/Footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
    title: 'Product Search App',
    description: 'A Next.js application for searching products',
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body className={`${inter.className} flex bg-gray-50 flex-col min-h-screen`}>
                <Navigation />
                <main className="flex-grow w-full  max-w-7xl mx-auto">
                    {children}
                </main>
                <Footer />
            </body>
        </html>
    );
}