import React, { useEffect, useState } from 'react';
import { Chip } from '@material-ui/core';

import { useStyles } from './styles.js';
import { restaurantsData } from '../../data.json';
import { Pagination } from '@material-ui/lab';
import { CardContainer } from './CardContainer.js';

export const MainList =  (props) => {
  const classes = useStyles();
  const [restaurants, updateRestaurants] = useState([...restaurantsData]);


  const filterBar = (data) => {
    let chips = {jsx:[], categories:[]};

    data.forEach((element, idx) => {
    element?.menu?.forEach((item, index) => {
        // console.log(element, item.category, item.category && !chips.categories.includes(item.category))

        if (item.category && !chips.categories.includes(item.category)) {
          chips.categories.push(item.category);
  
          chips.jsx.push(
          <Chip
            key={index + 10*idx}
            label={item.category}
            color="primary"
            clickable
            onClick={ (e) => {updateList(item.category)} } 
            variant="outlined"
            classes={{ root: classes.chip}}
          />);
          }
      })

        
    });
    return chips.jsx;
  }

  const generateList = () => {
    return list.map((item, idx) => {
      return <CardContainer avatar={item.name.substring(0,1)} name={item.name} location={item.location} image={item.image} menu={item.menu}/>;
    });
  };

  const updateList = (category) => {

    console.log('filtering List with ', category);
    updateRestaurants(
      restaurantsData.filter(restaurant => {
      let flag = false;
      restaurant.menu.forEach(item => {
        if (item.category === category) {
          flag = true;
        }
      })
      console.log('restaurant ', restaurant, 'includes ', category, '? ', flag)
      return flag;
      })
    )
    // updateFiltered(list);
  };

  const resetList = () => {
    updateRestaurants(restaurantsData);
    console.log('resetting List');
  };



  const [page, setPage] = useState(1);
  let start = ((page - 1) * 6);
  let end = 6 + ((page - 1) * 6);
  console.log(restaurantsData, start, end);
  let list = restaurants.slice(start, end);

  const handleChange = (event, value) => {
    setPage(value);
  };

  useEffect(() => {
    console.log('rendering main useeffect', restaurants,' and filtred as: ', restaurants);
  }, [restaurants]);

  return (
    <>
      <Chip
            key={'reset'}
            label={'Reset'}
            color="secondary"
            clickable
            onClick={resetList} 
            variant="default"
            classes={{ root: classes.reset}}
      />      
      <section className={classes.chipContainer}>
        { filterBar(restaurantsData) }
      </section>
      <div>
        <section className={classes.cardContainer}>
          { generateList(restaurants) }
          <br></br>
        </section>
        <Pagination classes={{ul: classes.pagination}} count={Math.ceil(restaurantsData.length / 6)} color="primary"  onChange={handleChange}/>
      </div>
    </>
  );
};



