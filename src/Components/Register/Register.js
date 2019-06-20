import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';

class Register extends Component {
    constructor(props) {
        super(props);
        this.state = {
            registerData: {
              courseId:props.match.params.courseIdParam,
              courseName:props.match.params.courseNameParam,
              studentId:""
              
        }}
      }
      componentDidMount(){
        const {registerData}=this.state;
        const res = localStorage.getItem('res');
           registerData['studentId'] = res;
           console.log(this.state.registerData,'23456');
        console.log(res,"res")
      }
  RegisterHandler = (event)=>{
    const {registerData}=this.state;
    registerData[event.target.name]=event.target.value;
    this.setState({registerData});
    console.log(this.state.registerData, "name");
  }
  register =(event)=>{
    const{res} = this.state;
    event.preventDefault();
    const{registerData}=this.state;
    this.getLoginData(registerData).then(response=> {
      console.log(response);
      this.setState({ res: response.data });
      
    }).catch(error=> {
      console.log(error);
      alert(error.message)
    })
    
  }

  getLoginData = (registerData) => {
    return new Promise((resolve, reject) => {
      axios.post('http://10.117.189.63:7777/students/ingit/registration',registerData).then( (response)=> {
        resolve(response); 
        alert("User Registration Successful!");
        this.props.history.push("/summary");       
      }).catch(function (error) {
        reject(error);
      });
    });
  }
   render() {
    const res = localStorage.getItem('res');
     const{registerData}=this.state;
    console.log(registerData);
    return (
      <div className="header  ">
         <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
          <form className='container bord'>
          <h1 align="center" className='head'>Student Register<hr className="hr"/></h1>
          <div className="form-group">
                  <label>Course ID</label>
                  <input type="text" className="form-control" id="courseId"  placeholder={this.state.registerData.courseId} disabled name="courseId"  onChange={this.RegisterHandler}/>
              </div>
              <div className="form-group">
                  <label>Course Name</label>
                  <input type="text" className="form-control" id="courseName"  placeholder={this.state.registerData.courseName} disabled name="courseName"  onChange={this.RegisterHandler}/>
              </div>
              <div className="form-group">
                  <label>Student ID</label>
                  <input type="text" className="form-control" id="courseName"  placeholder={res} name="studentId" disabled onChange={this.RegisterHandler}/>
              </div>
              <div className="form-group">
                  <label>comments</label>
                  <input type="text" className="form-control" id="courseName"  placeholder="comments" name="comments"  onChange={this.RegisterHandler}/>
              </div>
              <div>
                  <button className="bu1" id="btn1" onClick={this.register}>Register</button>
                  <button className="bu2" id="btn2" type='reset'>Reset</button>
              </div>
          </form>
      </div>
    )
  }
}
export default Register;

