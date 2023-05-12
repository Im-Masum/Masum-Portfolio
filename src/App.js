import React from 'react'
import CounterView from './features/counter/CounterView';
import PostView from './features/posts/PostView';

function App() {
  return (
    <div className="App">
      <h1>Counter App</h1>
      <h4>Using Redux ToolKit</h4>
      <CounterView />
      <PostView />
    </div>
  );
}

export default App;
