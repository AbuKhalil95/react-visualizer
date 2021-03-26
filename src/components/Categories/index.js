import React, { useEffect, useState } from 'react';
import { useStyles } from './styles.js';

// main components to show categories
import { FilterBar } from '../FilterBar';
import { ShowCards } from '../ShowCards';
import { PaginationWrapper } from '../Pagination';
// passed in props components to specialize how its shown
import { CardContainer } from '../Card';
// mock data to get things started
import { restaurantsData } from '../../data.json';

export const Categories = () => {
  const [restaurants, updateRestaurants] = useState([...restaurantsData]); 
  const classes = useStyles();


  // update and reset card hooks

  const updateList = (category) => {
    const test = (item) => item.category === category;
    updateRestaurants([...restaurantsData.filter(restaurant => restaurant?.menu.some(test))]);
    console.log('updating List');
  };

  const resetList = () => {
    updateRestaurants([...restaurantsData]);
    console.log('resetting List');
  };

  const updatePagination = (start, end) => {
      updateRestaurants([...restaurantsData.slice(start, end)]);
      console.log('updating Pagination');
  }

  return (
    <main className={classes.root}>         {/* Two element grid for side and main */}
      <FilterBar items={restaurantsData} update={updateList} reset={resetList}/>
      <PaginationWrapper length={restaurantsData.length} update={updatePagination}>
        <ShowCards items={restaurants} card={CardContainer}/>
      </PaginationWrapper>

      {/* refactor show items to be inside filterBar, with filter bar having both filter and pagination, source of truth in categories */}
    </main>
  );
};