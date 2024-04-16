import React, { useState } from 'react';
import Table from './components/Table';
import jsonData from './data/collegesData.json';
import './App.css';

function App() {
  const [colleges, ] = useState(jsonData);
  const [sortBy, setSortBy] = useState(null);
  const [sortOrder, setSortOrder] = useState('asc');
  const [searchTerm, setSearchTerm] = useState('');

  const handleSort = sortByField => {
    if (sortByField === sortBy) {
      setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
    } else {
      setSortBy(sortByField);
      setSortOrder('asc');
    }
  };

  const handleSearch = event => {
    setSearchTerm(event.target.value);
  };

  return (
    <div className="App">

<p>
    Task:<br/>
    1) Sorting: To sort the data, click on the table heading or title.<br/>
    2) Searching: To search for a college, use the search field below.<br/>
    3) Infinite Scroll: Infinite scroll feature has been applied, but it will only work when there is a large amount of data(API).
</p>


      <input
        type="text"
        placeholder="Search by college name"
        value={searchTerm}
        onChange={handleSearch}
      />
      <br/>
      <br/>
      <br/>
      <Table
        colleges={colleges}
        sortBy={sortBy}
        sortOrder={sortOrder}
        searchTerm={searchTerm}
        onSort={handleSort}
      />
    </div>
  );
}

export default App;
