import React,{ Component } from 'react'
import fire from './fire'

class Home extends Component {

    logout = () => {
        fire.auth().signOut();
    }

    render() {
        return(
            <div>
                <h1> Home Page !</h1>
                <button onClick={this.logout}>LogOut</button>
            </div>
        )
    }
}

export default Home