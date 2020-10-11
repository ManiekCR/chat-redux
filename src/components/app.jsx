import React from 'react';
import MessageList from '../containers/message_list';
import ChannelList from '../containers/channel_list';

const App = (props) => {
  return (
    <div className="app">
      <div className="logo-column">
        <img src="https://www.flaticon.com/svg/static/icons/svg/1005/1005513.svg" alt="chat logo" />
      </div>
      <ChannelList channelFromParams={props.match.params.channel} />
      <MessageList channelFromParams={props.match.params.channel} />
    </div>
  );
};

export default App;
