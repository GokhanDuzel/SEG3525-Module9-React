import React, { Component } from "react";
import PropTypes from "prop-types";

export class TodoItem extends Component {
  getStyle = () => {
    return {
      padding: "10px",
      borderBottom: "1px #ccc dashed",
    };
  };

  componentDidMount = (props) => {
    console.log(this.props.todo);
  };

  render() {
    const { id, title, comment } = this.props.todo;
    return (
      <div style={this.getStyle()}>
        <button onClick={this.props.delTodo.bind(this, id)} style={btnStyle}>
          <i class="fas fa-times-circle"></i>
        </button>
        <p style={divStyle}>
          {title}{" said: "}
          {comment}

        </p>
      </div>
    );
  }
}

// PropTypes
TodoItem.propTypes = {
  todo: PropTypes.object.isRequired,
  markComplete: PropTypes.func.isRequired,
  delTodo: PropTypes.func.isRequired,
};

const btnStyle = {
  background: "#ff0000",
  color: "#fff",
  border: "none",
  padding: "5px 9px",
  borderRadius: "50%",
  cursor: "pointer",
  float: "left",
};

const divStyle = {
  marginLeft: "40px",
};

export default TodoItem;
