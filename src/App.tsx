import React, { useState } from "react";
import { ChevronLeft, ChevronRight, Flower2 } from "lucide-react";

const images = [
  "./assets/1.png", // Pink flowers
  "./assets/2.png",
  "./assets/3.png",
  "./assets/4.png",
  "./assets/5.png",
];

function App() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  return (
    <div className="min-h-screen bg-pink-50">
      {/* Header */}
      <header className="bg-pink-100 p-6 shadow-md">
        <div className="container mx-auto flex items-center justify-center">
          <Flower2 className="text-pink-500 mr-2" size={32} />
          <h1 className="text-3xl font-bold text-pink-700">SHEVIL</h1>
          <Flower2 className="text-pink-500 ml-2" size={32} />
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        {/* Carousel Container */}
        <div className="relative max-w-4xl mx-auto bg-white rounded-lg shadow-xl p-4">
          {/* Decorative Flowers */}
          <div className="absolute -top-4 -left-4 text-pink-400">
            <Flower2 size={32} />
          </div>
          <div className="absolute -top-4 -right-4 text-pink-400">
            <Flower2 size={32} />
          </div>
          <div className="absolute -bottom-4 -left-4 text-pink-400">
            <Flower2 size={32} />
          </div>
          <div className="absolute -bottom-4 -right-4 text-pink-400">
            <Flower2 size={32} />
          </div>

          {/* Image Container */}
          <div className="relative aspect-video overflow-hidden rounded-lg">
            <img
              src={images[currentIndex]}
              alt={`Slide ${currentIndex + 1}`}
              className="w-full h-full object-cover transition-opacity duration-500"
            />

            {/* Navigation Buttons */}
            <button
              onClick={prevSlide}
              className="absolute left-2 top-1/2 -translate-y-1/2 bg-pink-500/70 hover:bg-pink-600/70 text-white p-2 rounded-full transition-colors"
            >
              <ChevronLeft size={24} />
            </button>
            <button
              onClick={nextSlide}
              className="absolute right-2 top-1/2 -translate-y-1/2 bg-pink-500/70 hover:bg-pink-600/70 text-white p-2 rounded-full transition-colors"
            >
              <ChevronRight size={24} />
            </button>
          </div>

          {/* Dots Navigation */}
          <div className="flex justify-center gap-2 mt-4">
            {images.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === currentIndex ? "bg-pink-500" : "bg-pink-200"
                }`}
              />
            ))}
          </div>
        </div>

        {/* Image Counter */}
        <p className="text-center mt-4 text-pink-700 font-medium">
          Image {currentIndex + 1} of {images.length}
        </p>
      </main>

      {/* Footer */}
      <footer className="bg-pink-100 py-4 mt-8">
        <p className="text-center text-pink-700">© 2025 Shevil PPT.</p>
      </footer>
    </div>
  );
}

export default App;
