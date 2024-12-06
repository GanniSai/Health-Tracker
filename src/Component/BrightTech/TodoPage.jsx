import { useNavigate, useParams } from 'react-router-dom';
import HeaderComponent from './HeaderComponent';
import './TodoPage.css';
import { useEffect, useState } from 'react';
import { AuthContext } from './Security/AuthContext';
import { retriveAllTodosForUserName } from './Todo/TodoService';
import { deleteUserByIdApi } from './Todo/TodoService';

export default function Todopage() {
  const params=useParams()
    // const today = new Date();
    const navigate=useNavigate();

    // const targetDate = new Date(today.getFullYear, today.getMonth, today.getDay); 
    // const todos = [
    //   { id: 101, description: "Typhoid from past 1 week", done: 'Not yet', targetDate: targetDate },
    //   { id: 102, description: "Viral fever ", done: 'Not yet', targetDate: targetDate },
    //   { id: 103, description: "Dengue from 2 days", done: 'Not yet', targetDate: targetDate },
    //   { id: 104, description: "Malaria", done: 'Yes', targetDate: targetDate },
    // ];


    useEffect(
      () =>refreshTodos(),[]
    )

    const [todos,setTodos]=useState([])
    const [message,setMessage]=useState(null)

    function refreshTodos(){
      retriveAllTodosForUserName("GanniSai")
      .then(
        (response) =>{
          console.log(response)
          setTodos(response.data)
        }
      )
      .catch(
        (error) =>console.log(error)
      )
      .finally(
        console.log("clean")
      )
    }

    function deleteTodo(id){
      const username=AuthContext.username
      deleteUserByIdApi(username, id)
      .then(
        (response) =>{
          console.log(response)
         setMessage(`Deleted user by id : ${id}`)
         refreshTodos()
        }
      )
      .catch(
        (error) => console.log(error)
      )
    }

   function updateTodo(id){
    navigate(`/description/${id}`)
   }

   function addNewTodo(){
    navigate(`/description/-1`)
   }



  
    return (
      <>
      <HeaderComponent/>
      
        <div className="TableDetails">Patients Records</div>
        <h3>Doctor Name: {params.name}🧑‍⚕️</h3>
       {message && <div className='alert alert-warning'>{message}</div>}
        <table className="table">
          <thead>
            <tr>
              <th>Id No.</th>
              <th>Description</th>
              <th>Completed?</th>
              <th>Target Date</th>
              <th>Delete</th>
              <th>Update</th>
            </tr>
          </thead>
<tbody>
          {todos.map((todo) => (
            <tr key={todo.id}>
              <td>{todo.id}</td>
              <td>{todo.description}</td>
              <td>{todo.done ? "Yes" : "No"}</td>
              <td>{new Date(todo.targetDate).toLocaleDateString()}</td>
                <td><button onClick={() => deleteTodo(todo.id)}>Delete</button></td>
                <td><button  onClick={() => updateTodo(todo.id)}>Update</button></td>
              
                
              </tr>
            ))}
          </tbody>
        </table>

      <div className="TableDetails"><button className='gotodescriptionpage' onClick={addNewTodo}>Add New Patient </button></div>
      </>
    );
  }
  