import React, { useState } from 'react';

const CustomSlide = ({ slides }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? slides.length - 1 : prev - 1
    );
  };

  const nextSlide = () => {
    setCurrentIndex((prev) =>
      prev === slides.length - 1 ? 0 : prev + 1
    );
  };

  return (
    <div className="relative w-full overflow-hidden">
      <div className="flex transition-transform duration-500 ease-in-out" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
        {slides.map((slide, index) => (
          <div key={index} className="w-full flex-shrink-0">
                  <button onClick={prevSlide} className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white px-2 py-1 shadow">←</button>

            <img src={slide} alt={`Slide ${index + 1}`} className="w-full h-auto object-cover" />
      <button onClick={nextSlide} className="">→</button>

          </div>
        ))}
      </div>

      {/* Navigation Arrows */}
    </div>
  );
};

export default CustomSlide;
