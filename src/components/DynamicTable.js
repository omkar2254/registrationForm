import { useEffect } from "react";
// import TableData from "./components/Information";
import React from 'react';

const TableComponent = () => {
  const column = [
    {id:1, fullName:"Jenny Dosuza", age:25, city:"Canda"},
    {id:2, fullName:"Rapsan Jani", age:26, city:"Noida"},
    {id:3, fullName:"Monika Singh", age:18, city:"New Delhi"},
    {id:4, fullName:"Sunil Kumar", age:22, city: "Jaipur"},
    {id:5, fullName:"Kajol Kumari", age: 21, city: "Chennai"}
  ];

  return (
    <table className="table">
      <thead>
        <tr>
          <th>ID</th>
          <th>Full Name</th>
          <th>Age</th>
          <th>City</th>
        </tr>
      </thead>
      <tbody>
        {column.map((data) => (
          <tr key={data.id}>
            <td>{data.id}</td>
            <td>{data.fullName}</td>
            <td>{data.age}</td>
            <td>{data.city}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default TableComponent;

