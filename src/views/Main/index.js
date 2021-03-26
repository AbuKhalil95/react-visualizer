import React, { useState } from 'react';

import { useStyles } from './styles.js';
import { LandingPage } from '../../components/LandingPage';
import { Categories } from '../../components/Categories';


export const Main =  (props) => {
  // const [auth, setAuth] = useState(props.auth.username); 
  const [view, changeView] = useState('Categories'); 
  const classes = useStyles();


  return (
    <div className={classes.root}>
      <nav className={classes.tabs}>
        <div onClick={() => changeView('LandingPage')} >Home</div>
        <div onClick={() => changeView('Categories')} >Restaurants</div>
      </nav>
      { <LandingPage display={view === 'LandingPage' ? 'block' : 'none'} /> }
      { view === 'Categories' && <Categories/> }
    </div>
  );
};


