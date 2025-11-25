import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-black relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-indigo-900/20 via-black to-black" />

      <div className="relative z-10 text-center px-6">
        <div className="inline-flex items-center justify-center w-24 h-24 rounded-full bg-white/5 border border-white/10 mb-8 relative">
          <div className="absolute inset-0 bg-indigo-500/20 blur-xl rounded-full" />
          <span className="text-4xl font-bold text-white relative z-10">404</span>
        </div>

        <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
          Page Not Found
        </h1>
        <p className="text-gray-400 text-lg mb-10 max-w-md mx-auto leading-relaxed">
          The page you're looking for doesn't exist or has been moved. Let's get you back on track.
        </p>

        <Link
          href="/"
          className="inline-flex items-center px-8 py-4 bg-white text-black rounded-full font-semibold hover:bg-gray-200 transition-colors group"
        >
          <ArrowLeft className="w-5 h-5 mr-2 group-hover:-translate-x-1 transition-transform" />
          Go Back Home
        </Link>
      </div>
    </div>
  );
}

