

import {FC} from 'react'

type todo = {
  id: number,
  descripcion: string,
  done: boolean
}

type Datos = {
    
todo : {
        id: number,
        descripcion: string,
        done: boolean
    },

  funcBorrar: (parametro:todo) => void
  
}

export const TodoItem:FC<Datos> = ({todo, funcBorrar}) => {
  return (
    
    <li className='list-group-item d-flex justify-content-between'>

        <span className='aling-self-center'>{todo.descripcion}</span>
        <button 
        className='btn btn-danger'
        onClick={() => funcBorrar(todo)}
        >
          
          Borrar</button>

    </li>   

  )
}
