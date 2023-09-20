import React, {useState} from 'react'
import './App.css'
import RegistrationForm from './components/RegistrationForm'
import GreenLightRedLight from './components/GreenLightRedLight'

function App() {
  const [user, setUser] = useState(null)

  const handleStartGame = userData => {
    setUser(userData)
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1 className="green-light">
          Green Light/<span className="red-light">Red Light</span>
          <span className="default-color">Game</span>
        </h1>
      </header>
      <div className="App-content">
        {user ? (
          <GreenLightRedLight user={user} />
        ) : (
          <RegistrationForm onStartGame={handleStartGame} />
        )}
      </div>
    </div>
  )
}

export default App
