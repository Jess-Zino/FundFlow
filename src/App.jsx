import {Routes, Route} from 'react-router-dom'
import Login from './Pages/Auth/Login'
import Dashboard from './Pages/Dashboard/Dashboard'
import Register from './Pages/Auth/Register'
import './App.css'
import HomePage from './Pages/Dashboard/Dashboard Pages/HomePage'
import Income from './Pages/Dashboard/Dashboard Pages/Income'
import Expenses from './Pages/Dashboard/Dashboard Pages/Expenses'
import Savings from './Pages/Dashboard/Dashboard Pages/Savings'
import Debt from './Pages/Dashboard/Dashboard Pages/Debt'
function App() {
 

  return (
    <Routes>
      <Route path='/' element={<Login/>}></Route>
      <Route path='/signup' element={<Register/>}></Route>
      <Route path='/dashboard' element={<Dashboard dashContent={<HomePage/>}/>}></Route>
      <Route path='/income'  element={<Dashboard dashContent={<Income/>}/>}></Route>
      <Route path='/expenses'  element={<Dashboard dashContent={<Expenses/>}/>}></Route>
      <Route path='/savings'  element={<Dashboard dashContent={<Savings/>}/>}></Route>
      <Route path='/debt'  element={<Dashboard dashContent={<Debt/>}/>}></Route>
    </Routes>
  )
}

export default App
