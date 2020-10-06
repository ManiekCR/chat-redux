import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from 'redux';
import Message from '../components/message';
import { setMessages } from '../actions';


class MessageList extends Component {
  componentWillMount() {
    this.props.setMessages();
  }

  renderList() {
    return this.props.messages.map((message) => {
      return (
        <Message key={message.author} message={message} />
      );
    });
  }

  render() {
    return (
      <ul>
        {this.renderList()}
      </ul>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    { setMessages },
    dispatch
  );
}

function mapStateToProps(state) {
  return {
    messages: state.messages
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(MessageList);
