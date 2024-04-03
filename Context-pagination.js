// Context

import React, { createContext, useContext, useState, useEffect } from 'react';
import axios from 'axios';

const Context = createContext();

export const DataProvider = ({ children }) => {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  const getdata = async (pageNumber) => {
    try {
      const res = await axios.get(`https://jsonplaceholder.typicode.com/posts?_page=${pageNumber}&_limit=10`);
      setData(res.data);
      const totalCount = res.headers['x-total-count'];
      const calculatedTotalPages = Math.ceil(totalCount / 10);
      setTotalPages(calculatedTotalPages);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getdata(page);
  }, [page]);

  const handlePrevPage = () => {
    setPage((prevPage) => Math.max(prevPage - 1, 1));
  };

  const handleNextPage = () => {
    setPage((prevPage) => Math.min(prevPage + 1, totalPages));
  };

  return (
    <Context.Provider value={{ data, page, totalPages, handlePrevPage, handleNextPage }}>
      {children}
    </Context.Provider>
  );
};

export const useData = () => {
  return useContext(Context);
};


// Home 

import React from 'react';
import { useData } from './Context';

const Home = () => {
  const { data, page, totalPages, handlePrevPage, handleNextPage } = useData();

  return (
    <div>
      <div>
        {data.map((item) => (
          <ul key={item.id}>
            <li>{item.title}</li>
          </ul>
        ))}
      </div>
      <div>
        <button onClick={handlePrevPage} disabled={page === 1}>
          Previous
        </button>
        <span>Page {page} of {totalPages}</span>
        <button onClick={handleNextPage} disabled={page === totalPages}>
          Next
        </button>
      </div>
    </div>
  );
};

export default Home;


// App.js

import logo from './logo.svg';
import './App.css';
import Home from './Pages/Home';
import { DataProvider } from './Pages/Context';

function App() {
  return (
    <DataProvider>
      <div className="App">
        <Home />
      </div>
    </DataProvider>
  );
}

export default App;

