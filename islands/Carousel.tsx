import { FunctionalComponent, h } from 'preact';
import { useState, useRef } from 'preact/hooks';

interface CarouselProps {
  items: string[];
}

const Carousel: FunctionalComponent<CarouselProps> = ({ items }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [startX, setStartX] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
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
  };

  const handleTouchMove = (event: TouchEvent) => {
    if (!isDragging) {
      return;
    }

    const slider = sliderRef.current;

    if (slider) {
      const currentX = event.touches[0].clientX;
      const diffX = startX - currentX;
      slider.style.transform = `translateX(-${currentIndex * 100 + diffX}px)`;
    }
  };

  const handleTouchEnd = () => {
    const slider = sliderRef.current;

    if (slider) {
      const endX = startX - slider.getBoundingClientRect().left;
      const threshold = slider.clientWidth / 4;
      
      if (endX < -threshold) {
        handleNextClick();
      } else if (endX > threshold) {
        handlePrevClick();
      }

      slider.style.transition = `transform 0.3s ease-out`;
      slider.style.transform = `translateX(-${currentIndex * 100}%)`;

      setIsDragging(false);
    }
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
        {items.map((item) => (
          <div class="flex-shrink-0 w-full" key={item}>
            <img class="w-full" src={item} />
          </div>
        ))}
      </div>
      <button
        class="absolute top-1/2 left-0 px-4 py-2 text-white bg-black rounded-full transform -translate-y-1/2 hover:bg-gray-900"
        onClick={handlePrevClick}
      >
        &lt;
      </button>
      <button
        class="absolute top-1/2 right-0 px-4 py-2 text-white bg-black rounded-full transform -translate-y-1/2 hover:bg-gray-900"
        onClick={handleNextClick}
      >
        &gt;
      </button>
    </div>
  );
};

export default Carousel;
