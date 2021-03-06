import React, { Component, Fragment} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Loginuser.css';
import logo from '../../assets/Logo.png';
import { Link, withRouter } from 'react-router-dom';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';

const defaultState = {
    username:null,
    password:null,
}

class Loginuser extends Component {

    constructor(){
        super();
        this.state = defaultState;
        this.handleInputChange = this.handleInputChange.bind(this);
    }

    handleInputChange(event) {
        const target = event.target;
        var value = target.value;
        const name = target.name;
        
        this.setState({
            [name]: value
        });
        
    }

    validate(){
        let usernameError = "";
        let passwordError = "";

        if(this.state.username==null || this.state.username==''){
            usernameError = "Username field is required";
        }


        if(this.state.password ==null || this.state.password ==''){
            passwordError = "Password field is required";
        }
        this.setState({usernameError, passwordError});
        if(usernameError!= "" || passwordError != ""){
            
            return false;
        }
        return true;
    }

    submit(){
        if(this.validate()){
            console.warn(this.state);
            this.setState(defaultState);
        }
    }
    render() {
        return (
            
            <Fragment>
                <div className="card shadow mx-5 my-5 containeruser ">
                    <div className="container">
                        <div className="row">
                        <div className="col-md-6">
                            <img src={logo} style={{
                                height:250,
                            }}/> 
                            <br />
                            <label>Belum Punya Akun?</label><br />
                            <Link to='/Registrasi'><a button type="button" className="btn btn-outline-success my-3"
                            style={{width: 250}}>Sign up</a></Link>

                        </div>

                        <div className="col-md-6">
                            <div className="card justify-content-center mb-5">

                            <div className="card-body">
                            <h2 className="card-title text-center">LOGIN</h2>
                            
                                <div className="form-group">
                                    <label>Username</label>
                                    <input type="text" className="form-control" id="usernameLogin" name="username"  value={this.state.username} onChange={this.handleInputChange}/>
                                    <span className="text-danger">{this.state.usernameError}</span><br />
                                    
                                    <label>Password</label>
                                    <input type="password" className="form-control" id="passwordLogin" name="password" value={this.state.password} onChange={this.handleInputChange} />
                                    <span className="text-danger">{this.state.passwordError}</span>

                                    <button type="submit" class="btn btn-success mt-4" onClick={()=>this.submit()}
                                        style={{width: '100%'}}>Login</button>
                                </div>
                            
                        </div>

                            </div>

                        </div>


                        </div>
                    </div>
                </div>
            </Fragment>
        )
    }
}

export default Loginuser;