import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
  root: {
  },
  cardContainer: {
    position: 'relative',
    top: '5%',
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
}));


