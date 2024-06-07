import {Routes, Route} from 'react-router-dom'
import Login from './Pages/Auth/Login'
import Dashboard from './Pages/Dashboard/Dashboard'
import Register from './Pages/Auth/Register'
import './App.css'
import HomePage from './Pages/Dashboard/Dashboard Pages/HomePage'
function App() {
 

  return (
    <Routes>
      <Route path='/' element={<Login/>}></Route>
      <Route path='/signup' element={<Register/>}></Route>
      <Route path='/dashboard' element={<Dashboard dashContent={<HomePage/>}/>}></Route>
    </Routes>
  )
}

export default App
