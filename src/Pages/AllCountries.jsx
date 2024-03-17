// import { useEffect, useState } from "react";

import { Link, useLoaderData } from "react-router-dom";


const AllCountries = () => {
  const allCountries = useLoaderData()
  // const [countries,setCountries] = useState([])
  // useEffect(()=>{
  //   fetch("https://restcountries.com/v3.1/all")
  //   .then(res=>res.json())
  //   .then(data=>setCountries(data))
  // },[])
  return (
    <div className="container mx-auto">
      <h1 className="text-center text-3xl text-black font-bold my-4 capitalize">All countries : {allCountries.length}</h1>
      <div className="flex justify-between flex-wrap">
        {
          allCountries.map((country,i)=>{
            return(
              <div key={i} className="w-[32%] h-[200px] p-4 border-2 border-blue-600 rounded-lg mb-4">
                <h1 className="font-bold">Official Name : {country.name.official}</h1>
                <h2 className="font-bold">Capital City : <span className="text-blue-600 text-xl">{country.capital}</span></h2>
                <h2 className="font-bold text-xl">Region : {country.region}</h2>
                <Link to={`/details/${country.cca2}`} className="w-full block text-center py-1 px-2 font-bold bg-blue-500 text-white mt-5 rounded-full">See Details <span className="text-yellow-500">{country.cca2}</span></Link>
              </div>
            )
          })
        }
      </div>
    </div>
  );
};

export default AllCountries;