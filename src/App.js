import {React, Component} from 'react'
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';
import app from './components/table'
import AppFooter from './footer';
import NavBar from './NavBar';
class App extends Component {
  render(){
  return (
    <>
    <div>
    <NavBar/>
   <Router>
     <Route path="/" component={app} exact/>
   </Router>
   <AppFooter/>
   </div>
   </>
  );}
}

export default App;


