'use client';

import { motion } from 'framer-motion';
import { ShoppingBag, ArrowRight, Star, Shield, Zap, Truck } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

const features = [
  { icon: Zap, title: 'Lightning Fast', desc: 'Experience seamless browsing and instant checkouts.' },
  { icon: Shield, title: 'Secure Payments', desc: 'Bank-grade encryption for all your transactions.' },
  { icon: Truck, title: 'Global Delivery', desc: 'Fast, reliable shipping to over 150 countries.' },
];

const trendingProducts = [
  { id: 1, name: 'Aura Wireless Headphones', price: 299, rating: 4.9, img: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=1000&auto=format&fit=crop' },
  { id: 2, name: 'Lumina Smart Watch', price: 199, rating: 4.8, img: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=1000&auto=format&fit=crop' },
  { id: 3, name: 'Minimalist Keyboard', price: 149, rating: 4.7, img: 'https://images.unsplash.com/photo-1595225476474-87563907a212?q=80&w=1000&auto=format&fit=crop' },
  { id: 4, name: 'Echo Smart Speaker', price: 129, rating: 4.6, img: 'https://images.unsplash.com/photo-1589003071595-f144815a773d?q=80&w=1000&auto=format&fit=crop' },
];

export default function Home() {
  return (
    <main className="flex-1">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden pt-20">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1618220179428-22790b46a0eb?q=80&w=2000&auto=format&fit=crop')] bg-cover bg-center opacity-20 mix-blend-overlay"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-[#030712] via-transparent to-transparent"></div>
        
        <div className="container relative z-10 mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="max-w-4xl mx-auto space-y-8"
          >
            <span className="inline-block py-1 px-3 rounded-full bg-indigo-500/10 text-indigo-400 text-sm font-medium border border-indigo-500/20 backdrop-blur-md">
              ✨ Discover the Future of Shopping
            </span>
            
            <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-white leading-tight">
              Elevate Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-cyan-400">Lifestyle</span>
            </h1>
            
            <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto font-light">
              Explore our curated collection of premium tech and lifestyle products designed to inspire and empower your everyday.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
              <Link href="/products" className="group relative inline-flex items-center justify-center px-8 py-4 font-semibold text-white transition-all duration-300 ease-in-out bg-indigo-600 rounded-full hover:bg-indigo-500 hover:shadow-[0_0_40px_rgba(79,70,229,0.4)] overflow-hidden w-full sm:w-auto">
                <span className="relative z-10 flex items-center gap-2">
                  Shop Collection <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </span>
                <div className="absolute inset-0 h-full w-full bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:animate-[shimmer_1.5s_infinite]"></div>
              </Link>
              
              <Link href="/categories" className="group inline-flex items-center justify-center px-8 py-4 font-semibold text-white transition-all duration-300 ease-in-out bg-white/5 border border-white/10 rounded-full hover:bg-white/10 backdrop-blur-md w-full sm:w-auto">
                Explore Categories
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 relative z-10">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="glass-card p-8 rounded-2xl flex flex-col items-center text-center group hover:-translate-y-2 transition-transform duration-300"
              >
                <div className="w-14 h-14 rounded-2xl bg-indigo-500/10 flex items-center justify-center mb-6 group-hover:bg-indigo-500/20 transition-colors border border-indigo-500/20">
                  <feature.icon className="w-7 h-7 text-indigo-400" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-400 leading-relaxed">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Trending Products */}
      <section className="py-24 relative z-10 bg-[#0f172a]/50">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Trending Now</h2>
              <p className="text-gray-400">Our most sought-after premium products.</p>
            </div>
            <Link href="/products" className="hidden md:flex items-center gap-2 text-indigo-400 hover:text-indigo-300 font-medium transition-colors">
              View All <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {trendingProducts.map((product, idx) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="group glass-card rounded-2xl overflow-hidden hover:shadow-[0_0_30px_rgba(79,70,229,0.15)] transition-all duration-300"
              >
                <div className="relative h-64 overflow-hidden bg-gray-900">
                  <Image
                    src={product.img}
                    alt={product.name}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700 ease-in-out"
                    unoptimized // using external dummy urls
                  />
                  <div className="absolute top-4 right-4 bg-black/50 backdrop-blur-md px-2 py-1 rounded-lg border border-white/10 flex items-center gap-1">
                    <Star className="w-3 h-3 text-yellow-400 fill-yellow-400" />
                    <span className="text-xs font-medium text-white">{product.rating}</span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-bold text-white mb-2 line-clamp-1">{product.name}</h3>
                  <div className="flex items-center justify-between mt-4">
                    <span className="text-xl font-black text-indigo-400">${product.price}</span>
                    <button className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-indigo-600 transition-colors border border-white/5">
                      <ShoppingBag className="w-4 h-4 text-white" />
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 relative z-10 overflow-hidden">
        <div className="absolute inset-0 bg-indigo-900/20"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-indigo-600/30 blur-[120px] rounded-full pointer-events-none"></div>
        
        <div className="container mx-auto px-4 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto glass-card p-12 md:p-16 rounded-3xl border border-indigo-500/30"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Join the Revolution</h2>
            <p className="text-xl text-gray-300 mb-10 font-light">
              Create an account today to get early access to exclusive drops, personalized recommendations, and member-only pricing.
            </p>
            <Link href="/auth/register" className="inline-flex items-center justify-center px-10 py-5 font-bold text-indigo-950 transition-all duration-300 ease-in-out bg-gradient-to-r from-indigo-400 to-cyan-400 rounded-full hover:scale-105 hover:shadow-[0_0_40px_rgba(99,102,241,0.5)]">
              Create Free Account
            </Link>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
