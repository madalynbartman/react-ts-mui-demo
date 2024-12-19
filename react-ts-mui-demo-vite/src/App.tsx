import React from 'react'; // Importing React for JSX transformation
import Button from '@mui/material/Button'; // Importing Button component from Material-UI
import './App.css'; // Importing custom CSS for additional styling
import SaveIcon from '@material-ui/icons/Save' // Need to restart app
import { ButtonGroup, /* Stack */ } from '@mui/material';
import DeleteIcon from '@material-ui/icons/Delete';
import { makeStyles } from '@mui/styles';


const App: React.FC = () => { // Annotating the functional component with React.FC for TypeScript

const useStyles = makeStyles({
  root: {
    background: 'linear-gradient(45deg, #FE6B8B, #FF8E53)',
    border: 0,
    // marginBottom: 15,
    borderRadius: 15,
    color: 'white',
    padding: '5px 30px'
  }
})

function ButtonStyled() {
  const classes = useStyles();
  return <Button className={classes.root}>Test Styled Button</Button>
}

  return (
    <div className="App">
      <header className="App-header"> {/* Closing the header tag properly */}
        {/* <Stack> */}
        <ButtonStyled />
        <ButtonGroup> {/* can pass in variant and color to button group too */}
          <Button /*href="#"*/ 
          /*onClick={()=>alert('hello')}*/ 
          /*size="small"*//*large"*/
          /*disabled*/
          /*style={{
            fontSize: 14
          }}*/
          variant="contained" 
          /*color="primary"*/
          startIcon={<SaveIcon />} /* Keep this one */
          // endIcon={<SaveIcon /> // can have both
          >
            Hello World {/* Button component with text content */}
            {/* Save */}
          </Button>
          <Button
          size="large"
          variant="contained"
          //variant="outlined"
          //variant="text"
          color="secondary"
          // color="success"
          // color="error"
          startIcon={<DeleteIcon />} >
            Discard
          </Button>
        </ButtonGroup>
        {/* </Stack> */}
      </header>
    </div>
  );
}

export default App;
