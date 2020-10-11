import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Link } from 'react-router-dom';
import { fetchMessages } from '../actions';


class ChannelList extends Component {
  componentWillReceiveProps(nextProps) {
    if (nextProps.channelFromParams !== this.props.channelFromParams) {
      this.props.fetchMessages(nextProps.channelFromParams);
    }
  }

  renderChannelsList() {
    return this.props.channels.map((channel) => {
      return (
        <li
          key={channel}
          className={channel === this.props.channelFromParams ? 'active' : null}
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

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    { fetchMessages },
    dispatch
  );
}

function mapStateToProps(state) {
  return {
    channels: state.channels
  };
}


export default connect(mapStateToProps, mapDispatchToProps)(ChannelList);
