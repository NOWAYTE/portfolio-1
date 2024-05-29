import React from 'react';
import { motion } from 'framer-motion';
import AnimatedLetters from './AnimatedLetters';
import { EnvelopeIcon, MapPinIcon, PhoneIcon } from '@heroicons/react/24/solid';
import { useForm, SubmitHandler } from 'react-hook-form';

type Inputs = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

type Props = {};

function ContactMe({}: Props) {
  const strArray = 'let\'s talk'.split('');
  const { 
    register,
    handleSubmit, 
    formState: { errors } 
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = formData =>
    {
      window.location.href = `mailto:danielkamaunganga3@gmail.com?subject=${formData.subject}&body=
      ${formData.message}, (${formData.email})`
    };

  return (
    <div
      className='h-screen flex relative flex-col text-center md:text-left
      md:flex-row max-w-7xl px-10 justify-center mx-auto items-center'
    >
      <h3
        className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl'
      >
        ContactMe
      </h3>
      <div className='flex flex-col space-y-10'>
        <h4 className='text-5xl font-semibold text-center'>
          <AnimatedLetters
            letterClass='letter'
            strArray={strArray}
            idx={15}
          />
        </h4>
        <div className='space-y-10'>
          <div className='flex items-center space-x-5'>
            <PhoneIcon className='text-[#F7AB0A] h-7 w-7 animate-pulse'/>
            <p className='text-2xl'>+254 768533001</p>
          </div>
          <div className='flex items-center space-x-5'>
            <EnvelopeIcon className='text-[#F7AB0A] h-7 w-7 animate-pulse'/>
            <p className='text-2xl'>danielkamaunganga3@gmail.com</p>
          </div>
          <div className='flex items-center space-x-5'>
            <MapPinIcon className='text-[#F7AB0A] h-7 w-7 animate-pulse'/>
            <p className='text-2xl'>5196-0200 Nairobi</p>
          </div>
        </div>
        <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col space-y-2 w-fit mx-auto'>
          <div className='flex space-x-2'>
            <input 
              {...register('name', { required: true })} 
              placeholder='Name' 
              className='contactInput' 
              type='text'
            />
            {errors.name && <span className="text-red-500">Name is required</span>}
            <input 
              {...register('email', { required: true })} 
              placeholder='Email' 
              className='contactInput' 
              type='text'
            />
            {errors.email && <span className="text-red-500">Email is required</span>}
          </div>
          <input 
            {...register('subject', { required: true })} 
            placeholder='Subject' 
            className='contactInput' 
            type='text'
          />
          {errors.subject && <span className="text-red-500">Subject is required</span>}
          <textarea 
            {...register('message', { required: true })} 
            placeholder='Message' 
            className='contactInput'
          ></textarea>
          {errors.message && <span className="text-red-500">Message is required</span>}
          <button 
            type='submit' 
            className='bg-[#F7AB0A] py-5 px-10 rounded-md text-black font-bold'
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default ContactMe;
