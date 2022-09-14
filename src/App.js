import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import { useEffect } from 'react';

function App() {
  const [ text, setText ] = useState('');
  
  useEffect(() => {
    fetch('http://blog.api/Tag/17/')
      .then(response => {
        console.log('response:', response);
        
        return response.text()
      })
      .then(content => {
        console.log('content:', content);
        
        return setText(content)
      });
  }, []);
  
  return (
    <div className="App">
      {text}
    </div>
  );
}

export default App;
