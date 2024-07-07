import React from "react";
import Cargo1 from "../assets/cargopants/Cargo1.jpg";
import Cargo2 from "../assets/cargopants/Cargo2.jpg";
import Joggers1 from "../assets/joggers/Joggers1.jpg";
import Joggers8 from "../assets/joggers/Joggers8.jpg";
import Joggers9 from "../assets/joggers/Joggers9.jpg";

export const Catergories = () => {
  const images = [
    { img: Cargo1},
    { img: Cargo2},
    { img: Joggers1},
    { img: Joggers8},
    { img: Joggers9},
];
  return (
    <section id="catergories">
        <div className="grid grid-cols-3 gap-10 mt-5 ml-5">
      {images.map((items) => (
        <div >
            <img className="rounded-3xl hover:animate-pulse 2s infinite"src={items.img} />
        </div>
      ))}
    </div>
   
   <div className="bg-slate-600 p-20 mt-5 mb-0" id="contact us">
       <p className="mt-0 p-0 align-middle justify-center flex text-white"> Your satisfaction is our priority.....</p>
       <h1 className="float-top ml-5 mt-0 text-white block">Shop 116<br></br>Mandila Market, Marina<br></br>Lagos Island, Lagos State.<br></br>+234 810 345 7654</h1>
       <p className="float-right mt-0 text-white">Thanks for shopping with us...</p>
       </div>
  
    </section>
  );
};
