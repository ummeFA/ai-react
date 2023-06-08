import React, { useEffect, useState } from 'react';
import Header from './component/Header/Header';
import Button from './component/Header/Button/Button';
import Card from './component/Card/Card';



const App = () => {

  return (
    <>
      <Header></Header>
      <Button>Sort by date</Button>
      <Card/>
    </>
  );
};

export default App;