import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class AddTodo extends Component {
  state = {
    title: '',
    comment: ''
  }

  onSubmit = (e) => {
    e.preventDefault();
    this.props.addTodo(this.state.title, this.state.comment);
    this.setState({ comment: '' });
    this.setState({ title: '' });
  }

  onChange = (e) => this.setState({ [e.target.name]: e.target.value });

  render() {
    return (
      <form onSubmit={this.onSubmit}>
        <input 
          type="text" 
          name="title" 
          style={{ padding: '5px' }}
          placeholder="Your name..." 
          value={this.state.title}
          onChange={this.onChange}
          className="blueText"
          required
        /><br/><br/>
        <input 
          type="text" 
          name="comment" 
          style={{ padding: '5px' }}
          placeholder="Your comment..." 
          value={this.state.comment}
          onChange={this.onChange}
          className="blueText"
          required
        /><br/><br/>
        <input 
          type="submit" 
          value="Submit" 
          className="blueText"
        />
      </form>
    )
  }
}

// PropTypes
AddTodo.propTypes = {
  addTodo: PropTypes.func.isRequired
}

export default AddTodo
