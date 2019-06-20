import React,{Component} from "react";
import {HashRouter,Route,Switch} from "react-router-dom";
import Login from './Components/login/Login';
import Homepage from './Components/homepage/Homepage';
import Header from './Components/header/Header';
import Footer from './Components/footer/Footer';
import Courselist from './Components/courselist/Courselist';
import Summary from './Components/summary/Summary';
import Register from './Components/Register/Register';
class App extends Component{
  constructor(props){
    super(props);
    this.state={
      data:""
    }
  }
  // getUser=(data,props)=>{
  //   this.setState({data});
  //   console.log(this.state.data)
  // }
  render(){
    const{data}=this.state
    console.log(this.state.data)
    return(
      <div>
         <HashRouter>
         <Header/>
         <div>
           <Switch>
           <Route path='/' component={Homepage} exact />
              <Route path="/login" component={Login}/>
              <Route path="/summary" component={Summary}/>
              <Route path="/list" component={Courselist}/>
              <Route path="/reg/:courseIdParam/:courseNameParam" component={Register}/>
           </Switch>
         </div>
         </HashRouter>
         <Footer/>
      </div>
    )
  }
}
export default App;