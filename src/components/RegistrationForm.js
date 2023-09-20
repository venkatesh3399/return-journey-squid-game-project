// RegistrationForm.js
import React, {useState} from 'react'

import './register.css'

const RegistrationForm = ({onStartGame}) => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [mobile, setMobile] = useState('')
  const [difficulty, setDifficulty] = useState('easy')

  const handleSubmit = e => {
    e.preventDefault()

    if (!name || !email || !mobile) {
      alert('Please fill in all fields.')
      return
    }

    const user = {
      name,
      email,
      mobile,
      difficulty,
    }

    onStartGame(user)
  }

  return (
    <div className="form-container">
      <h2 className="content-heading">User Registration</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name" className="labels">
            Name :
          </label>
          <input
            id="name"
            className="inputs"
            type="text"
            value={name}
            onChange={e => setName(e.target.value)}
            placeholder="Ex : squidgame"
            required
          />
        </div>
        <div>
          <label htmlFor="email" className="labels">
            Email :
          </label>
          <input
            id="email"
            className="inputs"
            type="email"
            value={email}
            onChange={e => setEmail(e.target.value)}
            placeholder="Ex : squid@gmail.com"
            required
          />
        </div>
        <div>
          <label htmlFor="number" className="labels">
            Mobile Number :
          </label>
          <input
            id="number"
            className="inputs"
            type="tel"
            value={mobile}
            onChange={e => setMobile(e.target.value)}
            placeholder="Ex : 12345679"
            required
          />
        </div>
        <div>
          <label htmlFor="level" className="labels">
            Difficulty Level :
          </label>
          <select
            id="level"
            className="inputs"
            value={difficulty}
            onChange={e => setDifficulty(e.target.value)}
          >
            <option value="easy">Easy</option>
            <option value="medium">Medium</option>
            <option value="hard">Hard</option>
          </select>
        </div>
        <div>
          <button type="submit">Start Game</button>
        </div>
      </form>
    </div>
  )
}

export default RegistrationForm
