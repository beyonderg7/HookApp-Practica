
import { Link, Outlet } from 'react-router-dom'
import { Navbar } from './Navbar'


export const MainApp = () => {
  return (
    
    <>

        <Navbar></Navbar>

        <hr></hr>

        <a href='/login'> Hola</a>
        <Outlet></Outlet>

    </>
  )
}
