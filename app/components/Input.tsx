import React, { ChangeEvent } from 'react';

interface InputProps {
    label: string;
    type: 'text' | 'email' | 'password' | 'textarea';
    name: string;
    value: string;
    onChange: (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
    required?: boolean;
    error?: string | null;
}

export default function Input({
    label,
    type,
    name,
    value,
    onChange,
    required = false,
    error = null
}: InputProps) {
    const inputStyles =
        'dark:text-white shadow-inner dark:shadow-gray-850 appearance-none bg-gray-200 dark:bg-gray-900 rounded w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:bg-gradient-to-r focus:from-indigo-100 focus:to-purple-100 dark:focus:from-indigo-500 dark:focus:to-purple-500';
    const inputHoverStyles = 'hover:bg-gray-300 dark:hover:bg-gray-800';

    return (
        <div className="mb-4 text-left">
            <label className="block text-gray-700 dark:text-white text-sm font-bold mb-2 text-left">
                {label}:
            </label>
            {type === 'textarea' ? (
                <textarea
                    name={name}
                    value={value}
                    onChange={onChange}
                    required={required}
                    className={`${inputStyles} ${inputHoverStyles}`}
                />
            ) : (
                <input
                    type={type}
                    name={name}
                    value={value}
                    onChange={onChange}
                    required={required}
                    className={`${inputStyles} ${inputHoverStyles}`}
                />
            )}
            {error && <p className="text-sm text-red-500">{error}</p>}
        </div>
    );
}
