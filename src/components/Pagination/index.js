import React, { useEffect, useState } from 'react';
import { Pagination } from '@material-ui/lab';
import { useStyles } from './styles.js';

export const PaginationWrapper = (props) => {
  const [page, setPage] = useState(1);
  const classes = useStyles();
  let start = ((page - 1) * 6);
  let end = 6 + ((page - 1) * 6);

  const handleChange = (event, value) => {
    setPage(value);
  };

  useEffect(() => {
    return (
      props.update(start,end)
    );

  }, [page])

  return (
    <>
        { props.children }
      <Pagination classes={{ul: classes.root}} count={Math.ceil(props.length / 6)} color="primary"  onChange={handleChange}/>
    </>
  );
};
