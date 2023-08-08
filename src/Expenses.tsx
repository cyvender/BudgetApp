import { useState } from "react";
import './App.css'

function Expenses () {

    const [expenset, setexpenset] = useState('');
    const [expense, setexpense] = useState(0);
    const[list, setList] = useState<{ expenset: string, expense: number;  }[]>([]);
  
    const handleSubmit=(e:any) =>{
      e.preventDefault();
      const data = {
        expense: expense,
        expenset: expenset
      }
      //if(expense && expenset) {
        setList([...list,data])
        setexpense(0)
        setexpenset("")
      //}
    }
  
    return (
      <div className="App">
        <p>Expenses</p>
        <form onSubmit={handleSubmit}>
          <input
            placeholder="expense Type"
            value={expenset}
            onChange={(e) => setexpenset(e.target.value)}
          />
          <input
            type="number"
            placeholder="expense"
            value={expense}
            onChange={(e) => setexpense(parseFloat(e.target.value))}
          />
          <button type="submit">Enter</button>
        </form>
  
        <ul>
          {list.map((item, index) => (
            <li key={index}>{item.expenset} - {item.expense}</li>
          ))}
        </ul>
      </div>
    );
    }
  export default Expenses
  