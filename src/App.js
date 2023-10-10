
import './App.css';

import Home from './templatecontainer/Home';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import axios from 'axios';
import { useState, useEffect, createContext } from "react";
import Layout from './templatecontainer/Layout';
import AddPerson from './templatecontainer/AddPerson'

export const personContext = createContext();

function App() {
  const [persons, setPersons] = useState([]);

  useEffect(() => {
        axios(`http://192.168.17.103:5000/students`, {
            method: 'GET'
        }).then(response => {
            setPersons(response.data);
          })
    }, []);  
  
  return (
    <personContext.Provider value={{ persons, setPersons}}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />} >
            <Route index element={<Home />} />
            <Route path='/home' element={<Home />} />
            <Route path='/addPerson' element={<AddPerson />} />
          </Route>
        </Routes> 
        </BrowserRouter>
      </personContext.Provider>
  );
}

export default App;
