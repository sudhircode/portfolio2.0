import React from 'react'
import Begin_anim from './Components/Begin_anim'
import { useState, useEffect } from 'react';
import Home from './Components/Home';

export default function App() {
  const [colors, setColors] = useState({
    backgroundColor: '#FCF8F3',
    color: '#192928',
  });
  const toggleColors = () => {
    setColors((prevColors) => ({
      backgroundColor: prevColors.backgroundColor === '#192928' ? '#FCF8F3' : '#192928',
      color: prevColors.color === '#bfea88' ? '#192928' : '#bfea88',
    }));
  };
  const [showFirstComponent, setShowFirstComponent] = useState(true);
  useEffect(() => {
    const timeout = setTimeout(() => {
      setShowFirstComponent(false);
    }, 5000);

    return () => clearTimeout(timeout);
  }, []);

  return <>
    <main>
      <Home colors={colors} toggleColors={toggleColors} />
    </main>
  </>
}
