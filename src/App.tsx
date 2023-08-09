import { useState } from "react";
import './App.css'
import Expenses from "./Expenses.tsx";
//import { go } from "./Expenses.tsx";
//console.log(go);

function App() {

  const [incomet, setIncomet] = useState('');
  const [income, setIncome] = useState(0);
  const[list, setList] = useState<{ incomet: string; income: number; }[]>([]);

  const handleSubmit=(e:any) =>{
    e.preventDefault();
    const data = {
      income: income,
      incomet: incomet
    }
    if(incomet) {
      setList([...list,data])
      setIncome(0)
      setIncomet("")
    }
  }
  let totalIncome = 0;
  for (const item of list) {
    totalIncome += item.income;
  }
  console.log(income)
  return (
    <div className="App">
      <h1>Budgeting App</h1>
      <p>Income</p>
      <form onSubmit={handleSubmit}>
        <input
          placeholder="Income Type"
          value={incomet}
          onChange={(e) => setIncomet(e.target.value)}
        />
        <input
          type="number"
          placeholder="Income"
          value={income}
          onChange={(e) => setIncome(parseFloat(e.target.value))}
        />
        <button type="submit">Enter</button>
      </form>
       
      <ul>
        {list.map((item, index) => (
          <li key={index}>{item.incomet} - {item.income}</li>
        ))}
      </ul>
      <>Total income: {totalIncome}</>
      <Expenses />
      bases
      
    </div>
  );
  }
export default App

