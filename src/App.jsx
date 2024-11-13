import React, { useState } from 'react';

import Charts from './components/Charts';
import Navbar from './components/Navbar';
import { data } from './data.js';
import { useLocalStorage } from './hooks/useLocalStorage';
import { useDarkMode } from './hooks/useDarkMode';

const App = () => {
  const [coinData, setCoinData] = useLocalStorage('coinData', data);
  const [geceModu, setGeceModu] = useDarkMode(false);
  console.log(geceModu);
  return (
    <div className={`App ${geceModu ? 'dark-mode' : ''}`}>
      <Navbar geceModu={geceModu} setGeceModu={setGeceModu} />
      <Charts coinData={coinData} />
    </div>
  );
};

export default App;
