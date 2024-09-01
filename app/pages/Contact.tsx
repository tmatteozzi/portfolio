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

  const handleSubmit = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
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
      return;
    }

    const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!;
    const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!;
    const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!;

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
      className="pt-16 pb-16 py-4 bg-gradient-to-b from-indigo-950 via-indigo-950 to-gray-950 text-center"
    >
      <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold text-gray-50 leading-relaxed lg:leading-snug mb-8 mx-auto">
        Contact
      </h1>
      <div>
        <form
          className="max-w-6xl mx-auto p-4"
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
              <div className="px-8 py-2 rounded-[6px] border-[0.2vw] relative group transition duration-200 font-semibold text-white border-gray-500 hover:bg-indigo-950 hover:border-gray-300">
                Send
              </div>
            </motion.button>
          </div>
          {response && (
            <p className="mt-4 text-sm text-gray-200 font-medium">{response}</p>
          )}
        </form>
      </div>
    </section>
  );
}
