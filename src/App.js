import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const something = ["soudi", "dubai", "egypt", "china", "japan", "uganda"];
  const productObject = [
    { name: "photoshop", price: "$56.56"},
    { name: "camera", price:"$304.4"},
    { name: "handicam", price:"$494.5"}
]    

  return (
    <div className="App">
      <header className="App-header">  
        <p> React Core Concept</p>
        <Users></Users>
        <Counter></Counter>

        <ul>
          {
            something.map(some => <li>{some}</li>)
          }
          {
            productObject.map(pd => <li>{pd.name}</li>)
          }
        </ul>
        {
          productObject.map(pd => <Products product={pd}></Products>)
        }       
       
        <AnotherComponent name="Bangladesh" nature="Awesome"></AnotherComponent>
        <AnotherComponent name="Australia" natureProblem="faminism"></AnotherComponent>
        <AnotherComponent name={something[3]} nature="kutte kamine"></AnotherComponent>
        <AnotherComponent name="Canada" nature="good"></AnotherComponent>
      </header>
    </div>
  );
}

function Users (){
  const [ users, setUsers] = useState([]);

 useEffect(() => {
  fetch("https://jsonplaceholder.typicode.com/users")
  .then( res => res.json())
  .then( data => setUsers(data));
 }, [])

  return (
    <div>
      <h2>Dynamic Users: {users.length}</h2>   
      {
        users.map( user => <pre>
                             <li> 
                               {user.name} <br/> phone: {user.phone} 
                             </li>
                            </pre>)
      }
    </div>
  )
}

function Counter(){
  const [count, setCount] = useState(10);
  const handleIncrease = () => setCount(count + 1);
  return(
    <div>
      <h1>Count:{count}</h1>
      <button onClick={ () => setCount(count - 1)}> Decrease</button>
      <button onClick={() => setCount(count + 1)}>Increase</button>
    </div>
  )
}

function Products (props){
  const productsMakeup = {
    border: " 1px solid gray",
    borderRadius: " 5px",
    height: " 200px",
    width: " 200px",
    backgroundColor: " lightgray",
    color: " black"
  }
  const {name, price} = props.product;
  return (
    <div style={productsMakeup}>
      <h3>{name}</h3>
      <h4>{price} </h4>
      <button>buy now</button>
    </div>
  )
}

function AnotherComponent(props){
const makeup ={
  color: "blue",
  backgroundColor: "white"
}
const parentMakeup = {
  border:"2px solid yellow",
  margin:"5px"
}
  return (
    <div style={parentMakeup}>
      <h1 style={makeup}> Country:{props.name}</h1>
      <p style={{ color:"gold", backgroundColor:"lightstategrey"}}> 
      There Nature: {props.nature} {props.natureProblem}</p>
    </div>
  )
}
export default App;
