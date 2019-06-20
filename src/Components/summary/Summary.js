import React, { Component } from 'react';
import axios from 'axios';
import {BrowserRouter,Link} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import summary from './summary.css';
class Summary extends Component {
  constructor(props) {
    super(props);
    this.state = {
      summarylist: []
     
    }
  }
  componentDidMount() {
    this.getData().then(response => {
      this.setState({ summarylist: [response.data] });
      console.log(this.state.summarylist)
    });
  }
  getData = () => {
    const res = localStorage.getItem('res');
    console.log(res);
    const{post} =this.state;
    return new Promise((resolve, reject) => {
      axios.get(`http://10.117.189.63:7777/students/ingit/summary/${res}`).then(function (response) {
        resolve(response);
      }).catch(function (error) {
        reject(error);
      });
    });
  }
   render() {
    return(
      <div className="container bor">
          <table className="table table-hover tab">
            <thead>
             <h1 className="sum">Summary Page</h1>
             <tr><td>ID</td><td>Student ID</td><td>Course Name</td><td>Course ID</td></tr>
            </thead>
      <tbody>
          {
          this.state.summarylist.map((item, i) => {
                                return (
                                    <tr key={i}>
                                       <td >{item.id}</td>
                                        <td>{item.studentId}</td>
                                        <td>{item.courseName}</td>
                                        <td>{item.courseId}</td>
                                    </tr>
                                    
                                )
                            })
                        }
         </tbody>
         </table>                                  
                  </div>
    )
  }
}
export default Summary;

