import React from 'react'; // Importing React for JSX transformation
import Button from '@mui/material/Button'; // Importing Button component from Material-UI
import './App.css'; // Importing custom CSS for additional styling
import SaveIcon from '@material-ui/icons/Save' // Need to restart app
import { ButtonGroup, Stack } from '@mui/material';
import DeleteIcon from '@material-ui/icons/Delete';
import { makeStyles } from '@mui/styles';

// What is a front end?
// The part of a website or app users directly interface with

// What is React?
// React is the library for web and native user interfaces. Build user interfaces out of individual pieces called components written in JavaScript.

// Why React?
// Provides reusability of components, fast rendering, code stability, high performance, and extensive community support

// What is a component library?
// Collection of ready-to-use user interface elements that speed up development

// What is material UI
// A React component library made by google using their Material Design

// Why use them?
// Reusable components, faster development, improved consistency, and pre-tested.

// What is a button?
// Buttons allow users to take actions, and make choices, with a single tap.
// They communicate actions that users can take. 

const App: React.FC = () => { // Annotating the functional component with React.FC for TypeScript
  // a built in way to type props
  // props aka properties. Allow you to pass data to a function.

const useStyles = makeStyles({
  root: {
    background: 'linear-gradient(45deg, #FE6B8B, #FF8E53)',
    border: 0,
    marginBottom: 30,
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
        <Stack>
        <ButtonStyled />
        <ButtonGroup> {/* can pass in variant and color to button group too */}
          <Button /*href="#"*/ 
          onClick={()=>alert('hello')}
          size="large"/*large"*/
          // disabled
          /*style={{
            fontSize: 14
          }}*/
          variant="contained" 
          /*color="primary"*/
          endIcon={<SaveIcon />} /* Keep this one */
          // endIcon={<SaveIcon /> // can have both
          >
            Save {/* Button component with text content */}
            {/* Save */}
          </Button>
          <Button
          size="large"
          //variant="contained"
          //variant="outlined"
          variant="text"
          color="secondary"
          // color="success"
          // color="error"
          startIcon={<DeleteIcon />} >
            Discard
          </Button>
        </ButtonGroup>
        </Stack>
      </header>
    </div>
  );
}

export default App;
