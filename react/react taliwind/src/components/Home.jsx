import React,{useState} from 'react';
const Home = () => {

const [number, setNumber] = useState(0);
            const add =() =>setNumber(number+1);
const substract = () =>setNumber(number-1);
    return (
        <>
        <div className="w-full h-screen flex flex-col items-center gap-20">
        <span className="text-4xl">0</span>
        <button 
        onClick={add}
          className="bg-blue-600 p-2 text-white rounded-lg">
          Increase Number
        </button>
        <button onClick = {substract}
         className="bg-orange-800 p-2 text-white rounded-lg">
          Decrease Number
        </button>
      </div>
      </>
    );
};