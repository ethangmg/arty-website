import React, { useState, useEffect } from 'react';

interface Slide {
  image: string;
  alt: string;
  title: string;
  subtitle: string;
}

interface CarouselProps {
  slides: Slide[];
  autoplay?: boolean;
  showControls?: boolean;
  showDots?: boolean;
  carouselId?: string;
  height?: string;
}

const Carousel: React.FC<CarouselProps> = ({
  slides,
  autoplay = false,
  showControls = true,
  showDots = true,
  carouselId = 'carousel',
  height = '100vh'
}) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  useEffect(() => {
    if (autoplay) {
      const interval = setInterval(nextSlide, 5000);
      return () => clearInterval(interval);
    }
  }, [autoplay]);

  return (
    <div 
      className="relative lg:w-full w-screen overflow-hidden"
      style={{ height }}
    >
      {/* Slides */}
      <div className="relative w-full h-full">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <img
              src={slide.image}
              alt={slide.alt}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center text-white z-10">
                <h1 className="text-5xl font-semibold mb-4 drop-shadow-lg">
                  {slide.title}
                </h1>
                <p className="text-xl font-light drop-shadow-md">
                  {slide.subtitle}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

     
    </div>
  );
};

export default Carousel;
