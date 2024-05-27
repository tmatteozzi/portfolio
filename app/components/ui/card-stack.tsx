'use client';
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/app/utils/cn';

let interval: any;

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

    useEffect(() => {
        startFlipping();

        return () => clearInterval(interval);
    }, []);
    const startFlipping = () => {
        interval = setInterval(() => {
            setCards((prevCards: Card[]) => {
                const newArray = [...prevCards]; // create a copy of the array
                newArray.unshift(newArray.pop()!); // move the last element to the front
                return newArray;
            });
        }, 5000);
    };

    return (
        <div className="relative  h-60 w-60 md:h-60 md:w-96">
            {cards.map((card, index) => {
                return (
                    <motion.div
                        key={card.id}
                        className="absolute dark:bg-gray-900 bg-white h-60 w-60 md:h-60 md:w-96 rounded-3xl p-4 shadow-xl border border-neutral-200 dark:border-white/[0.1]  shadow-black/[0.1] dark:shadow-white/[0.025] flex flex-col justify-top"
                        style={{
                            transformOrigin: 'top center'
                        }}
                        animate={{
                            top: index * -CARD_OFFSET,
                            scale: 1 - index * SCALE_FACTOR, // decrease scale for cards that are behind
                            zIndex: cards.length - index //  decrease z-index for the cards that are behind
                        }}
                    >
                        <p className="text-gray-800 font-semibold dark:text-white">
                            {card.name}
                        </p>
                        <div className="mt-4 font-normal text-neutral-700 dark:text-neutral-200">
                            {card.content}
                        </div>
                    </motion.div>
                );
            })}
        </div>
    );
};
export const Highlight = ({
    children,
    className
}: {
    children: React.ReactNode;
    className?: string;
}) => {
    return (
        <span
            className={cn(
                'font-bold bg-indigo-100 text-indigo-500 dark:bg-indigo-700/[0.2] dark:text-indigo-500 px-1 py-0.5',
                className
            )}
        >
            {children}
        </span>
    );
};
