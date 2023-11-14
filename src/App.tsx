import { useState } from "react";
import './App.css'
import Expenses from "./Expenses.tsx";
import ExpenseList from "./PresetExpenseList.tsx";


function App() {
  
  const [incomet, setIncomet] = useState('');
  const [income, setIncome] = useState(0);
  const [list, setList] = useState<{ incomet: string; income: number; }[]>([]);
  const [expense, setexpense] = useState(0);
  const [expenset, setexpenset] = useState('');
  const [list1, setList1] = useState<{ expenset: string; expense: number;  }[]>([]);
  const [expenseList, setExpenseList] = useState(false)
  //const [expenseListTotal, setExpenseListTotal] = useState(0);

  const handleSubmit=(e:any) => {
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
  let totalExpenses = 0;
  for (const item of list1) {
    totalExpenses += item.expense;
  }
  console.log(totalIncome)
  console.log(totalExpenses)

  let monthly = totalIncome - totalExpenses;
  //don't need below for loop
  //for (totalIncome; totalExpenses) {
    //monthly += totalIncome + totalExpenses;
  //}
  console.log(monthly)

  //default list 
  
    //function useDefault(){
      //ExpenseList();
    //}
    
      const useDefaultList = () => {
        setExpenseList(!expenseList)
      };

  return (
    <div className="App">
      <h1>Budget App</h1>
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
          <li key={index}>{item.incomet}: {item.income}</li>
        ))}
      </ul>
      <>Total income: {totalIncome}</>
      <p>Expenses</p>

      <button onClick={useDefaultList}>Use Default</button> 
      {expenseList && <ExpenseList />}

      <Expenses expense={expense} 
                setexpense={setexpense} 
                expenset={expenset} 
                setexpenset={setexpenset}
                totalExpenses={totalExpenses}
                list1={list1}
                setList1={setList1}/>

      
      <br/>
      <>Total expenses: {totalExpenses}</>
      <br/><br/>
      <>Monthly: {monthly}</>
      <br/>
      
      <br/><br/>
      Good Job
      
    </div>
  );
  }
export default App

