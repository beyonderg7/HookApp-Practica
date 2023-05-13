import React from 'react'
import ReactDOM from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.css';
//import './index.css'
import { SimpleForm } from './02-UseEffect/SimpleForm'
//import { HooksApp } from './HooksApp.tsx'
// import { CounterApp } from './01-UseState/CounterApp.tsx'
// import { CounterCustomHook } from './01-UseState/CounterCustomHook.tsx'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(


  <React.StrictMode>

  {/* <HooksApp  />
 
  <CounterApp></CounterApp>

  <CounterCustomHook name='Super'></CounterCustomHook>
  */}

  <SimpleForm></SimpleForm>
   
   </React.StrictMode>,
) 
