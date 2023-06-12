import './App.css';
import Numone from './components/Numone'
//import DynamicTable from './components/DynamicTable';
import TableComponent from './components/DynamicTable';

function App(){
  


  return (
    <>
    <h1>Registration Form</h1>
    <Numone/>
    <h2 className="table">Dynamic Table</h2>
    <TableComponent/>
    </>
  );
}

export default App;

