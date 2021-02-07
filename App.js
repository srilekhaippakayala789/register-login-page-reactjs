import React ,{ Component } from 'react'
import fire from './fire'
import Home from './Home'
import Login from './Login'
import './App.css'

class App extends Component {
  constructor(){
    super();
    this.state={
      user: null
    }
  }

  componentDidMount() {
    this.authListener();
  }

  authListener(){
    fire.auth().onAuthStateChanged((user) => {
      if(user) {
        this.setState({user});
      }else {
        this.setState({user:null});
      }
    });
  }

  render() {
    return(
      <div>
        {this.state.user ? (<Home />) : (<Login />)}
      </div>
    )
  }
}

export default App
