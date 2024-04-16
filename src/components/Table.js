import React, { useState, useEffect } from 'react';
import TableRow from './TableRow';

const Table = ({ colleges, sortBy, sortOrder, searchTerm, onSort }) => {
  const [visibleRows, setVisibleRows] = useState(10); // Number of rows initially visible

  // Filter and sort the colleges based on search term and sorting criteria
  const filteredColleges = colleges.filter(college =>
    college.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const sortedColleges = filteredColleges.sort((a, b) => {
    if (sortBy) {
      const fieldA = a[sortBy];
      const fieldB = b[sortBy];
      let comparison = 0;
      if (fieldA < fieldB) {
        comparison = -1;
      } else if (fieldA > fieldB) {
        comparison = 1;
      }
      return sortOrder === 'asc' ? comparison : -comparison;
    }
    return 0;
  });

  // Load more rows when scrolled to bottom
  const handleScroll = (e) => {
    const bottom =
      e.target.scrollHeight - e.target.scrollTop === e.target.clientHeight;
    if (bottom) {
      setVisibleRows(prevVisibleRows => prevVisibleRows + 10);
    }
  };

  return (
    <div className="table-container" onScroll={handleScroll}>
      <table>
        <thead>
          <tr>
            <th onClick={() => onSort('cdRank')}>CD Rank</th>
            <th onClick={() => onSort('name')}>College</th>
            <th onClick={() => onSort('fees')}>Fees</th>
            <th onClick={() => onSort('averagePackage')}>AveragePackage</th>
            <th onClick={() => onSort('highestPackage')}>HighestPackage</th>
            <th onClick={() => onSort('userReviews')}>Reviews</th>
            <th onClick={() => onSort('ranking')}>Rank</th>
          </tr>
        </thead>
        <tbody style={{ height: '400px', overflowY: 'auto' }}>
          {sortedColleges.slice(0, visibleRows).map(college => (
            <TableRow key={college.id} college={college} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
