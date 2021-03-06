import React, { Component } from 'react';
import axios from 'axios';

export default class CreateUser extends Component {
  constructor(props) {
    super(props);

    this.onChangeUsername = this.onChangeUsername.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

      this.state = {
        username: '',
        description: '',
        duration: 0,
        date: new Date(),
        users: []
      }
    }

    onChangeUsername(e) { //when someone writes in username its gonna call this func
      this.setState({
        username: e.target.value  //target is the textbox, and value is whats written
      })
    }

    onSubmit(e) {
      e.preventDefault();
  //    console.log('hej');

      const user = {
        username: this.state.username,
        description: this.state.description,
        duration: this.state.duration,
        date: this.state.date
      }
      console.log(user);

      axios.post('http://localhost:5000/users/add', user)
      .then((res) => {
        console.log(res.data);
      }, (error) => {
        console.log(error);
      });  //post request till backend endpoint

      this.setState({
        username: ''
      })
    }



  render() {
    return (
      <div>
    <h3>Create New User</h3>
    <form onSubmit={this.onSubmit}>
      <div className="form-group">
        <label>Username: </label>
        <input  type="text"
            required
            className="form-control"
            value={this.state.users.username}
            onChange={this.onChangeUsername}
            />
      </div>
      <div className="form-group">
        <input type="submit" value="Create User" className="btn btn-primary" />
      </div>
    </form>
  </div>
    )
  }
}
