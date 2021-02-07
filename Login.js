import React,{ Component } from 'react'
import fire from './fire'

class Login extends Component {
    constructor(props) {
        super(props);
        this.state ={
            email:'',
            password:'',
            fireErrors:'',
            formTitle:'Login',
            loginbtn: true
        }
    }

    handleChange= e => {
        this.setState({[e.target.name]: e.target.value});
    }

    login = e => {
        e.preventDefault();
        fire.auth().signInWithEmailAndPassword(this.state.email,this.state.password)
        .catch((error) => {
            this.setState({fireErrors: error.message})
        });
    }

    register = e => {
        e.preventDefault();
        fire.auth().createUserWithEmailAndPassword(this.state.email,this.state.password)
        .catch((error) => {
            this.setState({fireErrors: error.message})
        });
    }

    getAction = action => {
        if(action === 'reg'){
            this.setState({formTitle: 'Register New User',loginbtn:false, fireErrors:''});
        }else{
            this.setState({formTitle: 'Login',loginbtn:false, fireErrors:''});
        }
    }

    render() {

        let errorNotification = this.state.fireErrors ?
        (<div className="Error" >{this.state.fireErrors}</div>) : null;

        let submitbtn = this.state.loginbtn ?
        (<input className="loginbtn" type="submit" onClick={this.login} value="Enter" />) :
        (<input className="loginbtn" type="submit" onClick={this.register} value="Register" />);

        let login_register = this.state.loginbtn ?
        (<button className="registerbtn"onClick={() => this.getAction('reg')}>Register</button>) :
        (<button className="registerbtn"onClick={() => this.getAction('login')}>Login</button>) ;

        return (
            <div className="form_block">
                <div id="title">{this.state.formTitle}</div>
                <div className="body">
                    {errorNotification}
                    <form>

                        <input 
                        type="text"
                        placeholder="Enter your Email"
                        value={this.state.email}
                        onChange={this.handleChange}
                        name="email" />

                        <input 
                        type="password"
                        placeholder="Enter your password"
                        value={this.state.password}
                        onChange={this.handleChange}
                        name="password" />

                        {submitbtn}
                    </form>
                    {login_register}
                </div>
            </div>
        )
    }
}

export default Login
