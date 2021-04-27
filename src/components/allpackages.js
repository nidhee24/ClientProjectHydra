import React from 'react';
import Package from './package';
import {useState} from 'react';
import axios from 'axios';

const getPackages = async (setPackages) =>{
  try {
    let packages = await axios.get(
      'http://localhost:5000/api/package/allPackages'
      
    );
    setPackages(packages.data);
  } catch (e) {
    console.log('error ', e);
  }
}

export default function Packages() {
  const [packages, setPackages] = useState([]);
  getPackages(setPackages);

  return (
    <div>
      {packages.map((t, index) => (
        <Package package={t} key={index} />
      ))}
    </div>
  );
}
