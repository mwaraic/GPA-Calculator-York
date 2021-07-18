import {
    Table,
    Tbody,
    Tr,
    Td,
  } from "@chakra-ui/react"
  import HeadingTemplate from "./Heading_Template"
export default function Example(){
return(<>
<HeadingTemplate match="Example"/>
<Table size="sm">
  <Tbody><Tr>
    <Td><Table>
      <Tbody><Tr>
        <Td colspan="2"><strong>Grade Point Values</strong> </Td>
      </Tr>
      <Tr>
        <Td width="34%"><div align="center"><strong>A+</strong></div></Td>
        <Td width="66%"><div align="center"><strong>9</strong></div></Td>
      </Tr>
      <Tr>
        <Td><div align="center"><strong>A</strong></div></Td>
        <Td><div align="center"><strong>8</strong></div></Td>
      </Tr>
      <Tr>
        <Td><div align="center"><strong>B+</strong></div></Td>
        <Td><div align="center"><strong>7</strong></div></Td>
      </Tr>
      <Tr>
        <Td><div align="center"><strong>B</strong></div></Td>
        <Td><div align="center"><strong>6</strong></div></Td>
      </Tr>
      <Tr>
        <Td><div align="center"><strong>C+</strong></div></Td>
        <Td><div align="center"><strong>5</strong></div></Td>
      </Tr>
      <Tr>
        <Td><div align="center"><strong>C</strong></div></Td>
        <Td><div align="center"><strong>4</strong></div></Td>
      </Tr>
      <Tr>
        <Td><div align="center"><strong>D+</strong></div></Td>
        <Td><div align="center"><strong>3</strong></div></Td>
      </Tr>
      <Tr>
        <Td><div align="center"><strong>D</strong></div></Td>
        <Td><div align="center"><strong>2</strong></div></Td>
      </Tr>
      <Tr>
        <Td><div align="center"><strong>E</strong></div></Td>
        <Td><div align="center"><strong>1</strong></div></Td>
      </Tr>
      <Tr>
        <Td><div align="center"><strong>F</strong></div></Td>
        <Td><div align="center"><strong>0</strong></div></Td>
      </Tr>
    </Tbody></Table></Td>
    <Td width="539" valign="top"><Table size="sm">
      <Tbody><Tr>
        <Td colspan="2"><strong>Courses</strong></Td>
        <Td width="12%"><div align="center"><strong>Grade</strong></div></Td>
        <Td width="14%"><div align="center"><strong>Grade Points </strong></div></Td>
        <Td width="12%">&nbsp;</Td>
        <Td width="10%"><div align="center"><strong>Credits</strong></div></Td>
        <Td width="6%">&nbsp;</Td>
        <Td width="12%"><div align="center"><strong>Points</strong></div></Td>
      </Tr>
 
      <Tr>
        <Td width="8%">&nbsp;</Td>
        <Td width="23%">&nbsp;</Td>
        <Td>&nbsp;</Td>
        <Td>&nbsp;</Td>
        <Td>&nbsp;</Td>
        <Td>&nbsp;</Td>
        <Td>&nbsp;</Td>
        <Td>&nbsp;</Td>
      </Tr>
      <Tr>
        <Td colspan="2">HIST 3900  <strong>6.0</strong> </Td>
        <Td><div align="center">C+</div></Td>
        <Td><div align="center">5.0</div></Td>
        <Td><div align="center">X</div></Td>
        <Td><div align="center">6</div></Td>
        <Td><div align="center">=</div></Td>
        <Td><div align="center">30</div></Td>
      </Tr>
      <Tr>
        <Td colspan="2">ADMS 1000  <strong>3.0</strong> </Td>
        <Td><div align="center">F</div></Td>
        <Td><div align="center">0.0</div></Td>
        <Td><div align="center">X</div></Td>
        <Td><div align="center">3</div></Td>
        <Td><div align="center">=</div></Td>
        <Td><div align="center">0</div></Td>
      </Tr>
      <Tr>
        <Td colspan="2">SOWK 3530  <strong>3.0</strong> </Td>
        <Td><div align="center">B</div></Td>
        <Td><div align="center">6.0</div></Td>
        <Td><div align="center">X</div></Td>
        <Td><div align="center">3</div></Td>
        <Td><div align="center">=</div></Td>
        <Td><div align="center">18</div></Td>
      </Tr>
      <Tr>
        <Td colspan="2">ITEC 2620 <strong>3.0 </strong></Td>
        <Td><div align="center">B+</div></Td>
        <Td><div align="center">7.0</div></Td>
        <Td><div align="center">X</div></Td>
        <Td><div align="center">3</div></Td>
        <Td><div align="center">=</div></Td>
        <Td><div align="center">21</div></Td>
      </Tr>
      <Tr>
        <Td colspan="2">PHIL 1010  <strong>3.0</strong> </Td>
        <Td><div align="center">A</div></Td>
        <Td><div align="center">8.0</div></Td>
        <Td><div align="center">X</div></Td>
        <Td><div align="center"><u>3</u></div></Td>
        <Td><div align="center">=</div></Td>
        <Td><div align="center"><u>24</u></div></Td>
      </Tr>
      <Tr>
        <Td>&nbsp;</Td>
        <Td>&nbsp;</Td>
        <Td>&nbsp;</Td>
        <Td>&nbsp;</Td>
        <Td>&nbsp;</Td>
        <Td>&nbsp;</Td>
        <Td>&nbsp;</Td>
        <Td>&nbsp;</Td>
      </Tr>
      <Tr>
        <Td>&nbsp;</Td>
        <Td>&nbsp;</Td>
        <Td>&nbsp;</Td>
        <Td>&nbsp;</Td>
        <Td><div align="center"><strong>TOTAL</strong></div></Td>
        <Td><div align="center"><strong>18</strong></div></Td>
        <Td>&nbsp;</Td>
        <Td><div align="center"><strong>93</strong></div></Td>
      </Tr>
    </Tbody></Table>
    <div style={{margin: 100}}></div>
      <div align="center"><strong>{"\n"}
        (93 divided by 18 = 5.17 Cumulative GPA) </strong></div></Td>
  </Tr>
</Tbody></Table></> )
}