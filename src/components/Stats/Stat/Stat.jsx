import { useRef, useState, useEffect } from 'react';

const sizeMap = {
  sm: 'w-[85%]',
  m: 'w-[90%]',
  lg: 'w-[95%]',
};

const Stat = ({ title, percent, size }) => {
  const mappedSize = sizeMap[size];
  const [isVisible, setIsVisible] = useState(false);
  const barRef = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      const entry = entries[0];
      if (entry.isIntersecting) {
        setIsVisible(true);
      }
    });

    observer.observe(barRef.current);
  }, []);

  return (
    <div>
      <h3>{title}</h3>
      <div className='flex items-center'>
        <div
          ref={barRef}
          className={isVisible ? 'w-full flex items-center animate-expand' : ''}
        >
          <div
            className={isVisible ? `${mappedSize} h-2 bg-red-500` : ''}
          ></div>
        </div>
        <div>
          <span className='ml-2'>{percent}%</span>
        </div>
      </div>
    </div>
  );
};

export default Stat;
