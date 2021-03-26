import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
  root: {
    position: 'fixed',
    width: '100%',
    padding: '1em',
    display: 'flex',
    justifyContent: 'space-evenly',
    backgroundColor: '#ffffff',
    zIndex: 1,

    '& > :nth-child(2)': {
      margin: '0 0 0 10%',
    }
  },
  reset: {
    position: 'absolute',
    top: '10%',
    left: '2%',
    fontSize: '1.5em',
    padding: '1em',
    borderRadius: '20%',
  },
}));


