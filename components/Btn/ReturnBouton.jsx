'use client'
import React, { useEffect, useState } from 'react';

const ReturnButton = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const windowHeight = window.innerHeight;
      const documentHeight = document.body.offsetHeight;

      if (scrollTop > 100 && scrollTop < documentHeight - windowHeight) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <a
      className="bg-secondary-color hover:bg-primary-color text-white font-bold py-2 px-4 rounded-full fixed right-6 bottom-6 mt-4 mr-4 max-md:hidden"
      style={{ display: visible ? 'block' : 'none' }}
      href='#haut'
    >
      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g>
      <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
      <g id="SVGRepo_iconCarrier"> <path d="M12 5V19M12 5L6 11M12 5L18 11" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
        Haut
    </a>
  );
};

export default ReturnButton;