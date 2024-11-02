"use client"

import React , { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const ProductsSection = () => {
  const products = [
    {
      name: 'Mi-Pay',
      description: 'A seamless, secure mobile payment solution, providing instant transactions with enhanced customer experience.',
      icon: "https://mls-371939617.imgix.net/images/feature-info/01.jpg?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",

    },
    {
      name: 'Mi-Connect',
      description: 'A robust connectivity platform for unified communication, enabling real-time engagement across multiple channels.',
      icon: "https://mls-371939617.imgix.net/images/feature-info/02.jpg?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",

    },
    {
      name: 'Mi-KYC',
      description: 'An efficient KYC (Know Your Customer) system to streamline customer onboarding and ensure compliance with regulatory standards.',
      icon: "https://mls-371939617.imgix.net/images/feature-info/03.jpg?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",

    },
    {
      name: 'Mi-RTGS',
      description: 'A real-time gross settlement system that enables instant, high-value transactions with guaranteed security and accuracy.',
      icon: "https://mls-371939617.imgix.net/images/feature-info/04.jpg?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",

    },
    {
      name: 'Mi-AML',
      description: 'A powerful Anti-Money Laundering solution to monitor, detect, and report suspicious activities, ensuring financial compliance.',
      icon: "https://mls-371939617.imgix.net/images/feature-info/04.jpg?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    },
    {
      name: 'Mi-DCMS',
      description: 'A centralized data and content management system, offering efficient data storage, accessibility, and enhanced collaboration.',
      icon: "https://mls-371939617.imgix.net/images/feature-info/04.jpg?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",

    },
  ];
  const [currentIndex, setCurrentIndex] = useState(0);


  const nextSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === products.length - 3 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? products.length - 3 : prevIndex - 1
    );
  };

  return (
    <section className="py-16 px-4 bg-gray-50">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">
            Our Cutting-Edge Solutions for Your Business Needs
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Explore our suite of innovative products, each designed to empower your business 
            with efficient, secure, and scalable solutions.
          </p>
        </div>

        <div className="relative px-12">
          {/* Navigation Buttons */}
          <button 
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white rounded-full p-2 shadow-lg hover:bg-gray-100 transition-colors"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          
          <button 
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white rounded-full p-2 shadow-lg hover:bg-gray-100 transition-colors"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Single Card Display */}
          <div className="w-full max-w-lg mx-auto">
            <Card className="overflow-hidden">
              <CardHeader className="p-0">
                <div className="relative h-64 w-full">
                  <img 
                    src={products[currentIndex].icon}
                    alt={`${products[currentIndex].name} illustration`}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <CardTitle className="text-xl font-semibold">
                    {products[currentIndex].name}
                  </CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-6">
                  {products[currentIndex].description}
                </p>
                <Button 
                  variant="outline" 
                  className="w-full hover:bg-blue-600 hover:text-white transition-colors"
                >
                  Learn More
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Dots Navigation */}
          <div className="flex justify-center mt-8 gap-2">
            {products.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === currentIndex ? 'bg-blue-600' : 'bg-gray-300'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
export default ProductsSection;