import React from "react";

const About: React.FC = () => {
  return (
    <div className="min-h-screen bg-white text-gray-800 flex flex-col items-center justify-center px-6 py-16">
      <div className="max-w-3xl text-center">
        <h1 className="text-4xl sm:text-5xl font-bold text-blue-600 mb-6">
          About ConverterX
        </h1>

        <p className="text-lg text-gray-600 leading-relaxed mb-6">
          ConverterX is a fast, accurate, and user-friendly unit conversion
          platform designed for everyday use. Our mission is to simplify complex
          calculations and make conversions accessible to everyone, anywhere.
        </p>

        <p className="text-lg text-gray-600 leading-relaxed mb-6">
          Unlike traditional converters, ConverterX is optimized for clarity and
          precision. Built with a clean, distraction-free design, it helps you
          convert units effortlessly.
        </p>

        <p className="text-lg text-gray-600 leading-relaxed mb-8">
          ConverterX is part of the <span className="font-semibold text-blue-600">TouchlessX</span> ecosystem — a growing network of smart, automated tools for the modern world.
        </p>

        <div className="border-t border-gray-200 pt-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-3">Our Vision</h2>
          <p className="text-gray-600 leading-relaxed">
            We believe in simplicity, speed, and trust. ConverterX isn’t just a tool — it’s the start of a smarter, touchless future.
          </p>
        </div>
      </div>
    </div>
    <footer className="text-center text-sm text-gray-500 py-6 border-t mt-10">
  <a href="/about" className="hover:text-blue-600 transition">About</a>
  <span className="mx-2">•</span>
  <a href="/privacy" className="hover:text-blue-600 transition">Privacy Policy</a>
</footer>

  );
};

export default About;
