"use client"
import { useState, useEffect} from "react"
import InputForm from "@/components/Form/inputForm/InputForm"
import TodoListe from "@/components/Form/todoListe/TodoListe"

const Form = ({darkmode}) => {
    const [todos, setTodos] = useState([])

    const GetData = async () => {
        const res = await fetch("api/todo");
        const daten = await res.json();
        setTodos(daten);
      };

      const handleAddToDo = () => {
        GetData();
      }

      useEffect(() => {
        GetData();
      }, []);
    

  return (
    <div className=" flex flex-col gap-5 relative min-w-96 -top-36 ">
        <InputForm  onAdd={handleAddToDo} darkmode={darkmode}/>
        <TodoListe  todos={todos} onAdd={handleAddToDo} darkmode={darkmode}/>
    </div>
  )
}

export default Form