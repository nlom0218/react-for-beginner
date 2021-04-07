import React from 'react';
import "./App.css"
import PropsBoolean from './example/R019_PropsBoolean';

function App() {
  return (
    <div className="appComponent">
      Hello
      <PropsBoolean
        trueFalse={false}
      />
      <PropsBoolean
        trueFalse
      />
    </div>
  );
}

export default App;
