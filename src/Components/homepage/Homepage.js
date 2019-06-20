import React,{Component} from 'react';
import Header from '../header/Header';
import Footer from '../footer/Footer';
import homepage from './homepage.css'
class Homepage extends Component{
    render(){
        return(
            <div>
            <img className="home" src="https://training.trainingstree.com/wp-content/uploads/2017/05/NIT-IT-Courses-Offered-and-fees-details.jpg"/>
            </div>
        )
    }
}

export default Homepage;