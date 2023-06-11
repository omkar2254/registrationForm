import { useEffect } from "react";
// import TableData from "./components/Information";
export default function DynamicTable(){

  const column = [
    {id:1, fullName:"Jenny Dosuza", age:25, city:"Canda"},
    {id:2, fullName:"Rapsan Jani", age:26, city:"Noida"},
    {id:3, fullName:"Monika Singh", age:18, city:"New Delhi"},
    {id:4, fullName:"Sunil Kumar", age:22, city: "Jaipur"},
    {id:5, fullName:"Kajol Kumari", age: 21, city: "Chennai"}
  ];
  
  const TableComponent = () => {
    // get table heading data
    const ThData = () => {
      return column.map((data) => {
        return <th key={data.id}>{data.fullName}</th>;
      });
    };
  
    // get table row data
    const tdData = () => {
      return column.map((data) => {
        return (
          <tr key={data.id}>
            <td>{data.id}</td>
            <td>{data.fullName}</td>
            <td>{data.age}</td>
            <td>{data.city}</td>
          </tr>
        );
      });
    };
  
    return (
      <table className="table">
        <thead>
          <tr>{ThData()}</tr>
        </thead>
        <tbody>{tdData()}</tbody>
      </table>
    );
  };
  
}
