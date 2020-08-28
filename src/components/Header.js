import React from 'react'
import Contact from './Contact'
import Competence from './Competence'
import Service from './Service'
import Portfolio from './Portfolio'
import { BrowserRouter as Router, Link, Route} from 'react-router-dom'
import '../Css/Header.css'


class Header extends React.Component{
    render(){
        return(
            <Router>
                <div className="navigation">
                    <div className="info__site">
                        <p className="logo_site"></p>
                        <p className="name__site">Nom du site</p>
                    </div>
                
                    <div className="navigation__options">
                        <div className="navigation__option">
                            <Link to="/Services">
                                <i class="fa fa-server"></i>
                                <p>Services</p>
                            </Link>
                        </div>
                        <div className="navigation__option">
                            <Link to="/Competences">
                                Compétences
                            </Link>
                        </div>
                        <div className="navigation__option">
                            <Link to="/Portfolio">
                                Portfolio
                            </Link>
                        </div>
                        <div className="navigation__option">
                            <Link to="/Contact">
                                Contact
                            </Link>
                        </div>
                    </div>                  
                </div>
                <Route exac path="/Services" component={Service} ></Route>
                <Route exac path="/Competences" component={Competence} ></Route>
                <Route exac path="/Portfolio" component={Portfolio} ></Route>
                <Route exac path="/Contact" component={Contact} ></Route>
            </Router>
        )
    }

}

export default Header