import React, { useState } from 'react';
import './App.css';
import Main from './components/main/Main';
import Header from './components/header/Header';

function App() {
 
  const [search, setSearch] = useState('')
  const [searchcategory, setSearchCategory] = useState(false)
  const [show, setShow] = useState(true)

  return (
    <div>
     <Header setShow={setShow} setSearch={setSearch} setSearchCategory={setSearchCategory} />
     <Main show={show} setShow={setShow} search={search} setSearch={setSearch} searchcategory={searchcategory} 
     setSearchCategory={setSearchCategory} />
    </div>
  );
}

export default App;
