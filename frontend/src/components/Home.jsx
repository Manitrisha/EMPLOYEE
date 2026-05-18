import { useContext } from "react";
import { counterContextObj } from "../contexts/ContextProvider";
import Test from "./Test";
import { useCounterStore } from "../store/CounterStore";
function Home() {
  //call useCounterStore hook to get state of zustand store
  let newCounter = useCounterStore((state)=>state.newCounter);
  let incrementCounter = useCounterStore((state)=>state.incrementCounter);
 console.log("Home component rendered");
  const { counter, changeCounter } = useContext(counterContextObj);
  return (
    <div >
  <h1 className="p-5 m-5 text-4xl text-yellow-500 text-center font-family-bold"> WELCOME TO EMPLOYEE PORTAL</h1>
  <p className="p-5 m-5 text-2xl  text-center"
  >Welcome to the Employee Portal, your one-stop platform for managing employee information, tasks, attendance, and company resources efficiently. Stay connected, organized, and productive with easy access to all essential workplace services in one place.</p>
    </div>
    
  )
}

export default Home