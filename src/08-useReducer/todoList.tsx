

import {FC} from 'react'
import { TodoItem } from './TodoItem'



    type todo = {
    id: number,
    descripcion: string,
    done: boolean

    }

    type Datos = {

        state: todo[],
        FuncBorrar: (parametro:todo) => void
    }


export const TodoList:FC<Datos> = ({state, FuncBorrar}) => {
  return (

    <ul className='list-group'>
    {

       state.map( (todo:todo) => (

               <TodoItem key={todo.id} todo={todo} funcBorrar={(todo)=> FuncBorrar(todo)}></TodoItem>
            )
        )

    }

    </ul>
  )
}
