import React ,{Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import  {BrowserRouter, Route, Switch, Link} from 'react-router-dom';
import axios from 'axios';
import courseList from "./courseList.css";

import { withTranslation} from 'react-i18next';
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemPanel,
  AccordionItemButton
} from 'react-accessible-accordion';
import 'react-accessible-accordion/dist/fancy-example.css';


class Courselist extends Component {
  constructor(props) {
    super(props);
    this.state = {
      courselist: []
    }
  }

reg=(data)=>{
    const {courselist} = this.state
    console.log(this.state.courselist[0].courseId);
    this.props.history.push("/reg/" + data);
}
componentDidMount() {
    this.getData().then(response => {
        console.log(response)
      this.setState({ courselist:response.data });
      console.log(this.state.courselist,"list")
    });

  }
  getData = () => {
    return new Promise((resolve, reject) => {
      axios.get('http://10.117.189.28:7777/students/ingit/courses').then( (response) =>{
        resolve(response);
      }).catch(function (error) {
        reject(error);
      });
    });
  }
 
render() {
  const {courselist} = this.state
  console.log(this.state.courselist.studentId);
        let { t } = this.props;
  return (
  
    <div className="conatiner"><h2 align="center">Courses Offered</h2>
          
    <div className="dropdown  acc">
      {
         this.state.courselist.map((course, i) => {
        return( <Accordion key={i}>
          <AccordionItem >
          <AccordionItemHeading>
          <AccordionItemButton >{course.courseName}</AccordionItemButton>
          </AccordionItemHeading>
          <AccordionItemPanel>
     <div>
                    <table><tr><td>Course ID</td><td>{course.courseId}</td></tr>
                     <tr><td>Course Name</td><td>{course.courseName}</td></tr>
                     <tr><td>Course Duration</td><td>{course.courseDuration}</td></tr>
                     <tr><td>Fee</td><td>{course.fee}</td></tr>
                    
                     </table>
                     <button onClick={()=>this.reg(course.courseId)} className="bt">Register</button>
         </div>
     </AccordionItemPanel>
 </AccordionItem>
</Accordion>

)
}
)}
 </div>
</div>
);
}
}

export default withTranslation()(Courselist);