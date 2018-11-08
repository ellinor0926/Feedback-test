import React, { Component } from 'react';
import FeedbackView from './components/feedbackView';
// import Tester from './components/testComponent';

class App extends Component {
  render() {
    return (
      <div className="App">
        <FeedbackView />
        {/* <Tester /> */}
      </div>
    );
  }
}

export default App;
