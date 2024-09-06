import { useEffect } from 'react';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  isSuccess: boolean;
}

export default function Modal({ isOpen, onClose, isSuccess }: ModalProps) {
  useEffect(() => {
    const originalStyle = window.getComputedStyle(document.body).overflow;

    if (isOpen) {
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.body.style.overflow = originalStyle;
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div
      onClick={onClose}
      className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-80"
    >
      <div
        className="bg-gray-900 rounded-2xl p-8 max-w-lg w-full mx-8"
        onClick={(e) => e.stopPropagation()}
      >
        <h2 className="text-gray-50 text-xl font-semibold mb-3">
          {isSuccess ? 'Message Sent!' : 'Error Sending Message'}
        </h2>
        <p className="text-gray-300 mb-6">
          {isSuccess
            ? 'Your message has been sent successfully. I will get back to you soon.'
            : 'There was an issue sending your message. Please try again later.'}
        </p>
        <div className="flex justify-end">
          <button
            className="w-full px-4 py-2 bg-indigo-600 text-primary-foreground rounded-md hover:bg-indigo-700 transition"
            onClick={onClose}
          >
            OK
          </button>
        </div>
      </div>
    </div>
  );
}
