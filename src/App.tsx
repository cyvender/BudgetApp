import { useState } from "react";
import './App.css'
import Test from "./Test.tsx";

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
    if(income && incomet) {
      setList([...list,data])
      setIncome(0)
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
