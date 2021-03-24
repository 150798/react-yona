import React, { Component, Fragment} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Header.css';
import { ModalFooter } from 'react-bootstrap';

class Header extends Component{
    render(){
        return(
            <Fragment>
                <div id="myNav" className="overlayNav">
                    <div className="overlayNav-content">
                    <Link className="link" to="/">Home</Link>
                    <Link className="link" to="/Catalogue">Catalogue</Link>
                    <Link className="link" to="/Location">Location</Link>
                    <Link className="link" to="/Profileuser">Profile</Link>
                    <Link className="link" to="/Login">Logout</Link>
                    </div>
                </div>

            </Fragment>
        )
    }
}

export default Header;