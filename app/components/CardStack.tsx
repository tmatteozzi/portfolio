'use client';
import { useState } from 'react';
import { motion } from 'framer-motion';

type Card = {
  id: number;
  name: string;
  content: React.ReactNode;
};

export const CardStack = ({
  items,
  offset,
  scaleFactor
}: {
  items: Card[];
  offset?: number;
  scaleFactor?: number;
}) => {
  const CARD_OFFSET = offset || 10;
  const SCALE_FACTOR = scaleFactor || 0.06;
  const [cards, setCards] = useState<Card[]>(items);

  const handleNext = () => {
    setCards((prevCards: Card[]) => {
      const newArray = [...prevCards];
      newArray.unshift(newArray.pop()!);
      return newArray;
    });
  };

  const handlePrev = () => {
    setCards((prevCards: Card[]) => {
      const newArray = [...prevCards];
      newArray.push(newArray.shift()!);
      return newArray;
    });
  };

  return (
    <div className="flex flex-col items-center">
      <div className="relative flex justify-center items-center w-full h-[300px] sm:h-[350px] mb-4 sm:mb-0">
        <div className="relative w-full h-full md:max-w-2xl">
          {cards.map((card, index) => (
            <motion.div
              key={card.id}
              className="absolute inset-0 bg-gradient-to-b from-gray-900 via-gray-900 to-indigo-950 rounded-2xl sm:rounded-3xl p-4 sm:p-6 shadow-xl border border-gray-300 shadow-white/[0.025] flex flex-col justify-top overflow-hidden"
              style={{
                transformOrigin: 'top center'
              }}
              animate={{
                top: index * -(CARD_OFFSET * (1 - index * 0.1)),
                scale: 1 - index * (SCALE_FACTOR * 0.8),
                zIndex: cards.length - index
              }}
            >
              <div className="p-2">
                <p className="font-semibold text-base sm:text-lg text-white">
                  {card.name}
                </p>
                <div className="mt-2 sm:mt-4 text-xs sm:text-sm md:text-base font-normal text-neutral-100 max-h-[180px] sm:max-h-[220px] md:max-h-[260px]">
                  {card.content}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        <button
          onClick={handlePrev}
          className="hidden md:block absolute left-0 sm:left-[-60px] top-1/2 transform -translate-y-1/2 z-10 p-2 text-gray-300 hover:text-white text-xl sm:text-2xl"
          aria-label="Previous card"
        >
          {'<'}
        </button>
        <button
          onClick={handleNext}
          className="hidden md:block absolute right-0 sm:right-[-60px] top-1/2 transform -translate-y-1/2 z-10 p-2 text-gray-300 hover:text-white text-xl sm:text-2xl"
          aria-label="Next card"
        >
          {'>'}
        </button>
      </div>
      <div className="flex justify-center space-x-4 md:hidden">
        <button
          onClick={handlePrev}
          className="p-2 text-gray-300 hover:text-white text-2xl"
          aria-label="Previous card"
        >
          {'<'}
        </button>
        <button
          onClick={handleNext}
          className="p-2 text-gray-300 hover:text-white text-2xl"
          aria-label="Next card"
        >
          {'>'}
        </button>
      </div>
    </div>
  );
};
