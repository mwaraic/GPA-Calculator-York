import Example from './components/Example';
import './style.css'
import MainHeading from './components/Main_Heading';
import HeadingTemplate from './components/Heading_Template';
import SplitWithImage from './components/Features';
import Table from './components/Table';
export default function Page(){
  

return(
    <>
    <MainHeading/>
    <div style={{padding: 10, minWidth: 20}} className="container">
    <HeadingTemplate match="Features"/>
    <SplitWithImage/>
    <HeadingTemplate match="Example"/>
    <Example/>
    <HeadingTemplate match="GPA Calculator"/>
    <Table/>
   </div>
    </>    
    );
}
