import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {withRouter} from "react-router-dom";
import axios from 'axios';
import login from './login.css';
import Register from '../Register/Register'
import { withTranslation} from 'react-i18next';
import { createContext } from 'react';
import Courselist from '../courselist/Courselist';
export const AppContext = React.createContext();

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
           loginData:{
             studentId:""
           },
        res:[]
        }
      }
  loginHandler = (event)=>{
    const {loginData}=this.state;
    loginData[event.target.name]=event.target.value;
    this.setState({loginData});
    console.log(this.state.loginData, "name");
  }
  login =(event)=>{
    const{res} = this.state;
    event.preventDefault();
    const{loginData}=this.state;
    this.getLoginData(loginData).then(response=> {
      console.log(response);
      this.setState({ res: response.data });
      localStorage.setItem('res', this.state.loginData.studentId);
      if(this.state.res.loginStatus === "login success" && this.state.res.regStatus==="registration not success"){
      alert("Login Successful!")
        this.props.history.push('/list');
       }
       else if( this.state.res.loginStatus === "login success" && this.state.res.regStatus==="registration success"){
         alert("Login Successful");
         this.props.history.push('/summary');
       }
       else{
         alert("Login failed. Please check the credentials")
       }
      
    }).catch(error=> {
      console.log(error);
      alert(error.message)
    })
    
  }

  getLoginData = (loginData) => {
    return new Promise((resolve, reject) => {
      axios.get(`http://10.117.189.63:7777/students/ingit/login/${this.state.loginData.studentId}`).then( (response)=> {
        resolve(response);        
      }).catch(function (error) {
        reject(error);
      });
    });
  }
   render() {
     const{loginData}=this.state;
     console.log(this.state.loginData.studentId);
    let { t } = this.props;
    return (
      <div className="header  ">
         <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
          <form className='container bord'>
          <h1 align="center" className='head'>{t('login')}<hr className="hr"/></h1>
              <div className="form-group">
                  <label>Student ID</label>
                  <input type="number" className="form-control" id="studentId"  placeholder="Student ID" name="studentId" onChange={this.loginHandler}/>
              </div>
              <div>
                  <button className="bu1" onClick={this.login}>{t('button')}</button>
                  <button className="bu2" type='reset'>{t('reset')}</button>
              </div>
          </form>
          <AppContext.Provider value={this.state.loginData.studentId}>

          </AppContext.Provider>
      </div>
    )
  }
}
export default withRouter(withTranslation() (Login));

