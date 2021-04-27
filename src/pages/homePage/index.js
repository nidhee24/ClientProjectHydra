import React from 'react';
import CarouselImages from '../../components/carousal';
import Package from '../../components/package';
import {useState} from 'react';
import axios from 'axios';

const Home = () => {
  const [p, setPackages] = useState([]);
  axios.get(`http://localhost:5000/api/package/allPackages`)
		.then(function (response) {
      let packages = response.data;
      if(packages.length > 3) setPackages(packages.splice(0,3));
      else setPackages(packages);
		  })
		  .catch(function (error) {
			console.log(error);
		  })
  return (
    <div>
      <CarouselImages />
      {p.map((t, index) => (
        <Package package={t} key={index} /> 
      ))}
    </div>
  );
};

export default Home;
