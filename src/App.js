import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import httpClient from './httpClient.js'

// httpClient({method: 'get', url: '/users'}).then((serverResponse) => {
//   console.log(serverResponse.data.users)
// }) 

class App extends Component {
  
  state = {
    users: []
  }

  componentDidMount() {
    httpClient.getUsers().then((serverResponse) => {
      console.log(serverResponse.data.users)
    })
  }

  render() {
    console.log(this.state.users)
    return (
      <div className="App">
        
      </div>
    );
  }
}

export default App;
