import {React, Component} from 'react'
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';
import Navbar from './Navbar';
import { ChakraProvider } from "@chakra-ui/react"
import theme from './components/Theme';
import table from './components/Table';
import Example from './components/Example';
import MainHeading from './components/Main_Heading';

class App extends Component {
  render(){
  return (
    <>
    <div>
   <ChakraProvider theme={theme}>
      <Navbar/>
      <div style={{padding: 10, minWidth: 20}} className="container">
        <Router>
          <Route path="/" component={MainHeading} exact/>
          <Route path="/calculator" component={table} exact/>
          <Route path="/example" component={Example} exact/>
        </Router>
      </div>
   </ChakraProvider>
   </div>
   </>
  );}
}

export default App;


