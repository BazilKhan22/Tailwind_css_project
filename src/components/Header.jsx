import React from 'react';
import Button from './Button';

const Header = () => {
  return (
    <div>
      <header className="flex flex-row justify-between items-center p-4 shadow-md bg-amber-100">
        <h1><span>B</span>rand</h1>
        <div className="flex flex-row gap-8">
          <a href="#">Feature</a>
          <a href="#">Use cases</a>
          <a href="#">Integration</a>
          <a href="#">About us</a>
        </div>
        <Button title="join wallet"/>
      </header>
    </div>
  );
};

export default Header;
