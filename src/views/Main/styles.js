import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
  root: {
    position: 'relative',
  },
  tabs:{
    position: 'absolute',
    top: '-4%',
    width: '100%',
    textAlign: 'center',
    zIndex: 1101,
    '& *': { 
      width: 'fit-content',
      margin: 'auto',
      display:'inline',
      padding: '1em',
      color: 'white',
    },
    '& *:hover': {
      cursor: 'pointer',
    },
    '& *:active': {
      color: 'cyan',
    },
  },
}));


