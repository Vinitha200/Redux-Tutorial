import React ,{useEffect} from 'react';
import './App.css';
import { decrement,increment,red,displayRead } from './redux/store/action/commonAction';
import { useDispatch } from 'react-redux';
import Result from "./result";
import Red from "./component/ChangeColor/red"
import Green from "./component/ChangeColor/green";
import FormData from "./component/CRUD/form"
import StudentList from './component/CRUD/StudentList';

function App() {


  const dispatch = useDispatch()
  const incrementAction =()=>{
    dispatch(increment())
  }

  const decrementAction =()=>{
    dispatch(decrement())
  }

  useEffect(()=>{
   dispatch(displayRead())
  },[])
 
  return (
    <div className="App">   
    {/* increment decrement and color chnage */}
    {/* <Result/>
    <button onClick={incrementAction}>increment button</button>
    <button onClick={decrementAction}>decrement button</button>
    <Red></Red>
    <Green/> */}
   
    {/* CRUD Operation */}
    <FormData/>
    <StudentList/>
    </div>
  );
}

export default App;
