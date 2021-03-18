import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
  root: {
  },

  chipContainer: {
    position: 'relative',
    maxWidth: '60%',
    margin: 'auto',
    textAlign: 'center',
    padding: '4em',
    display: 'flex',
    overflowX: 'auto',
    placeContent: 'space-between',
  },
  chip: {
    padding: '1em'
  },
  cardContainer: {
    maxWidth: '95%',
    minHeight: '65vh',
    margin: 'auto',
    textAlign: 'center',
    alignItems: 'flex-start',   
    padding: '1em',
    display: 'flex',
    flexFlow: 'wrap',
    justifyContent: 'center',
    backgroundSize: 'cover',
  },
  card: {
    // maxWidth: '50%',
    minWidth: 'calc(28% - 1rem)',
    maxHeight: '45%',
    margin: '2srem',
    borderRadius: '5px',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
  },
  reset: {
    position: 'absolute',
    top: '6em',
    left: '2%',
    fontSize: '1.5em',
    padding: '1em',
    borderRadius: '1em',
  },
  pagination: {
    padding: '2em !important',
    placeContent: 'center',
  }

}));


