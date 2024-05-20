import React from "react";
import { GiBookshelf } from "react-icons/gi";
import { FaCartShopping } from "react-icons/fa6";
import { BsPerson } from "react-icons/bs";


const Menu = [
 
  {
    id: 2,
    name: "BEST SELLER",
    link: "/#services",
  },
  {
    id: 1,
    name: "E-BOOKS",
    link: "/#",
  },
  {
    id: 3,
    name: "AUDIOBOOKS",
    link: "/#",
  },
  {
    id: 4,
    name: "CLEARANCE",
    link: "/#",
  },
];



const Navbar = ({ handleOrderPopup }) => {
  return (
    <>
      <div className="shadow-md bg-white dark:bg-gray-900 dark:text-white duration-200">
        <div className="container py-3 sm:py-0">
          <div className="flex justify-between items-center">
            <div>
              <a href="#" className="font-bold text-2xl sm:text-3xl flex gap-2">
              <GiBookshelf className="text-stone-700"/>
                Bookpedia
              </a>
            </div>
            <div className="flex justify-between  items-center gap-4">
             
              <ul className="hidden sm:flex items-center gap-4 ">
                {Menu.map((menu) => (
                  <li key={menu.id}>
                    <a
                      href={menu.link}
                      className="inline-block py-4 px-4 hover:text-stone-400 hover:translate-y-1 duration-300 "
                    >
                      {menu.name}
                    </a>
                  </li>
                ))}

              </ul>
            </div>
            <div className='flex flex-row gap-6 text-2xl '>
            <button
                onClick={() => handleOrderPopup()}
              >
                <FaCartShopping className="text-black drop-shadow-sm cursor-pointer hover:text-stone-400" />
              </button>
              <button >
                <BsPerson className="text-black drop-shadow-sm cursor-pointer hover:text-stone-400 "/>
              </button>
              </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
