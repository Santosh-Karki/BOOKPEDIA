import React, { useState } from "react";
import { GiBookshelf } from "react-icons/gi";

import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaLocationArrow,
  FaMobileAlt,
} from "react-icons/fa";

const FooterLinks = [
  {
    title: "Home",
    link: "/#",
  },
  {
    title: "Best Seller",
    link: "/#about",
  },
  {
    title: "E-Books",
    link: "/#contact",
  },
  {
    title: "AudioBooks",
    link: "/#blog",
  },
  {
    title: "Clearance",
    link: "/#blog",
  },
];
const Footer = () => {
  return (
    <div className="bg-gray-100 dark:bg-gray-950">
      <section className="container">
        <div className=" grid md:grid-cols-3 py-5 gap-44">
          <div className=" py-8 px-4 ">
            <h1 className="sm:text-3xl text-xl font-bold sm:text-left text-justify mb-3 flex items-center gap-2">
            
              <GiBookshelf/>
              Bookpedia
            </h1>
            <p className="">
              Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Possimus, voluptate.
              Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Possimus, voluptate.
            </p>
           
            
          </div>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 col-span-2 md:pl-10  ">
           
              <div className="py-8 px-4 ">
                <h1 className="sm:text-xl text-xl font-bold sm:text-left  mb-3">
                  Links
                </h1>
                <ul className="flex flex-col gap-2">
                  {FooterLinks.map((link) => (
                    <li className="cursor-pointer hover:translate-x-1 duration-300 hover:text-primary space-x-1 text-gray-700">
                   
                      <span>{link.title}</span>
                    </li>
                  ))}
                </ul>

            </div>
            <div className="py-8 px-4 ">
            <div className="flex flex-row items-center gap-3  mt-6">
                <a href="#">
                  <FaInstagram className="text-3xl text-orange-600" />
                </a>
                <a href="#">
                  <FaFacebook className="text-3xl text-blue-500" />
                </a>
                <a href="#">
                  <FaLinkedin className="text-3xl text-blue-500" />
                </a>
              </div>
              <div className="mt-6">
                <div className="flex items-center gap-3">
                  <FaLocationArrow className="text-blue-500"/>
                  <p>Melbourne, Australia</p>
                </div>
                <div className="flex items-center gap-3 mt-3">
                  <FaMobileAlt className="text-blue-700"/>
                  <p>+61 0123 456 789</p>
                </div>
                </div>

            </div>
            

            
             </div>
        </div>
        <div>
          <div className="text-center py-10 border-t-2 font-semibold border-gray-300/50">
            @Copyright 2024. All rights reserved
          </div>
        </div>
      </section>
    </div>
  );
};

export default Footer;
