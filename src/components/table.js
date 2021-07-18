import {Form, Badge } from 'react-bootstrap';
import {Component, React} from 'react';
import ReactHTMLTableToExcel from 'react-html-table-to-excel';
import { DownloadIcon, RepeatIcon } from '@chakra-ui/icons';
import { VisuallyHidden } from "@chakra-ui/react"
import Example from './Example';
import '../style.css'
import Heading1 from './heading';
import Heading2 from './heading2';
import SplitWithImage from './Features';
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Td,
  Button,
  Grid, 
} from "@chakra-ui/react"

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
     <Heading1/>
    <div style={{marginTop: 20,marginBottom: 50, minWidth: 20}} className="container">
    <Heading2 match="Features"/>
    <SplitWithImage/>
    <Heading2 match="Example"/>
    <Example/>
    <Heading2 match="GPA Calculator"/>
    <Form>
    <Table id="table-to-xls" size="sm" style={{marginBottom: 20}}>
    <Thead>
      <Tr>
        <Td><strong>#</strong></Td>
        <Td><strong>Course</strong></Td>
        <Td><strong>Credit Weight</strong></Td>
        <Td><strong>Grade</strong></Td>
        <Td><strong>Grade Point Value</strong></Td>
      </Tr>
    </Thead>
    <Tbody>
    {rows.map(n=>(
      <Tr key={n}>
      <Td>{n}</Td>
      <Td><VisuallyHidden>{this.state.course[n]}</VisuallyHidden><Form.Control value={this.state.course[n]|| ""} type="text" onChange={e => this.selectCourse(e, n)} /></Td>
      <Td><VisuallyHidden>{this.state.status[n]}</VisuallyHidden><Form.Control value={this.state.status[n]|| 0} as="select" size="sm" onChange={e => this.selectStatus(e, n)} >
        <option>0</option>
        <option>1</option>
        <option>3</option>
        <option>4</option>
        <option>6</option>
        <option>8</option>
        <option>12</option>
      </Form.Control></Td>
      <Td>
      <VisuallyHidden>{this.state.grade[n]}</VisuallyHidden>
        <Form.Control as="select" value={this.state.grade[n] || "-"} size="sm" onChange={e => this.selectGradeP(e, n)}>
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
      </Form.Control></Td>
      <Td><VisuallyHidden>{this.state.gradep[n]}</VisuallyHidden><Form.Control value={this.state.gradep[n] || 0} type="number" disabled></Form.Control></Td></Tr>
    ))}
   <Td></Td><Td></Td><Td></Td><Td><p style={{display: 'inline',fontSize: 20}}>GPA</p></Td> <Td><Badge style={{fontSize: 15}}pill variant="danger">
  {this.state.gpa}
  </Badge>{' '}</Td>
   </Tbody>
  </Table>  
  <Grid templateColumns="repeat(3, 1fr)" gap={2}>
  <Button rounded={'full'} colorScheme="blue" onClick={e=>this.handleSubmit(e)}>Calculate</Button>
  <Button rounded={'full'}  colorScheme="red" onClick={this.resetState}><RepeatIcon/></Button>
  <Button rounded={'full'} colorScheme="green"><DownloadIcon/>
                   <ReactHTMLTableToExcel
                    
                    id="test-table-xls-button"
                    className="download-table-xls-button"
                    table="table-to-xls"
                    filename="GPAReport"
                    sheet="tablexls"
                    buttonText=""/></Button>
</Grid>
 </Form> 
   </div>
    </>    
    );
}}

export default app;