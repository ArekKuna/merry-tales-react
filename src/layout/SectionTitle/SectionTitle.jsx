import React from 'react'

const SectionTitle = ({ title, text }) => {
  return (
    <div className='text-center text-white uppercase tracking-wide space-y-2'>
      <h2 className='text-4xl font-bold tracking-widest'>{title}</h2>
      <p className='text-lg'>{text}</p>
    </div>
  );
};

export default SectionTitle