


function ExpenseList(props:any) {

  const expenseTypes = ["Food", "Car", "Rent"]

    /*const handleSubmit=(e:any) =>{
        e.preventDefault();
        const data = {
          expenset: props.expenset,
          expense: props.expense
        }
        
          props.setList1([...props.list1,data])
          props.setexpense(0)
      }*/

return (
    <div className="App">

        {expenseTypes.map((item, index) => (
          <li key={index}>
              {item}:
        <input
            type="number"
            placeholder="expense"
            value={props.expense}
            onChange={(e) => props.setexpense(parseFloat(e.target.value))}
          />
          <button>
            Enter
          </button><br/> 
          </li>
          ))}
          {/*
          Car
          <input
            type="number"
            placeholder="expense"
            value={props.expense}
            onChange={(e) => props.setexpense(parseFloat(e.target.value))}
          /><button type="submit">Enter</button><br/>
          Rent
          <input
            type="number"
            placeholder="expense"
            value={props.expense}
            onChange={(e) => props.setexpense(parseFloat(e.target.value))}
          /><button type="submit">Enter</button><br/>
          
        </form>

        <ul>
          {props.list1.map((item:any, index:any) => (
            <li key={index}>{item.expense}</li>
          ))}
        </ul>*/}
          
    </div>
)


} 
export default ExpenseList