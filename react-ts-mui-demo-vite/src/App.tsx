import React from 'react'; // Importing React for JSX transformation
import Button from '@mui/material/Button'; // Importing Button component from Material-UI
import './App.css'; // Importing custom CSS for additional styling

const App: React.FC = () => { // Annotating the functional component with React.FC for TypeScript

  return (
    <div className="App">
      <header className="App-header"> {/* Closing the header tag properly */}
        <Button /*href="#"*/ /*onClick={()=>alert('hello')}*/ 
        /*size="small"*//*large"*/
        /*disabled*/
        /*style={{
          fontSize: 14
        }}*/
        variant="contained" 
        /*color="primary"*/>
          Hello World {/* Button component with text content */}
        </Button>
      </header>
    </div>
  );
}

export default App;
