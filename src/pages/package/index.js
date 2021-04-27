import React, { useState }  from 'react';
import axios from 'axios';
import Carousel from 'react-material-ui-carousel';
import { Paper } from '@material-ui/core';
import './style.css'

const Package = (props) => {
	const [getP, setPackage] = useState({});
	axios.get(`http://localhost:5000/api/package/${props.match.params.id}`)
		.then(function (response) {
			setPackage(response.data);
		  })
		  .catch(function (error) {
			console.log(error);
		  })
  	return (
    	<div>
			<Carousel>
				<Paper>
					<img src={getP.image1} height="400px" width="100%" />
				</Paper>
				<Paper>
				  <img src={getP.image2} height="400px" width="100%" />
				</Paper>
				<Paper>
				  <img src={getP.image3} height="400px" width="100%" />
				</Paper>
			</Carousel>
	 	<div className="container">
				<h2 className="title">{getP.name}</h2>
				<h2 className="price">${getP.price}</h2>
			</div>
			<br />
			<p className="description">{getP.description} </p>
</div>			
	  )};

  

export default Package;
