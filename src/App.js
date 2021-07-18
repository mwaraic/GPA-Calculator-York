import {React, Component} from 'react'
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';
import app from './components/table'
import Navbar from './NavBar';
import { ChakraProvider } from "@chakra-ui/react"
import theme from './components/theme';

class App extends Component {
  render(){
  return (
    <>
    <div>
      <ChakraProvider theme={theme}>
   <Navbar/>
   <Router>
     <Route path="/" component={app} exact/>
   </Router>
   </ChakraProvider>
   </div>
   </>
  );}
}

export default App;


