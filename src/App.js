import React, { Component } from 'react';
import './App.css';
import httpClient from './httpClient.js'

class App extends Component {
  
  state = {
    users: []
  }

  componentDidMount() {
    httpClient.getUsers().then((serverResponse) => {
      this.setState({
        users: serverResponse.data.users
      })
    })
  }

  render() {
    console.log(this.state.users)
    return (
      <div className="App">
        <form>
          <input ref ="name" type="text" placeholder="Name"/>
          <input ref ="email" type="text"placeholder="Email"/>
          <input ref ="bio" type="text" placeholder="Bio"/>
          <input ref ="avatar" type="text" placeholder="Image URL"/>
          <button>Submit</button>
        </form>
        <div>
            {this.state.users.map((u) => {
              return (
              <div key={u._id}>
                <h2>{u.name}</h2>
                <img src={u.avatar} alt={u.name}/>
                <p>{u.bio}</p>
              </div>
              )
            })}
        </div> 
      </div>
    );
  }
}

export default App;
