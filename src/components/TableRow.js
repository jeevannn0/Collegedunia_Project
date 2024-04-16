// CollegeRow.js
import React from 'react';


const TableRow = ({ college }) => {
  return (
    <tr>
      <td>{college.cdRank}</td>
      <td><img src={college.logo} alt="College Logo" className="college-logo" />
        {college.name} <p>Featured</p></td>
      <td>{college.courseFees}</td>
      <td>{college.averagePackage}</td>
      <td>{college.highestPackage}</td>
      <td>{college.userReviews}</td>
      <td>{college.ranking}</td>
      {/* Add more columns as needed */}
    </tr>
  );
};

export default TableRow;
