import { useRef, useState, useEffect } from 'react';

const sizeMap = {
  80: 'w-[80%]',
  85: 'w-[85%]',
  90: 'w-[90%]',
  95: 'w-[95%]',
};

const Stat = ({ title, percent, size }) => {
  const mappedSize = sizeMap[size];
  const [isVisible, setIsVisible] = useState(false);
    const barRef = useRef();

    const options = {
      rootMargin: '-10px',
    };

    useEffect(() => {
      const observer = new IntersectionObserver((entries) => {
        const entry = entries[0];
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      }, options);

      observer.observe(barRef.current);
      // eslint-disable-next-line
    }, []);

  return (
    <div>
      <h3 className='font-semibold text-lg leading-5 uppercase text-ghostWhite'>
        {title}
      </h3>
      <div className='flex items-center'>
        <div
          ref={barRef}
          className={
            isVisible
              ? 'w-full flex items-center animate-expand shadow-2xl'
              : ''
          }
        >
          <div
            className={
              isVisible ? `${mappedSize} h-3 rounded-lg bg-ghostWhite` : ''
            }
          ></div>
        </div>
        <div>
          <span className='ml-2 font-bold text-lg text-ghostWhite'>
            {percent}%
          </span>
        </div>
      </div>
    </div>
  );
};

export default Stat;
