'use client';
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import emailjs from 'emailjs-com';
import Input from '../components/Input';

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

    return (
        <section
            id="contact"
            className="pt-8 pb-16 py-4 bg-gradient-to-r from-white via-indigo-50 to-white dark:from-gray-900 dark:via-gray-950 dark:to-black text-center"
        >
            <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold text-neutral-700 dark:text-white leading-relaxed lg:leading-snug mb-8 mx-auto">
                Contact
            </h1>
            <div>
                <form
                    className="max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-2xl mx-auto p-4"
                    onSubmit={(e) => {
                        e.preventDefault();
                    }}
                >
                    <Input
                        label="Name"
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        error={errors.name}
                    />
                    <Input
                        label="Email"
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        error={errors.email}
                    />
                    <Input
                        label="Message"
                        type="textarea"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        error={errors.message}
                    />
                    <div className="flex justify-center">
                        <motion.button
                            onClick={handleSubmit}
                            {...buttonMotionConfig}
                            className="p-[3px] relative"
                        >
                            <div className="absolute inset-0 bg-gradient-to-r from-indigo-300 to-purple-300 dark:from-indigo-500 dark:to-purple-500 rounded-lg" />
                            <div className="px-8 py-2 bg-white rounded-[6px] relative group transition duration-200 text-black font-semibold hover:bg-transparent dark:text-white dark:bg-gray-950 dark:hover:text-black">
                                Send
                            </div>
                        </motion.button>
                    </div>
                    {response && (
                        <p className="mt-2 text-sm text-indigo-300 dark:text-indigo-500 font-semibold">
                            {response}
                        </p>
                    )}
                </form>
            </div>
        </section>
    );
}
