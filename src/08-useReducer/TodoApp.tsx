
import {FC, useEffect, useReducer, useState} from 'react';
import { todoReducer } from './todoReducer';
 import { TodoList } from './todoList';
import { TodoForm } from './TodoForm';


type todo = {
    id: number,
    descripcion: string,
    done: boolean

    }

type Tipo1 = todo[];

const initialState:Tipo1= [

    {
        id: new Date().getTime(),
        descripcion: 'Recolectar la gema del alma',
        done: false
    
    },

]

const initialStateParaElInit:Tipo1= [

    {
        id: new Date().getTime(),
        descripcion: 'Recolectar la gema del tiempo',
        done: false
    
    },

]


 const init = () =>{

   const jason:string = JSON.stringify(initialStateParaElInit);

    return JSON.parse(localStorage.getItem('Todos') || jason);
 }





export const TodoApp:FC = () =>{


    const [state, dispatch] = useReducer(todoReducer,initialState, init)

      //  const [first, setfirst] = useState<any>(initialState)

    console.log(state);

      useEffect(() => {
        
      localStorage.setItem('Todos', JSON.stringify(state));
        
      }, [state])
      




    type todo = {
        id: number,
        descripcion: string,
        done: boolean
    
        }

       type action = {

            type:string,
            payload:todo
        }
    
    
    const AgregarTodo = (todo:todo) =>{
    
            const action:action = {

                type: 'Add Todo',
                payload: todo
            }

        dispatch(action);

    //    const prueba = todoReducer(first, action);
    //    setfirst(prueba);
       // console.log(todo);
    }


    const DeleteTodo = (todo:todo) =>{
    
        const action:action = {

            type: 'Remove Todo',
            payload: todo
        }

    dispatch(action);

    }

    
        return (


            <>
                <h1>Todo App</h1>
                <hr></hr>


                <div className="row">

                        <div className="col-7">

                              <TodoList state={state} FuncBorrar={(todo) => DeleteTodo(todo)}></TodoList>
                             {/* <TodoList state={first}></TodoList> */}
                        </div>
                    

                        <div className="col-5">

                            <h4>Agregar TODO</h4>
                            <hr></hr>

                        <TodoForm FuncionAgregar={(todo:todo)=> AgregarTodo(todo)}></TodoForm>

                        </div>

                 </div>
          



            </>
        )

}