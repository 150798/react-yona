import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Loginuser from '../containers/Loginuser/Loginuser';
import Registrasi from '../containers/Registrasi/Registrasi';
import Profileuser from '../containers/Profile/Profileuser';

function App() {
    return (
        <Router>
            <Fragment>
                <Route path="/" exact component={Loginuser} />
                <Route path="/Registrasi" exact component={Registrasi} />
                <Route path="/Profileuser" exact component={Profileuser} />
                
                
            </Fragment>
        </Router>
    )

}

export default App;