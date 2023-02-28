import { FunctionalComponent, h } from 'preact';
import { useState } from 'preact/hooks';

interface CarouselProps {
  items: string[];
}

const Carousel: FunctionalComponent<CarouselProps> = ({ items }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrevClick = () => {
    const newIndex = (currentIndex - 1 + items.length) % items.length;
    setCurrentIndex(newIndex);
  };

  const handleNextClick = () => {
    const newIndex = (currentIndex + 1) % items.length;
    setCurrentIndex(newIndex);
  };

  const handleSwipe = (event: TouchEvent) => {
    const touch = event.touches[0];
    const startX = touch.clientX;
    let endX: number;

    const handleTouchEnd = (event: TouchEvent) => {
      endX = event.changedTouches[0].clientX;

      if (endX < startX) {
        handleNextClick();
      } else if (endX > startX) {
        handlePrevClick();
      }

      document.removeEventListener('touchend', handleTouchEnd);
    };

    document.addEventListener('touchend', handleTouchEnd);
  };

  return (
    <div class="relative overflow-hidden">
      <div
        class="flex transition-transform ease-out duration-300 transform"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
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
