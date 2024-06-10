import { useState, useEffect } from 'react'
import './App.css'
import WindowContainer from './WindowContainer'

function App() {
  const [windows, setWindows] = useState([]);

  useEffect(() => {
    chrome.runtime.sendMessage('getWindows', (response) => {
      console.log('Windows data:', response);
      setWindows(response);
    });
  }, []);

  return (
    <div className="App">
      {windows.map(window => (
        <WindowContainer key={window.id} window={window} />
      ))}
    </div>
  )
}

export default App
