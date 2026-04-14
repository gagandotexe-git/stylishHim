 "use client"
import { Globe, Phone, ArrowRight } from 'lucide-react';
import Link from 'next/link';

export default function WeHome() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-900 via-gray-900 to-black overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1556740714-a8395b3c6e6d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80"
          alt="Global Trade Background"
          className="w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-black/50"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Heading */}
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 animate-fade-in-up">
          Expanding Markets. <span className="text-blue-400">Connecting Borders.</span> Delivering Trust.
        </h1>

        {/* Subheading */}
        <p className="text-lg sm:text-xl lg:text-2xl text-gray-200 mb-8 max-w-3xl mx-auto animate-fade-in-up animation-delay-200">
          From Delhi to Dubai, Vietnam to Nairobi — Stylish Him Exim helps businesses trade across borders with confidence. We bring global reach and local expertise to every deal.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row justify-center gap-4 animate-fade-in-up animation-delay-400">
          <Link
            href="/quote"
            className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-semibold rounded-full hover:bg-blue-700 transition duration-300 group"
          >
            Get A Quote
            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
          <Link
            href="/contact"
            className="inline-flex items-center px-6 py-3 bg-transparent border-2 border-white text-white font-semibold rounded-full hover:bg-white hover:text-blue-900 transition duration-300 group"
          >
            <Phone className="mr-2 w-5 h-5" />
            Speak To A Regional Office
          </Link>
        </div>

        {/* Global Icons Animation */}
        <div className="mt-12 flex justify-center gap-8 text-white/70 animate-fade-in-up animation-delay-600">
          <Globe className="w-10 h-10 animate-spin-slow" />
          <Globe className="w-10 h-10 animate-spin-slow" />
          <Globe className="w-10 h-10 animate-spin-slow" />
        </div>
      </div>

      {/* Custom CSS for Animations */}
      <style jsx>{`
        .animate-fade-in-up {
          opacity: 0;
          transform: translateY(20px);
          animation: fadeInUp 0.8s ease-out forwards;
        }

        .animation-delay-200 {
          animation-delay: 0.2s;
        }

        .animation-delay-400 {
          animation-delay: 0.4s;
        }

        .animation-delay-600 {
          animation-delay: 0.6s;
        }

        @keyframes fadeInUp {
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-spin-slow {
          animation: spin 10s linear infinite;
        }

        @keyframes spin {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
      `}</style>
    </section>
  );
}