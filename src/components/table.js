import {Table, Form, Button, Badge } from 'react-bootstrap';
import {Component, React} from 'react';


const rows=[]
 for (var i=1;i<=20;i++){
 rows.push(i)
 }

const gradepoint=[
  {Grade:'A+', Point: 9},
  {Grade:'A', Point: 8},
  {Grade:'B+', Point: 7},
  {Grade:'B',Point: 6},
  {Grade:'C+', Point: 5},
  {Grade:'C', Point:4},
  {Grade:'D+',Point:3},
  {Grade:'D', Point:2},
  {Grade:'E', Point:1},
  {Grade:'F', Point:0},
  {Grade:'-', Point: 0}
]



class app extends Component{
  
  constructor(props) {
    super(props)
    
    this.state = {
    status:[undefined],
    grade:['-'],
    course:['-'],
    gradep:[undefined],
    gpa: ""
    }
    this.baseState=this.state;
  }
  selectGradeP(event, index) {
    this.selectGrade(event, index);
    let grade=gradepoint.find(gradepoint=>gradepoint.Grade===event.target.value).Point
    this.setState(oldState => {
      const newGradep= oldState.gradep.slice();
      newGradep[index]=grade
      return {
        gradep: newGradep
      };
    });
  };
  selectGrade(event, index) {
    this.setState(oldState => {
      const newGrade= oldState.grade.slice();
      newGrade[index]=event.target.value
      return {
        grade: newGrade
      };
    });
  };
  selectCourse(event, index) {
    event.persist();
    this.setState(oldState => {
      const newCourse = oldState.course.slice();
      newCourse[index] = event.target.value;
      return {
        course: newCourse
      };
    });
  };
  selectStatus(event, index) {
    event.persist();
    this.setState(oldState => {
      const newStatus = oldState.status.slice();
      newStatus[index] = event.target.value;
      return {
        status: newStatus
      };
    });
  };


  resetState = () => {
     this.setState(this.baseState)
  }
  
  handleSubmit(e){
    let numOr0 = n => isNaN(n) ? 0 : n
    const totalcredits=this.state.status.map(n=>(Number(n))).reduce((a, b) => 
    numOr0(a) + numOr0(b));
  let sum = 0;
  for(var i=0; i< this.state.status.length; i++) {
      let numOr0 = n => isNaN(n) ? 0 : n
      sum += numOr0(this.state.status.map(n=>(Number(n)))[i])*numOr0(this.state.gradep.map(n=>(Number(n)))[i]);
  }
  var y=(sum/totalcredits).toFixed(2)
  this.setState(oldState => {
    var newgpa = oldState.gpa
    newgpa=y
    return {
      gpa: newgpa
    };
  });
}

render(){
 
return(
    <>
    
    <div style={{"margin-top": 50,"margin-bottom": 50}} className="container"> 
    <Form>
    <Table striped bordered hover>
    <thead>
      <tr>
        <th>#</th>
        <th>Course</th>
        <th>Credit Weight</th>
        <th>Grade</th>
        <th>Grade Point Value</th>
      </tr>
    </thead>
    <tbody>
    {rows.map(n=>(
      <tr key={n}>
      <td>{n})</td>
      <td> <Form.Control value={this.state.course[n]|| ""} type="text" onChange={e => this.selectCourse(e, n)} /></td>
      <td><Form.Control value={this.state.status[n]|| 0} as="select" size="sm" onChange={e => this.selectStatus(e, n)} >
        <option>0</option>
        <option>1</option>
        <option>3</option>
        <option>4</option>
        <option>6</option>
        <option>8</option>
        <option>12</option>
      </Form.Control></td>
      <td>
        <Form.Control as="select" value={this.state.grade[n] || "-"} size="sm" onChange={e => this.selectGradeP(e, n)} custom>
        <option>-</option>
        <option>A+</option>  
        <option>A</option>
        <option>B+</option>
        <option>B</option>
        <option>C+</option>
        <option>C</option>
        <option>D+</option>
        <option>D</option>
        <option>E</option>
        <option>F</option>
      </Form.Control></td>
      <td><Form.Control value={this.state.gradep[n] || 0} type="number" disabled></Form.Control></td></tr>
    ))}
  <td><Button variant="dark" style={{marginRight: 10 }} onClick={e=>this.handleSubmit(e)}>Calculate</Button></td><td><Button  variant="dark" onClick={this.resetState}>Reset</Button>
  </td><td></td><td><p style={{marginLeft: 10,display: 'inline',fontSize: 20}}>Your GPA is: </p></td><td><Badge style={{fontSize: 20}}pill variant="danger">
  {this.state.gpa}
  </Badge>{' '}</td>
   </tbody>
  </Table>
 </Form>
    </div>   
    
    </>    
    );
}}

export default app;