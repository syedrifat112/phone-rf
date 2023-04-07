import React from 'react';
import Header from './component/Header';
import { Outlet } from 'react-router-dom';
import Footer from '../Footer';

const App = () => {
  return (
    <div className='w-[90%] mx-auto'>
      <Header className= 'mb-4'></Header>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default App;