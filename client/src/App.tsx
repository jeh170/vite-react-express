import { useEffect, useState } from 'react'
import './App.css'

const App = () => {
  const [hello, setHello] = useState(""); 
  
  useEffect(() => {
     fetch("/api/hello").then(res => res.text()).then((text) => setHello(text))
  }, [])

  return (
    <div>
      <h1>This is a test</h1>
      <h2>{ hello }</h2>
    </div>
  )
}

export default App
