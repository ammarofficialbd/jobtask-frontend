import React, { useRef, useEffect } from 'react';

const PriceFilter = ({ minPrice, maxPrice, setMinPrice, setMaxPrice }) => {
  const minRef = useRef(null);
  const maxRef = useRef(null);
  const sliderRef = useRef(null);

  const minRange = 0;
  const maxRange = 350;

  const handleMinDrag = (e) => {
    if (!sliderRef.current) return;
    const sliderRect = sliderRef.current.getBoundingClientRect();
    const newValue = Math.min(
      Math.max(minRange, ((e.clientX - sliderRect.left) / sliderRect.width) * maxRange),
      maxPrice - 1
    );
    setMinPrice(newValue);
  };

  const handleMaxDrag = (e) => {
    if (!sliderRef.current) return;
    const sliderRect = sliderRef.current.getBoundingClientRect();
    const newValue = Math.max(
      Math.min(maxRange, ((e.clientX - sliderRect.left) / sliderRect.width) * maxRange),
      minPrice + 1
    );
    setMaxPrice(newValue);
  };

  useEffect(() => {
    const handleMouseUp = () => {
      document.removeEventListener('mousemove', handleMinDrag);
      document.removeEventListener('mousemove', handleMaxDrag);
    };

    document.addEventListener('mouseup', handleMouseUp);

    return () => {
      document.removeEventListener('mouseup', handleMouseUp);
    };
  }, []);

  const handleMinMouseDown = () => {
    document.addEventListener('mousemove', handleMinDrag);
  };

  const handleMaxMouseDown = () => {
    document.addEventListener('mousemove', handleMaxDrag);
  };

  return (
    <div className="p-4 max-w-md mx-auto">
      <h2 className="text-lg font-semibold mb-4">Price</h2>
      <div className="relative" ref={sliderRef}>
        <div className="relative h-1 bg-gray-300">
          <div
            className="absolute h-full bg-black"
            style={{
              left: `${(minPrice / maxRange) * 100}%`,
              right: `${100 - (maxPrice / maxRange) * 100}%`,
            }}
          ></div>
          <div
            ref={minRef}
            onMouseDown={handleMinMouseDown}
            className="absolute w-5 h-5 bg-black rounded-full cursor-pointer -top-2"
            style={{
              left: `${(minPrice / maxRange) * 100}%`,
              transform: 'translateX(-50%)',
            }}
          ></div>
          <div
            ref={maxRef}
            onMouseDown={handleMaxMouseDown}
            className="absolute w-5 h-5 bg-black rounded-full cursor-pointer -top-2"
            style={{
              left: `${(maxPrice / maxRange) * 100}%`,
              transform: 'translateX(-50%)',
            }}
          ></div>
        </div>
        <div className="flex justify-between mt-4">
          <div className="flex items-center space-x-2">
            <span className="text-gray-600">$</span>
            <input
              type="number"
              value={Math.round(minPrice)}
              onChange={(e) => setMinPrice(Math.min(e.target.value, maxPrice - 1))}
              className="border p-2 w-20 rounded-md"
              min="0"
              max="350"
            />
          </div>
          <span className="text-gray-600">To</span>
          <div className="flex items-center space-x-2">
            <span className="text-gray-600">$</span>
            <input
              type="number"
              value={Math.round(maxPrice)}
              onChange={(e) => setMaxPrice(Math.max(e.target.value, minPrice + 1))}
              className="border p-2 w-20 rounded-md"
              min="0"
              max="350"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PriceFilter;
