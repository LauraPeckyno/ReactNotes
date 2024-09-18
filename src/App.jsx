import { useState } from 'react'
import Profile from './components/Profile/Profile'
import Display from './components/Display/Display';
import Button from './components/Button/Button';
import Dog from './components/Dog/Dog';
import './App.css'

function App() {
  const [counter, setCounter] = useState(0);

  return (
    <>
      <Profile name="John" />
      <Display counter={counter} />
      <Button setCounter={setCounter} text="Decrement" />
      <Button setCounter={setCounter} text="Increment" />
      <Dog />
    </>
  )
}

export default App
