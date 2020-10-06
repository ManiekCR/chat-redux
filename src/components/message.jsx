import React, { Component } from "react";
import { connect } from "react-redux";

class Message extends Component {
  render() {
    return (
      <div>
        <div>{this.props.message.author} - {this.props.message.created_at}</div>
        <div>{this.props.message.content}</div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    messages: state.messages
  };
}

export default connect(mapStateToProps)(Message);
