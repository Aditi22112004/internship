import requests from "./netflixData"
import { useState } from "react";
import axios from "axios";
import { useEffect } from "react";
console.log(requests);


const App = () => {
const[netflixData, setNetflixData] = useState([]);
console.log(netflixData);
const getData = () =>{
  axios 
  axios.get(requests.requestTopRated)
  .then((response) => setNetflixData(response.data.results)).catch((error) => console.error("Error fetching data:", error));
};
useEffect(() => {
  getData();
}, []);

  return (
    <div>
      <button onClick={getData} className="bg-red-600 text-white p-2 rounded-lg"> 
        Get Netflix Data
      </button>
      {netflixData.map((Elem) => {
        console.log(Elem)
        return ( 
      <img key={Elem.id} src={`https://image.tmdb.org/t/p/w500/${Elem.backdrop_path}`} alt={Elem.title} />
        )})
        }
    </div>
  )
}

export default App
