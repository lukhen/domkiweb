import { FunctionalComponent, h } from 'preact';
import { useState, useRef } from 'preact/hooks';

interface CarouselProps {
  items: string[];
}

const Carousel: FunctionalComponent<CarouselProps> = ({ items }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [startX, setStartX] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [draggedX, setDraggedX] = useState(0); // Przechowywanie przesunięcia
  const sliderRef = useRef<HTMLDivElement>(null);

  const handlePrevClick = () => {
    const newIndex = (currentIndex - 1 + items.length) % items.length;
    setCurrentIndex(newIndex);
  };

  const handleNextClick = () => {
    const newIndex = (currentIndex + 1) % items.length;
    setCurrentIndex(newIndex);
  };

  const handleTouchStart = (event: TouchEvent) => {
    setStartX(event.touches[0].clientX);
    setIsDragging(true);
    setDraggedX(0); // Resetowanie przesunięcia
  };

  const handleTouchMove = (event: TouchEvent) => {
    if (!isDragging) {
      return;
    }

    const currentX = event.touches[0].clientX;
    const diffX = startX - currentX; // Różnica między początkiem a obecnym położeniem

    setDraggedX(diffX); // Zaktualizowanie przesunięcia
  };

  const handleTouchEnd = () => {
    if (Math.abs(draggedX) > 50) { // Próg, aby uznać gest za pełny (50px)
      if (draggedX > 0) {
        // Przewijanie w lewo
        setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length);
      } else {
        // Przewijanie w prawo
        setCurrentIndex((prevIndex) => (prevIndex - 1 + items.length) % items.length);
      }
    }

    // Przywrócenie do normalnego stanu
    setIsDragging(false);
    setDraggedX(0);
  };

  return (
    <div class="relative overflow-hidden">
      <div
        class="flex transition-transform ease-out duration-300 transform"
        ref={sliderRef}
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        {items.map((item, index) => (
          <div class="flex-shrink-0 w-full" key={index}>
            <img class="w-full h-auto object-cover" src={item} alt={`Slide ${index + 1}`} />
          </div>
        ))}
      </div>

      <button
        class="absolute top-1/2 left-0 px-4 py-2 text-white bg-black rounded-full transform -translate-y-1/2 hover:bg-gray-900 focus:outline-none"
        onClick={handlePrevClick}
        aria-label="Previous slide"
      >
        &lt;
      </button>

      <button
        class="absolute top-1/2 right-0 px-4 py-2 text-white bg-black rounded-full transform -translate-y-1/2 hover:bg-gray-900 focus:outline-none"
        onClick={handleNextClick}
        aria-label="Next slide"
      >
        &gt;
      </button>

      {/* Optional: Dots navigation */}
      <div class="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {items.map((_, index) => (
          <button
            key={index}
            class={`w-3 h-3 rounded-full ${index === currentIndex ? 'bg-indigo-500' : 'bg-gray-300'}`}
            onClick={() => setCurrentIndex(index)}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel;
