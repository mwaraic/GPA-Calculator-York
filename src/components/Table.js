import {Form, Badge } from 'react-bootstrap';
import {Component, React} from 'react';
import ReactHTMLTableToExcel from 'react-html-table-to-excel';
import { DownloadIcon, RepeatIcon } from '@chakra-ui/icons';
import { VisuallyHidden } from "@chakra-ui/react"
import '../style.css'
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Td,
  Button,
  Stack
} from "@chakra-ui/react"
import HeadingTemplate from './Heading_Template';
import Data from './Data';

class table extends Component{
  
  constructor(props) {
    super(props)
    
    this.state = {
    filename: "",
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
    let grade=Data.GradePoint.find(gradepoint=>gradepoint.Grade===event.target.value).Point
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
  filename(event){
    event.persist();
    this.setState(oldState => {
      var newfilename = oldState.filename.slice()
      newfilename= event.target.value
      return {
        filename: newfilename
      };
    });
  }
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
    <HeadingTemplate match="GPA Calculator"/>
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
    {Data.Rows.map(n=>(
      <Tr key={n}>
      <Td>{n}</Td>
      <Td><VisuallyHidden>{this.state.course[n]}</VisuallyHidden><Form.Control size="sm" value={this.state.course[n]|| ""} type="text" onChange={e => this.selectCourse(e, n)} /></Td>
      <Td><VisuallyHidden>{this.state.status[n]}</VisuallyHidden><Form.Control size="sm" value={this.state.status[n]|| 0} as="select" style={{width:"auto"}}  onChange={e => this.selectStatus(e, n)} >
        {Data.Credits.map(
          n=>(
          <option>{n}</option>
          )
        )}
      </Form.Control></Td>
      <Td>
      <VisuallyHidden>{this.state.grade[n]}</VisuallyHidden>
        <Form.Control value={this.state.grade[n] || "-"} as="select" style={{width:"auto"}} size="sm" onChange={e => this.selectGradeP(e, n)}>
        {Data.GradePoint.map(
          n=>(
            <option>{n.Grade}</option>
          )
        )}
      </Form.Control ></Td>
      <Td><VisuallyHidden>{this.state.gradep[n]}</VisuallyHidden><Form.Control size="sm" value={this.state.gradep[n] || 0} type="number" disabled></Form.Control></Td></Tr>
    ))}
   <Td></Td><Td></Td><Td></Td><Td><p style={{display: 'inline',fontSize: 20}}>GPA</p></Td> <Td><Badge style={{fontSize: 15}}pill variant="danger">
  {this.state.gpa}
  </Badge>{' '}</Td>
   </Tbody>
  </Table>  
  <Stack spacing={4} direction="row" align="center">
  <Button size="md" colorScheme="blue" onClick={e=>this.handleSubmit(e)}><i className="fa fa-calculator" aria-hidden="true"></i></Button>

  <Button size="md" colorScheme="red" onClick={this.resetState}><RepeatIcon/></Button><br/>{''}
  <Form.Control  placeholder="Filename..." size="md" value={this.state.filename || ""} type="text" onChange={e => this.filename(e)} />
  <ReactHTMLTableToExcel
                    
                    id="test-table-xls-button"
                    className="btn btn-outline-success btn-md"
                    table="table-to-xls"
                    filename={this.state.filename}
                    sheet="tablexls"
                    buttonText={<DownloadIcon/>}/>

  </Stack>
   </Form> 
    </>    
    );
}}

export default table;