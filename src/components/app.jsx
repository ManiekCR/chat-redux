import React from 'react';
import MessageList from '../containers/message_list';

const App = () => {
  return (
    <div className="app">
      <div className="logo-colum"></div>
      <div className="channels-column"></div>
      <div className="messages-column">
        <MessageList />
      </div>
    </div>
  );
};

export default App;