import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { AppBar, Toolbar, Typography } from '@material-ui/core';

export default class Navbar extends Component {

  render() {
    return (
      <AppBar 
      position="relative"
      color="secondary"
      //className="navbar navbar-dark bg-dark navbar-expand-lg"
      >
        <Toolbar>
          <Link to="/" className="navbar-brand">
            <Typography variant="h4" color="primary">ExcerTracker</Typography>
          </Link>
          <div className="collpase navbar-collapse">
          <Typography variant="h6" color="primary"> 
          <ul className="navbar-nav mr-auto">
            <li className="navbar-item">
            <Link to="/" className="nav-link">Exercises</Link>
            </li>
            <li className="navbar-item">
            <Link to="/create" className="nav-link">Create Exercise Log</Link>
            </li>
            <li className="navbar-item">
            <Link to="/user" className="nav-link">Create User</Link>
            </li>
          </ul>
          </Typography>
          </div>
        </Toolbar>
      </AppBar>
    );
  }
}

