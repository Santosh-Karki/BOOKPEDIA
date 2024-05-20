import React from "react";
import Book1 from "../assets/books/book1.png";
import Book2 from "../assets/books/book2.png";
import Book3 from "../assets/books/book3.png";
import Book4 from "../assets/books/book4.png";
import Book5 from "../assets/books/book5.png";
import Book6 from "../assets/books/book6.png";
import Book7 from "../assets/books/book7.png";
import Book8 from "../assets/books/book8.png";

import { FaStar } from "react-icons/fa6";

const booksData = [
  
  {
    id: 1,
    img: Book1,
    title: "Mind Games",
    rating: 5,
    name: "Nora Roberts",
  },
  {
    id: 2,
    img: Book2,
    title: "The MidNight Feast",
    rating: 4.4,
    name:"Lucy Foley",
   
  },
  {
    id: 3,
    img: Book3,
    title: "A Darkness Returns",
    name:"Raymond E. Feist",
    rating: 4.8,
  },
  {
    id: 4,
    img: Book4,
    title: "Stories My Grandma Didn't Tell Me",
    rating: 4.5,
    name: "Andra Putnis",
  },
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

const Books = () => {
  return (
    <>
      <div className="mt-14 mb-12">
        <div className="container">
          {/* header */}
          <div className="text-center mb-10 max-w-[600px] mx-auto">
            
            <h1 className="text-3xl font-bold"> Recently Released</h1>
            
          </div>

          {/* Body section */}
          <div>
            <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 place-items-center gap-5">
              {/* Card */}
              {booksData.map(({ id, img, title, rating, name }) => (
                <div key={id} className="div space-y-3">
                  <img
                    src={img}
                    alt=""
                    className="h-[220px] w-[150px] object-cover rounded-md "
                  />
                  <div>
                    <h3 className="font-semibold">{title}</h3>
                    <p className="text-sm text-gray-700">{name}</p>
                    <div className="flex items-center gap-1">
                      <FaStar className="text-yellow-500" />
                      <span>{rating}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="flex justify-center">
              <button className="text-center mt-10 cursor-pointer hover:scale-110 duration-400 bg-slate-500 font-bold text-white py-1 px-5 rounded-md">
                All Books
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Books;
