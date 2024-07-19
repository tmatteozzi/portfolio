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
        'text-white shadow-inner shadow-gray-850 appearance-none bg-gray-900 rounded w-full py-3 px-3 leading-tight focus:outline-none focus:bg-gradient-to-r focus:from-indigo-500 focus:to-purple-500';
    const inputHoverStyles = 'hover:bg-gray-800';

    return (
        <div className="mb-4 text-left">
            <label className="block text-white text-sm font-bold mb-2 text-left">
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
