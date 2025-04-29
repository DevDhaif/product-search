import { Inter, Abel } from 'next/font/google';
import './globals.css';
import Navigation from './ui/navigation/Navigation';
import Footer from './ui/navigation/Footer';

const inter = Inter({
    subsets: ['latin'],
    display: 'swap',
    variable: '--font-inter',
});

const abel = Abel({
    subsets: ["latin"],
    weight: "400",
    display: "swap",
    variable: "--font-abel",
});


export const metadata = {
    title: 'Product Search App',
    description: 'A Next.js application for searching products',
};

export default function RootLayout({ children }) {
    return (
        <html lang="en" className={`${inter.variable} ${abel.variable}`}>
            <body className="flex bg-gray-50 flex-col min-h-screen">
                <Navigation />
                <h1 className="text-center text-4xl font-bold mt-8 ">
                    Welcome to the Product Search App
                </h1>
                <main className="flex-grow w-full  max-w-7xl mx-auto">
                    {children}
                </main>
                <Footer />
            </body>
        </html>
    );
}