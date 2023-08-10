import { useState } from "react";
import './App.css'

function Expenses (props:any) {

    //const [expenset, setexpenset] = useState('');
    //const [props., setexpense] = useState(0);
    //const[list, setList] = useState<{ expenset: string, expense: number;  }[]>([]);
  
    const handleSubmit=(e:any) =>{
      e.preventDefault();
      const data = {
        expense: props.expense,
        expenset: props.expenset
      }
      if(props.expenset) {
        props.setList1([...props.list1,data])
        props.setexpense(0)
        props.setexpenset("")
      }
    }
  
    return (
      <div className="App">
        <p>Expenses</p>
        <form onSubmit={handleSubmit}>
          <input
            placeholder="expense Type"
            value={props.expenset}
            onChange={(e) => props.setexpenset(e.target.value)}
          />
          <input
            type="number"
            placeholder="expense"
            value={props.expense}
            onChange={(e) => props.setexpense(parseFloat(e.target.value))}
          />
          <button type="submit">Enter</button>
        </form>
        
        <ul>
          {props.list1.map((item:any, index:any) => (
            <li key={index}>{item.expenset} - {item.expense}</li>
          ))}
        </ul>
        
      </div>
    );
    }
  //export {totalExpenses};
  export default Expenses;
  