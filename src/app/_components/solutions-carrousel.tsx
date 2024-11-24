"use client";

import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  ArrowLeft,
  Rocket,
  MessageSquare,
  Database,
} from "lucide-react";
import Image from "next/image";
import { useState } from "react";

export const SolutionsCarrousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % solutions.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + solutions.length) % solutions.length);
  };

  const solutions = [
    {
      title: "Landing Page Starter Kit",
      benefit: "Aumenta tus conversiones en un 30%",
      icon: <Rocket className="h-12 w-12 mb-4 text-blue-600" />,
      image: "/placeholder.svg?height=300&width=200",
    },
    {
      title: "eCommerce Starter Kit",
      benefit: "Incrementa tus ventas online en un 50%",
      icon: <MessageSquare className="h-12 w-12 mb-4 text-green-600" />,
      image: "/placeholder.svg?height=300&width=200",
    },
    {
      title: "Data Analytics Starter Kit",
      benefit: "Toma decisiones 3 veces más rápido",
      icon: <Database className="h-12 w-12 mb-4 text-purple-600" />,
      image: "/placeholder.svg?height=300&width=200",
    },
  ];
  return (
    <div className="container mx-auto">
      <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
        Soluciones listas para ti
      </h2>
      <div className="relative max-w-3xl mx-auto">
        <div className="overflow-hidden">
          <div
            className="flex transition-transform duration-300 ease-in-out"
            style={{ transform: `translateX(-${currentSlide * 100}%)` }}
          >
            {solutions.map((solution, index) => (
              <div key={index} className="w-full flex-shrink-0 px-4">
                <div className="bg-white rounded-lg shadow-lg overflow-hidden flex h-[300px]">
                  <div className="w-1/3 p-4">
                    <Image
                      src={solution.image}
                      alt={solution.title}
                      width={200}
                      height={300}
                      className="w-full h-full object-cover rounded-lg"
                    />
                  </div>
                  <div className="w-2/3 p-6 flex flex-col justify-between">
                    <div>
                      {solution.icon}
                      <h3 className="text-xl font-semibold mb-2 text-gray-900">
                        {solution.title}
                      </h3>
                      <p className="text-lg font-medium text-blue-600">
                        {solution.benefit}
                      </p>
                    </div>
                    <Button className="bg-blue-900 hover:bg-blue-800 text-white transition-colors duration-300 mt-4">
                      Solicitar demo
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <Button
          onClick={prevSlide}
          className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-full bg-white text-blue-900 hover:bg-gray-100"
          variant="ghost"
        >
          <ArrowLeft className="h-6 w-6" />
        </Button>
        <Button
          onClick={nextSlide}
          className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-full bg-white text-blue-900 hover:bg-gray-100"
          variant="ghost"
        >
          <ArrowRight className="h-6 w-6" />
        </Button>
        <div className="flex justify-center mt-4">
          {solutions.map((_, index) => (
            <div
              key={index}
              className={`h-2 w-2 rounded-full mx-1 ${
                currentSlide === index ? "bg-blue-600" : "bg-gray-300"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
