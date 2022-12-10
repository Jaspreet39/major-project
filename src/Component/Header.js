import React from 'react'
import {year, city} from '../Constant/Constant'
import { useLocation, useNavigate } from "react-router-dom";

function Header() {
    const navigate = useNavigate()
  return (
    <div className="w-ful">
        <div className="max-w-[80%] mx-auto flex item-center justify-between">
        <div>
            <h1 className="text-red-600"> MOBILE PHONE KHAREEDO</h1>
        </div>
        <div className="flex item-start space-x-10">
            <select className="h-[50px]">
            <option>Modal Year</option>
               {year.map((item)=>(
                <option>{item}</option>
               ))}
            </select>
            <h1 onClick={()=>navigate("/page1")} className="text-4xl cursor-pointer">Buy/Sell</h1>
            <h1 onClick={()=>navigate("/login")} className="text-4xl cursor-pointer">SignIn</h1>
            <select className="h-[50px]">
            <option>Location</option>
               {city.map((item)=>(
                <option>{item.city}</option>
               ))}
            </select>
             <h1 className="text-4xl cursor-pointer">Branches</h1>
            <h1 className="text-4xl cursor-pointer">About-us</h1>
        </div>
    </div>
    </div>
  )
}

export default Header