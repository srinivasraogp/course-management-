import React,{Component} from "react";
import {BrowserRouter,Route,Switch} from "react-router-dom";
import Login from './Components/login/Login';
import Homepage from './Components/homepage/Homepage';
import Header from './Components/header/Header';
import Footer from './Components/footer/Footer';
import Courselist from './Components/courselist/Courselist';
import Summary from './Components/summary/Summary';
import Register from './Components/Register/Register';
class App extends Component{
  render(){
    return(
      <div>
         <BrowserRouter>
         <Header/>
         <div>
           <Switch>
           <Route path='/' component={Homepage} exact />
              <Route path="/login" component={Login}/>
              <Route path="/summary" component={Summary}/>
              <Route path="/list" component={Courselist}/>
              <Route path="/reg/:courseIdParam" component={Register}/>
           </Switch>
         </div>
         </BrowserRouter>
         <Footer/>
      </div>
    )
  }
}
export default App;