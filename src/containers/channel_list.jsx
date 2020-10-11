import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { selectChannel } from '../actions';
import { Link } from 'react-router-dom';

class ChannelList extends Component {
  handleClick = (channel) => {
    this.props.selectChannel(channel);
  }

  renderChannelsList() {
    return this.props.channels.map((channel) => {
      return (
        <li
          key={channel}
          className={channel === this.props.selectedChannel ? 'active' : null}
          onClick={() => this.handleClick(channel)}
          role="presentation"
        >
          <Link to={`/${channel}`}>
            #{channel}
          </Link>
        </li>
      );
    });
  }

  render() {
    return (
      <div className="channels-column">
        <span>Redux Chat</span>
        <ul>
          {this.renderChannelsList()}
        </ul>
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
