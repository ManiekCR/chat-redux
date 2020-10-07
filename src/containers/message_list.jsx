import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from 'redux';
import Message from '../components/message';
import MessageForm from '../containers/message_form';
import { fetchMessages } from '../actions';

class MessageList extends Component {
  componentWillMount() {
    this.props.fetchMessages();
  }

  fetchMessages = () => {
    this.props.fetchMessages(this.props.selectedChannel);
  }

  renderList() {
    return this.props.messages.map((message) => {
      return (
        <Message key={message.id} message={message} />
      );
    });
  }

  render() {
    return (
      <div className="channel-container">
        <div className="channel-title">
          <span>Channel #{this.props.selectedChannel}</span>
        </div>
        <div className="channel-content" ref={(list) => { this.list = list; }}>
          {this.renderList()}
        </div>
        <MessageForm />
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    { fetchMessages },
    dispatch
  );
}

function mapStateToProps(state) {
  return {
    messages: state.messages,
    selectedChannel: state.selectedChannel
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(MessageList);
