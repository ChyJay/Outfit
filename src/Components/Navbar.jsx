import React from "react";
import Polo2 from '../assets/polos/Polo2.jpg'

export const Navbar = () => {
  return (
    <div style={{backgroundImage: `url(${Polo2})`}} className="pb-64">
      <nav>
        <ul className="flex justify-center align-middle gap-20 hover:cursor-pointer text-white p-0">
          <li className=" hover:bg-slate-800 p-5 rounded-full">Home</li>
          <li className=" hover:bg-slate-800  p-5 rounded-full"> 
            <a href="#about">About</a>
            </li>
          <li className=" hover:bg-slate-800  p-5 rounded-full">
            <a href="#catergories">Catergories</a>
            <ul className="invisible hover:">
              <li>Joggers</li>
              <li>Polos</li>
              <li>Cargopants</li>
              <li>Sweartshitrs</li>
            </ul>
          </li>
          <li className=" hover:bg-slate-800  p-5 rounded-full">
            <a href="#contact us">Contact Us</a>
            </li>
        </ul>
      </nav>

      <p className='flex items-center justify-center my-40 text-4xl text-blue-800 pt-40'>Your one-stop online and physical store for everthing male...</p>
    </div>
  );
};
