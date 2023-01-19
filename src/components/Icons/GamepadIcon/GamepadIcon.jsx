import React from 'react';

const GamepadIcon = ({ className }) => {
  return (
    <svg
      stroke='currentColor'
      fill='currentColor'
      strokeWidth='0'
      viewBox='0 0 24 24'
      height='1em'
      width='1em'
      xmlns='http://www.w3.org/2000/svg'
      className={className}
    >
      <path
        fill='none'
        stroke='currentColor'
        strokeWidth='2'
        d='M12,6 L12,2 M12,6 C14.4983324,6.0444148 16.0056152,6 17,6 C19,6 21,6.5 22,10 C23,13.5 23,15.5 23,18 C23,20.5 21,21 19,21 C17,21 15.9456522,17 12,17 C8.05434783,17 7,21 5,21 C3,21 1,20.5 1,18 C1,15.5 1,13.5 2,10 C3,6.5 5,6 7,6 C7.99438477,6 9.50166757,6.0444148 12,6 L12,6 L12,6 Z M18,15 C18.5522847,15 19,14.5522847 19,14 C19,13.4477153 18.5522847,13 18,13 C17.4477153,13 17,13.4477153 17,14 C17,14.5522847 17.4477153,15 18,15 Z M14,12 C14.5522847,12 15,11.5522847 15,11 C15,10.4477153 14.5522847,10 14,10 C13.4477153,10 13,10.4477153 13,11 C13,11.5522847 13.4477153,12 14,12 Z M4,12 L10,12 M7,9 L7,15'
      ></path>
    </svg>
  );
};

export default GamepadIcon;
