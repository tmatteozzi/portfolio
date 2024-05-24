'use client';
import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import { motion } from 'framer-motion';

interface ContactState {
    name: string;
    email: string;
    message: string;
}

const buttonMotionConfig = {
    whileHover: {
        scale: 1.1,
        transition: { duration: 0.3 }
    },
    whileTap: {
        scale: 0.9
    }
};

export default function Contact() {
    const [formData, setFormData] = useState<ContactState>({
        name: '',
        email: '',
        message: ''
    });

    const [response, setResponse] = useState<string | null>(null);
    const [errors, setErrors] = useState<{ [key: string]: string }>({});

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        const { name, value } = e.target;
        setFormData((prevState) => ({ ...prevState, [name]: value }));
        // Clear error message when user starts typing again
        setErrors((prevErrors) => ({ ...prevErrors, [name]: '' }));
    };

    const handleSubmit = (
        e: React.MouseEvent<HTMLButtonElement, MouseEvent>
    ) => {
        e.preventDefault();

        // Check for empty fields
        const newErrors: { [key: string]: string } = {};
        Object.entries(formData).forEach(([key, value]) => {
            if (value.trim() === '') {
                newErrors[key] = 'Please fill out this field';
            }
        });

        if (Object.keys(newErrors).length > 0) {
            // If there are errors, set the state to display them
            setErrors(newErrors);
            return; // Prevent form submission
        }

        const serviceId = 'service_9hwd8n9';
        const templateId = 'template_65x3wfc';
        const publicKey = 'F7o1xyqItrAmPmr6_';

        const templateParams = {
            from_name: formData.name,
            from_email: formData.email,
            to_name: 'Tomás Matteozzi',
            message: formData.message
        };

        emailjs.send(serviceId, templateId, templateParams, publicKey).then(
            (response) => {
                console.log('SUCCESS!', response);
                setResponse('Message sent!');
                setFormData({ name: '', email: '', message: '' });
                setTimeout(() => {
                    setResponse(null);
                }, 2000);
            },
            (error) => {
                console.log('FAILED...', error.text);
            }
        );
    };

    const inputStyles =
        'shadow-inner appearance-none bg-gray-200 rounded w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:bg-gray-300';
    const textareaStyles =
        'shadow-inner appearance-none bg-gray-200 rounded w-full py-4 px-3 text-gray-700 leading-tight focus:outline-none focus:bg-gray-300';
    const labelStyles = 'block text-gray-700 text-sm font-bold mb-2 text-left';
    const inputHoverStyles =
        'hover:bg-gradient-to-r from-indigo-100 to-purple-100';

    return (
        <section id="contact" className="pt-8 pb-16 py-4 bg-white text-center">
            <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold text-neutral-700 dark:text-white leading-relaxed lg:leading-snug mb-8 mx-auto">
                Contact
            </h1>
            <div>
                <form
                    className="max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-2xl mx-auto p-4 bg-white"
                    onSubmit={(e) => {
                        e.preventDefault();
                    }}
                >
                    <div className="mb-4 text-left">
                        <label className={labelStyles}>Name:</label>
                        <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                            className={`${inputStyles} ${inputHoverStyles}`}
                        />
                        {errors.name && (
                            <p className="text-sm text-red-500">
                                {errors.name}
                            </p>
                        )}
                    </div>
                    <div className="mb-4 text-left">
                        <label className={labelStyles}>Email:</label>
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            className={`${inputStyles} ${inputHoverStyles}`}
                        />
                        {errors.email && (
                            <p className="text-sm text-red-500">
                                {errors.email}
                            </p>
                        )}
                    </div>
                    <div className="mb-4 text-left">
                        <label className={labelStyles}>Message:</label>
                        <textarea
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            required
                            className={`${textareaStyles} ${inputHoverStyles}`}
                        />
                        {errors.message && (
                            <p className="text-sm text-red-500">
                                {errors.message}
                            </p>
                        )}
                    </div>
                    <div className="flex justify-center">
                        <motion.button
                            onClick={handleSubmit}
                            {...buttonMotionConfig}
                            className="p-[3px] relative"
                        >
                            <div className="absolute inset-0 bg-gradient-to-r from-indigo-300 to-purple-300 rounded-lg" />
                            <div className="px-8 py-2 bg-white rounded-[6px] relative group transition duration-200 text-black font-semibold hover:bg-transparent dark:text-white dark:bg-black dark:hover:text-black">
                                Send
                            </div>
                        </motion.button>
                    </div>
                    {response && (
                        <p className="mt-2 text-sm text-indigo-300 font-semibold">
                            {response}
                        </p>
                    )}
                </form>
            </div>
        </section>
    );
}
