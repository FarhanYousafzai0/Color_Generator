import React, { useEffect, useState } from 'react';
import Values from 'values.js'
import './App.css';
import SingleColor from './SingleColor';
import  toast, { Toaster } from 'react-hot-toast';
const App = () => {
  const [color, setColor] = useState('');
  const [error, setError] = useState(false);
  const [colorList,setColorList] = useState([]);

const GeneratorColors = ()=>{
try {
  const ColorValues = new Values(color).all(10);
  console.log(ColorValues)
setColorList(ColorValues)
setError(false)
} catch (error) {
  setError(true)
  setColorList([])

  toast.error("Invalid color! Please enter a valid hex or color name.");

}

}



  return (
   

    <div className=" mx-auto  p-10 min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-black">
      <div className="p-8 mx-auto  w-full max-w-md rounded-2xl shadow-2xl bg-gray-800 text-white text-center transform  transition-transform duration-300">
        <h2 className="text-4xl font-extrabold mb-6 bg-gradient-to-r from-purple-400 to-pink-500 text-transparent bg-clip-text animate-pulse">
          ✨ Generate Colors ✨
        </h2>
        <form className="space-y-6" onSubmit={(e)=>e.preventDefault()}>
          <div className="relative">
            <input
              value={color}
              onChange={(e) => setColor(e.target.value)}
              type="text"
              placeholder="Type amazing colors..."
              className="w-full p-4 rounded-xl bg-gray-700 text-white border border-gray-600 focus:ring-2 focus:ring-purple-500 focus:outline-none placeholder-gray-400 transition-all duration-300"
            />

        
           
           
           
          </div>
          <button
          onClick={GeneratorColors}
            type="submit"
            onKeyDown={(e)=>e.key === "Enter" && GeneratorColors()}
            className="w-full py-3 bg-gradient-to-r from-purple-500 to-pink-500 cursor-pointer text-white font-bold rounded-xl shadow-xl hover:opacity-90 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1"
          >
            🚀 Generate
          </button>
        </form>
      </div>

      <div className="container mx-auto grid grid-cols-2 md:gird-cols-3 lg:grid-cols-4 gap-5 my-5  ">
  {colorList?.map((item,index)=>{

return <SingleColor index={index} hex={item.hex} key={index} {...item}/>

  })}



      </div>
      <Toaster />
    </div>
    
  );
};

export default App;
