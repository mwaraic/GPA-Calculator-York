import {React, Component} from 'react'
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';
import Page from './Page';
import Navbar from './Navbar';
import { ChakraProvider } from "@chakra-ui/react"
import theme from './components/Theme';

class App extends Component {
  render(){
  return (
    <>
    <div>
   <ChakraProvider theme={theme}>
      <Navbar/>
        <Router>
          <Route path="/" component={Page} exact/>
        </Router>
   </ChakraProvider>
   </div>
   </>
  );}
}

export default App;


