import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
  root: {
    display: 'grid',
    width: '100%',
    maxHeight:'85vh',
    overflowY: 'scroll',
    // gridTemplateAreas: `
    // '. .'`,
    gridTemplateRows: '1fr 1fr',
    // gridTemplateColumns: '1fr 5fr',
  },
  }));


