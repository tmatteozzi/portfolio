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
    'border border-gray-300 bg-transparent text-white shadow-inner shadow-gray-850 appearance-none rounded-xl w-full py-3 px-3 leading-tight focus:outline-none focus:border-gray-100';
  const inputHoverStyles = 'hover:border-gray-100';

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
          className={`${inputStyles} ${inputHoverStyles} h-32`}
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
      <style jsx>{`
        input:-webkit-autofill {
          -webkit-box-shadow: 0 0 0px 1000px transparent inset;
          box-shadow: 0 0 0px 1000px transparent inset;
          -webkit-text-fill-color: #f9fafb !important;
          backdrop-filter: blur(10px);
          background-color: none !important;
          transition: background-color 5000s ease-in-out 0s;
        }
      `}</style>
      {error && <p className="text-sm text-red-500 mt-2">{error}</p>}
    </div>
  );
}
