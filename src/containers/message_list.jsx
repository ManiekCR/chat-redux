import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from 'redux';
import Message from '../components/message';
import { setMessages, fetchMessages } from '../actions';


class MessageList extends Component {
  componentWillMount() {
    this.props.fetchMessages();
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
      <div className="channel-container">
        <div className="channel-title">
          <h3>Channel</h3>
        </div>
        <div className="channel-content">
          {this.renderList()}
        </div>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    { setMessages, fetchMessages },
    dispatch
  );
}

function mapStateToProps(state) {
  return {
    messages: state.messages
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(MessageList);
