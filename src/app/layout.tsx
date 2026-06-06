import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Link from 'next/link';
import { ShoppingCart, User, Search, Menu } from 'lucide-react';
import './globals.css';

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Lumina | Premium E-Commerce',
  description: 'Next generation e-commerce experience powered by NestJS and Next.js',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.variable} min-h-screen flex flex-col`}>
        <header className="fixed top-0 left-0 right-0 z-50 border-b border-white/10 bg-[#030712]/80 backdrop-blur-md">
          <div className="container mx-auto px-4 h-20 flex items-center justify-between">
            <Link href="/" className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-indigo-500 to-cyan-400 flex items-center justify-center">
                <span className="text-white font-bold text-xl leading-none">L</span>
              </div>
              <span className="text-xl font-bold tracking-tight text-white">Lumina</span>
            </Link>
            
            <nav className="hidden md:flex items-center gap-8">
              <Link href="/products" className="text-sm font-medium text-gray-300 hover:text-white transition-colors">Products</Link>
              <Link href="/categories" className="text-sm font-medium text-gray-300 hover:text-white transition-colors">Categories</Link>
              <Link href="/about" className="text-sm font-medium text-gray-300 hover:text-white transition-colors">About</Link>
            </nav>

            <div className="flex items-center gap-5">
              <button className="text-gray-400 hover:text-white transition-colors">
                <Search className="w-5 h-5" />
              </button>
              <Link href="/cart" className="relative text-gray-400 hover:text-white transition-colors">
                <ShoppingCart className="w-5 h-5" />
                <span className="absolute -top-1.5 -right-1.5 w-4 h-4 bg-indigo-500 rounded-full text-[10px] font-bold text-white flex items-center justify-center">0</span>
              </Link>
              <Link href="/auth/login" className="hidden sm:flex items-center justify-center w-9 h-9 rounded-full bg-white/10 border border-white/10 hover:bg-white/20 transition-colors">
                <User className="w-4 h-4 text-gray-300" />
              </Link>
              <button className="md:hidden text-gray-400 hover:text-white">
                <Menu className="w-6 h-6" />
              </button>
            </div>
          </div>
        </header>
        <div className="pt-20 flex-1 flex flex-col">
          {children}
        </div>
      </body>
    </html>
  );
}
