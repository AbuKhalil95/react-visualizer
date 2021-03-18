import React from 'react';

import { useStyles } from './styles.js';
import { MainList } from '../../components/MainList';



export const Main =  (props) => {
  // const [auth, setAuth] = React.useState(props.auth.username); 
  const classes = useStyles();


  return (
    <main className={classes.root}>
      <MainList/>
    </main>
  );
};


