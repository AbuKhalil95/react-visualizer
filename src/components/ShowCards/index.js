import React, { useEffect, useState } from 'react';
import { useStyles } from './styles.js';

export const ShowCards =  (props) => {
  const Card = props.card;
  const classes = useStyles();

  const generateCards = (list) => {
    return list.map((item, idx) => {
      return <Card key={idx} avatar={item.name.substring(0,1)} name={item.name} location={item.location} image={item.image} menu={item.menu}/>;
    });
  };

  useEffect(() => {
  }, [props.items]);

  return (
    <>
      <div>
        <section className={classes.cardContainer}>
          { generateCards(props.items) }
          <br></br>
        </section>
      </div>
    </>
  );
};



