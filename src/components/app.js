import {Table, Form, ModalFooter, Button } from 'react-bootstrap';
import {Component, React} from 'react';
import Row from './rows';
class app extends Component{
  
  constructor(props) {
    super(props)
    this.state = {
    value: '-',
    }
    
  }
  handlePeriodChange(selVal) {
    this.setState({value:selVal})
  
}
handleSubmit() {
  
  alert(" "+this.state.value)    
  
}

render(){
 
return(
    <>
    
    <div style={{"margin-top": 50,"margin-bottom": 50}} className="container"> 
    <Form id="myformId">
    <Table striped bordered hover>
    <thead>
      <tr>
        <th>Course</th>
        <th>Credit Weight</th>
        <th>Grade</th>
      </tr>
    </thead>
    <tbody>
    
    <Row object={[<tr>
    <td> <Form.Control type="text" /></td>
    <td><Form.Control as="select" size="sm" onChange={(val) => this.handlePeriodChange(val.target.value)} custom>
      <option value="-">-</option>
      <option value="1">1</option>
      <option value="3">3</option>
      <option value="4">4</option>
      <option value="6">6</option>
    </Form.Control></td>
    <td>
      <Form.Control as="select" name="grade" onChange={(val) => this.handlePeriodChange(val.target.value)} size="sm" custom>
      <option select>-</option>  
      <option>A</option>
      <option>B</option>
      <option>C</option>
      <option>D</option>
      <option>E</option>
    </Form.Control></td>
    </tr>]}/>
    
  
</tbody>
  </Table><Button  onClick={(val) => this.handleSubmit(val.target.value)}>Submit</Button></Form>
    </div>   
    <ModalFooter style={{"padding": 20,"background-color": '#343a40',  }}></ModalFooter>
    </>    
    );
}}

export default app;