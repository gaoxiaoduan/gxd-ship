import React from 'react';
import Button, { ButtonSize, ButtonType } from './components/Button/Button';
import Alert from './components/Alert/Alert';
function App() {
  return (
    <div className="App">
      <Button size={ButtonSize.Small} className="aaa" autoFocus>123</Button>
      <Alert></Alert>
    </div>
  );
}

export default App;
