import React, { useState } from "react";
import AddTask from "./components/AddTask/AddTask";
import Counter from "./components/Counter/Counter";
import TaskApp from "./components/TaskApp";



function App() {
  const [inputList,setInputList] = useState("");
  const [items,setItems]= useState([]);

  const itemEvent = (event) => {
    setInputList(event.target.value)

  };

  const listOfItems=()=>{
    setItems((oldItems) =>{
      return [...oldItems,inputList]
    })

    setInputList("");
  

  };

  const deleteItem = () =>{
    console.log("delete");
  }




  return <div>{/* Code Here */
  <div className="container">
    <div className="second-div">
      <br/>
      <h1> TODO LIST</h1>
      <br/>
      <input type="text" placeholder="Add Task" onChange={itemEvent}/>
      <button onClick={listOfItems}>+</button>
      <ol>

      {items.map((itemval,index) =>{
        return <TaskApp
        key={index}
        id={index}
        text={itemval}
        onSelect={deleteItem}/>
      }
      )}
       

      </ol>

    </div>
  </div>
  
  
  
  
  
  }
  
  
  
  
  
  
  </div>;
}

export default App;
