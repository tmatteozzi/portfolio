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
    <div className="relative flex justify-center items-center w-full h-full">
      {cards.map((card, index) => (
        <motion.div
          key={card.id}
          className="absolute bg-gradient-to-b from-gray-950 via-gray-950 to-indigo-950 h-72 w-[40vw] rounded-3xl p-6 shadow-xl border border-gray-500 shadow-white/[0.025] flex flex-col justify-top"
          style={{
            transformOrigin: 'top center'
          }}
          animate={{
            top: index * -CARD_OFFSET,
            scale: 1 - index * SCALE_FACTOR,
            zIndex: cards.length - index
          }}
        >
          <button
            onClick={handlePrev}
            className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-50 text-2xl"
          >
            {'<'}
          </button>
          <button
            onClick={handleNext}
            className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-50 text-2xl"
          >
            {'>'}
          </button>
          <div className="px-8">
            <p className="font-semibold text-lg text-gray-50">{card.name}</p>
            <div className="mt-4 font-normal text-neutral-200">
              {card.content}
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
};
