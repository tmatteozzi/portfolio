'use client';
import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';
import Input from '../components/Input';
import ModalComponent from '../components/Modal';
import SectionContainer from '../components/SectionContainer';

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

  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({ ...prevState, [name]: value }));
    setErrors((prevErrors) => ({ ...prevErrors, [name]: '' }));
  };

  const handleSubmit = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();

    // Validación de campos vacíos
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

    emailjs.sendForm(serviceId, templateId, formRef.current!, publicKey).then(
      () => {
        setIsSuccess(true);
        setIsModalOpen(true); // Abre el modal en caso de éxito
        setFormData({ name: '', email: '', message: '' });
      },
      (error) => {
        console.log('FAILED...', error.text);
        setIsSuccess(false);
        setIsModalOpen(true); // Abre el modal en caso de error
      }
    );
  };

  return (
    <SectionContainer
      id="contact"
      className="bg-gradient-to-b from-indigo-950 via-indigo-950 to-gray-900"
    >
      <div className="w-full lg:w-[80%] flex flex-col justify-center items-center mx-auto">
        <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold text-white mb-16 mx-auto">
          Contact
        </h1>
        <div className="w-full lg:w-[80%]">
          <form
            ref={formRef}
            className="py-4"
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
                <div className="px-8 py-2 rounded-[6px] border relative group transition duration-200 font-semibold text-white border-gray-200 hover:bg-indigo-950 hover:border-gray-100">
                  Send
                </div>
              </motion.button>
            </div>
          </form>
        </div>
      </div>

      {/* Modal */}
      <ModalComponent
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        isSuccess={isSuccess}
      />
    </SectionContainer>
  );
}
