import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [message, setMessage] = useState("")

  useEffect(() => {
    fetch("http://localhost:4000/api/message")
    .then((res) => res.json())
    .then((data) => setMessage(data.message))
  },[])

  return (
    <>
      <h1>Welcome to the baseApp client application</h1>
      <h2>{message}</h2>
    </>
  )
}

export default App
