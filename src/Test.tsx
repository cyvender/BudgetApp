import { useState } from "react";

function Test () {

    const [expense, setexpense] = useState('');
    const [expenset, setexpenset] = useState('');
    const[list, setList] = useState<{ expense: string; expenset: string }[]>([]);
  
    const handleSubmit=(e:any) =>{
      e.preventDefault();
      const data = {
        expense: expense,
        expenset: expenset
      }
      if(expense && expenset) {
        setList([...list,data])
        setexpense("")
        setexpenset("")
      }
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
            placeholder="expense"
            value={expense}
            onChange={(e) => setexpense(e.target.value)}
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
  export default Test
  