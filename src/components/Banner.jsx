import React from "react";


const Banner = () => {
  return (
    <div className="min-h-[350px] w-screen bg-left bg-[url('./assets/website/library.jpg')] bg-cover flex flex-col justify-center items-center my-14">
     
       
<div className=" text-slate-400 brightness-200 contrast-100 font-bold text-5xl ">
  <p> 
    WISE YOURSELF WITH THE KNOWLEDGE
  </p>
</div>

<div className=" text-white bottom-32 mt-8">
<button
 className="bg-slate-100 text-black p-2 hover:bg-slate-500 hover:text-white rounded cursor-pointer"> 
SHOP NOW</button>
</div>

          </div>
      

 
  );
};

export default Banner;
