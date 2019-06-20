import React,{Component} from 'react';
import header from './header.css';
import {Link} from 'react-router-dom';
import { withTranslation} from 'react-i18next';
import login from './login.png';
class Header extends Component{
    selectedLang=(event)=> {
        console.log(event.target.value);
        const {i18n} = this.props;
        i18n.changeLanguage(event.target.value);
      }
    render(){
        console.log(this.props)
    let { t } = this.props;
        return(
            <div>
            <div style={{backgroundColor: '#ff6200', color: '#fff'}}>
      <img src="https://static.puzzlefactory.pl/puzzle/189/950/original.jpg" alt='not found' width="200px" height="100px" />
       <span className='data' align='center' style={{ color: '#fff', fontSize: '40px', margin: '20%' }}>{t('head')}</span>
       <span><Link to="/login" data-toggle="tooltip" title="Login"><img className="log" src={login}/></Link></span>
       <span><select className="drp" onChange={this.selectedLang}>
           <option value="en">English</option>
           <option value="sp">Spanish</option>
           <option value="fr">French</option>
           <option value="da">German</option> 
        </select></span>
   </div>
   
       </div>
           
        )
    }
}
export default withTranslation()(Header);