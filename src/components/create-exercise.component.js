import React, { Component } from 'react';
import axios from 'axios';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import { Typography, TextField, Select, InputLabel, FormControl, MenuItem, Button} from '@material-ui/core';



export default class CreateExercise extends Component {
constructor(props) {
  super(props);

  this.onChangeUsername = this.onChangeUsername.bind(this);
  this.onChangeDescription = this.onChangeDescription.bind(this);
  this.onChangeDuration = this.onChangeDuration.bind(this);
  this.onChangeDate = this.onChangeDate.bind(this);
  this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      username: '',
      description: '',
      duration: '',
      date: new Date(),
      users: []
    }
  }

  componentDidMount() {
    axios.get('http://localhost:5000/users/')
      .then(response => {
        if (response.data.length > 0) {
          this.setState({
            users: response.data.map(user => user.username),
            username: response.data[0].username
          })
        }
      })
  }

onChangeUsername(e) { //when someone writes in username its gonna call this func
  this.setState({
    username: e.target.value  //target is the textbox, and value is whats written
  })
}

onChangeDescription(e) {
  this.setState({
    description: e.target.value
  })
}

onChangeDuration(e) {
  this.setState({
    duration: e.target.value
  })
}

onChangeDate(date) {
  this.setState({
    date: date
  })
}

onChangeUsers(e) {
  this.setState({
    users: e.target.value
  })
}

onSubmit(e) {
  e.preventDefault();

  const exercise = {
    username: this.state.username,
    description: this.state.description,
    duration: this.state.duration,
    date: this.state.date
  }
  console.log(exercise);

  axios.post('http://localhost:5000/exerciseLogs/add', exercise)
  .then((res) => {
    console.log(res.data);
  }, (error) => {
    console.log(error);
  });

//  window.location = '/'; // take user back to list of exercise after submit
}

  render() {
    return (
      <div>
        <Typography variant="h4" color="primary">Create New Exercise Log</Typography>
        <form onSubmit={this.onSubmit}>
          <div className="form-group">
            <FormControl>
              <label id="select-username-label">Username: </label>
              <select
                  defaultValue=''
                  required
                  className="form-control"
                  value={this.state.users.username}
                  onChange={this.onChangeUsername}>
                  {
                    this.state.users.map(function(user) {
                      return <option
                        key={user}
                        value={user}>{user}
                        </option>;
                    })
                  }
              </select>
            </FormControl>
          </div>
          <div className="form-group">
            <TextField
                required
                label="Description:"
                className="form-control"
                value={this.state.description}
                onChange={this.onChangeDescription}
                />

          </div>
          <div className="form-group">
            <TextField
                label="Duration (in minutes): "
                className="form-control"
                value={this.state.duration}
                onChange={this.onChangeDuration}
                />
          </div>
          <div className="form-group">
            <label>Date: </label>
            <div>
              <DatePicker
                label="Date"
                selected={this.state.date}
                onChange={this.onChangeDate}
              />
            </div>
          </div>
          <div>
          <Button
            type="submit"
            className="btn btn-primary"
            color='secondary'
            size='large'
            variant='contained'
            >
              Create Exercise Log
          </Button>
          </div>
        </form>
      </div>
    )
  }
}
