import React, { useState, useEffect } from "react";

const fetchData = async (page, filter, sortBy) => {
  const response = await fetch(`https://jsonplaceholder.typicode.com/todos`);
  const data = await response.json();

  // Apply filtering
  let filteredData = data;
  if (filter) {
    filteredData = filteredData.filter((item) =>
      item.name.toLowerCase().includes(filter.toLowerCase())
    );
  }

  // Apply sorting
  if (sortBy === "asc") {
    filteredData.sort((a, b) => a.name.localeCompare(b.name));
  } else if (sortBy === "desc") {
    filteredData.sort((a, b) => b.name.localeCompare(a.name));
  }

  // Apply pagination
  const startIndex = (page - 1) * 10;
  const paginatedData = filteredData.slice(startIndex, startIndex + 10);

  return paginatedData;
};

const MyComponent = () => {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  const [filter, setFilter] = useState("");
  const [sortBy, setSortBy] = useState("");

  useEffect(() => {
    const fetchDataAsync = async () => {
      const result = await fetchData(page, filter, sortBy);
      setData(result);
    };

    fetchDataAsync();
  }, [page, filter, sortBy]);

  return (
    <div>
      <h1>User List</h1>

      {/* Pagination */}
      <button onClick={() => setPage(page - 1)} disabled={page === 1}>
        Previous
      </button>
      <button onClick={() => setPage(page + 1)}>Next</button>

      {/* Filter */}
      <input
        type="text"
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
        placeholder="Filter by name..."
      />

      {/* Sort */}
      <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
        <option value="">None</option>
        <option value="asc">Ascending</option>
        <option value="desc">Descending</option>
      </select>

      {/* Render data */}
      <ul>
        {data.map((user) => (
          <li key={user.id}>{user.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default MyComponent;
