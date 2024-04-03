// Home

import React from 'react';

const Home = ({ data, page, totalPages, handlePrevPage, handleNextPage }) => {
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


// Home Container


import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Home from './Home';

const HomeContainer = () => {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  const getData = async (pageNumber) => {
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
    getData(page);
  }, [page]);

  const handlePrevPage = () => {
    setPage((prevPage) => Math.max(prevPage - 1, 1));
  };

  const handleNextPage = () => {
    setPage((prevPage) => Math.min(prevPage + 1, totalPages));
  };

  return (
    <Home
      data={data}
      page={page}
      totalPages={totalPages}
      handlePrevPage={handlePrevPage}
      handleNextPage={handleNextPage}
    />
  );
};

export default HomeContainer;


//App.js

import React from 'react';
import HomeContainer from './components/HomeContainer';

const App = () => {
  return (
    <div className="App">
      <HomeContainer />
    </div>
  );
};

export default App;



