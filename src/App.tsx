import { useState } from "react";
import './App.css'
import Test from "./Test.tsx";

function App() {

  const [income, setIncome] = useState('');
  const [incomet, setIncomet] = useState('');
  const[list, setList] = useState<{ income: string; incomet: string }[]>([]);

  const handleSubmit=(e:any) =>{
    e.preventDefault();
    const data = {
      income: income,
      incomet: incomet
    }
    if(income && incomet) {
      setList([...list,data])
      setIncome("")
      setIncomet("")
    }
  }

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
          placeholder="Income"
          value={income}
          onChange={(e) => setIncome(e.target.value)}
        />
        <button type="submit">Enter</button>
      </form>
      test
      <ul>
        {list.map((item, index) => (
          <li key={index}>{item.incomet} - {item.income}</li>
        ))}
      </ul>
      <Test />
    </div>
  );
  }
export default App
