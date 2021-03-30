
import React, { useState } from 'react'
import './app.css'
import Card from './Card'
import {FaSun,FaMoon} from 'react-icons/fa'
import {FaPaperPlane,FaPlane,FaRocket} from 'react-icons/fa'
const data = [
  {
    id:'1',
    title:'Basic',
    price:'25',
    lis1:'10 GB Space',
    lis2:'3 Domain',
    lis3:'10 Email Address',
    lis4:'Live Support',
    icon:FaPaperPlane,
    fun:1
  },
  {
    id:'2',
    title:'Standart',
    price:'35',
    lis1:'30 GB Space',
    lis2:'5 Domain',
    lis3:'16 Email Address',
    lis4:'Live Support',
    icon:FaPlane,
    fun:1,
    color:''
  },
  {
    id:'3',
    title:'Premuim',
    price:'50',
    lis1:'55 GB Space',
    lis2:'15 Domain',
    lis3:'30 Email Address',
    lis4:'Live Support',
    icon:FaRocket,
    fun:false
  },
]
function App() {
  const [isTrue,setTrue] = useState(false)
  return (
    <div className={`container ${isTrue && 'light'}`}>
    <div onClick={()=>{setTrue(!isTrue)}} className="toggle">
      {isTrue?<FaSun className="sun"/>:<FaMoon className="moon"/>}
    </div>
    <div className="app">
      {data.map(item=><Card 
      key={item.id}
      Icon={item.icon}
      price={item.price}
      lis1={item.lis1}
      lis2={item.lis2}
      lis3={item.lis3}
      lis4={item.lis4}
      fun={item.fun}
      title={item.title}
      thime={isTrue}
      />)}
    </div>
    </div>
  )
}

export default App
