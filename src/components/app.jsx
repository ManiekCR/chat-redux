import React from 'react';
import MessageList from '../containers/message_list';

const App = () => {
  return (
    <div className="app">
      <div className="logo-column"></div>
      <div className="channels-column"></div>
      <MessageList />
    </div>
  );
};

export default App;
