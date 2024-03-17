import { Link, useLoaderData } from "react-router-dom";



const Details = () => {
  const countryDetails = useLoaderData()
  
  const data = countryDetails[0]
  const {capital,name,flags} = data
  
  return (
    <div className="container mx-auto">
       <h1>Official name : {name.official}</h1>
       <h1>Common name : {name.common}</h1>
       <img src={flags.png} alt={flags.alt} />
       <Link to='/allcountries' className="py-1 px-2 bg-blue-500 text-white rounded inline-block mt-5">Back</Link>
    </div>
  );
};

export default Details;