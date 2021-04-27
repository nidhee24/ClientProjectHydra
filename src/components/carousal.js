import React from 'react';
import Carousel from 'react-material-ui-carousel';
import { Paper, Button } from '@material-ui/core';

export default function CarouselImages(props) {
  var items = [
    {
      //   name: 'Random Name #1',
      //   description: 'Probably the most random thing you have ever seen!',
      img: './assets/slides/egypt.jpg',
    },
    {
      //   name: 'Random Name #2',
      //   description: 'Hello World!',
      img: 'assets/slides/phero.jpg',
    },
  ];

  return (
    <Carousel>
      {items.map((item, i) => (
        <Item key={i} item={item} />
      ))}
    </Carousel>
  );
}

function Item(props) {
  return (
    <Paper>
      {/* <h2>{props.item.name}</h2>
      <p>{props.item.description}</p> */}
      <img src={props.item.img} height="400px" width="100%" />
    </Paper>
  );
}
