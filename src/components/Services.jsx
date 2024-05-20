import React from "react";
import Book5 from "../assets/books/book5.png";
import Book6 from "../assets/books/book6.png";
import Book7 from "../assets/books/book7.png";
import Book8 from "../assets/books/book8.png";
import { FaStar, FaStarHalf } from "react-icons/fa";

const ServicesData = [
 
  {
    id: 5,
    img: Book5,
    title: "17 Years Later",
    rating: 4.4,
    name:"J.P Pomare",
   
  },

  {
    id: 6,
    img: Book7,
    title: "Reckless",
    rating: 5,
    name: "Lauren Roberts",
  },
  {
    id: 7,
    img: Book6,
    title: "All Fours",
    rating: 4.4,
    name:"Miranda July",
   
  },
  {
    id: 8,
    img: Book8,
    title: "Ask Jules",
    name:"Jules Robinson",
    rating: 4.8
  },
  
];
const Services = ({ handleOrderPopup }) => {
  return (
    <>
      <span id="services"></span>
      <div className="py-10">
        <div className="container">
          <div className="text-center mb-20 max-w-[400px] mx-auto">
            
            <h1 className="text-3xl font-bold">Trending Books</h1>
           
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 md:gap-3 place-items-center">
            {ServicesData.map((service) => (
              <div
                data-aos="zoom-in"
                className="rounded-2xl bg-white dark:bg-gray-800 hover:bg-slate-500  hover:text-white relative shadow-xl duration-high group max-w-[300px]"
              >
                <div className="h-[100px]">
                  <img
                    src={service.img}
                    alt=""
                    className="max-w-[100px] block mx-auto transform -translate-y-14
                  group-hover:scale-105  duration-300 shadow-md"
                  />
                </div>
                <div className="p-4 text-center">
                  <div className="w-full flex items-center justify-center gap-1">
                    <FaStar className="text-yellow-500" />
                    <FaStar className="text-yellow-500" />
                    <FaStar className="text-yellow-500" />
                    <FaStar className="text-yellow-500" />
                    <FaStarHalf className="text-yellow-500" />
                  </div>
                  <h1 className="text-xl font-bold">{service.title}</h1>
                  <p className="text-gray-500 group-hover:text-white duration-high text-sm line-clamp-2">
                    {service.description}
                  </p>
                  <button
                    className="bg-slate-500 hover:scale-105 duration-300 text-white font-bold py-1 px-4 rounded-full mt-4 group-hover:bg-white group-hover:text-slate-500"
                    onClick={handleOrderPopup}
                  >
                    BUY
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;
