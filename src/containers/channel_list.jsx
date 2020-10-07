import React, { Component } from 'react';
import { connect } from 'react-redux';

class ChannelList extends Component {
  renderChannelsList() {
    return this.props.channels.map((channel) => {
      return (
        <li
          key={channel}
        >
          #{channel}
        </li>
      );
    });
  }

  render() {
    return (
      <div className="channels-column">
        <div className="channels-title">
          <span>Redux Chat</span>
        </div>
        <div className="channels-list">
          {this.renderChannelsList()};
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    channels: state.channels
  };
}

export default connect(mapStateToProps)(ChannelList);
