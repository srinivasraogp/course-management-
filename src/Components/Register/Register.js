import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';

class Register extends Component {
    constructor(props) {
        super(props);
        this.state = {
            registerData: {
                firstName : "",
                lastName : "",
                city : "",
                gender : "",
                email : "",
                contactNumber : ""
        },
        id:props.match.params.courseIdParam
        }
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
      axios.post('http://10.117.189.137:7777/students/ingit/registration',registerData).then( (response)=> {
        resolve(response); 
        alert("User Registration Successful!");
        this.props.history.push("/summary");       
      }).catch(function (error) {
        reject(error);
      });
    });
  }
   render() {
       console.log(this.state.id);
    return (
      <div className="header  ">
         <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
          <form className='container bord'>
          <h1 align="center" className='head'>Student Register<hr className="hr"/></h1>
          <div className="form-group">
                  <label>Course ID</label>
                  <input type="text" className="form-control" id="lastName"  placeholder={this.state.id} disabled onChange={this.RegisterHandler}/>
              </div>
              <div className="form-group">
                  <label>First Name</label>
                  <input type="text" className="form-control" id="firstName"  placeholder="First Name" name="firstName" onChange={this.RegisterHandler}/>
              </div>
              <div className="form-group">
                  <label>Last Name</label>
                  <input type="text" className="form-control" id="lastName"  placeholder="Last Name" name="lastName" onChange={this.RegisterHandler}/>
              </div>
              <div className="form-group">
                  <label>City</label>
                  <input type="text" className="form-control" id="studentId"  placeholder="City" name="City" onChange={this.RegisterHandler}/>
              </div>
              <div className="form-group">
                  <label>Gender</label>
                  <input type="text" className="form-control" id="gender"  placeholder="Gender" name="gender" onChange={this.RegisterHandler}/>
              </div>
              <div className="form-group">
                  <label>Email-ID</label>
                  <input type="email" className="form-control" id="Email-ID"  placeholder="Email-ID" name="email" onChange={this.RegisterHandler}/>
              </div>
              <div className="form-group">
                  <label>Contact Number</label>
                  <input type="number" className="form-control" id="studentId"  placeholder="Contact Number" name="contactNumber" onChange={this.RegisterHandler}/>
              </div>
              <div>
                  <button className="bu1" onClick={this.register}>Register</button>
                  <button className="bu2" type='reset'>Reset</button>
              </div>
          </form>
      </div>
    )
  }
}
export default Register;

