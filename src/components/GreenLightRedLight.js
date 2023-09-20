import React, {useState, useEffect} from 'react'
import './register.css'

const GreenLightRedLight = ({user}) => {
  const [color, setColor] = useState('red')
  const [score, setScore] = useState(0)
  const [gameOver, setGameOver] = useState(false)

  const handleBoxClick = () => {
    if (color === 'green' && !gameOver) {
      setScore(score + 1)
      setColor('red')
    } else if (color === 'red' && !gameOver) {
      alert('Game Over!')
    }
  }

  useEffect(() => {
    if (score >= user.clicksToWin) {
      setGameOver(true)
    }

    if (!gameOver) {
      const intervalId = setInterval(() => {
        setColor(Math.random() < 0.5 ? 'red' : 'green')
      }, Math.random() * 1000 + 1000)

      return () => {
        clearInterval(intervalId)
      }
    }
  }, [score, user.clicksToWin, gameOver])

  useEffect(() => {
    if (gameOver) {
      if (score >= user.clicksToWin) {
        alert('You Win!')
      } else {
        alert('Game Over!')
      }
    }
  }, [gameOver, score, user.clicksToWin])

  return (
    <div>
      <div
        className={`box ${color}`}
        onClick={handleBoxClick}
        role="button"
        tabIndex="0"
      >
        <p>Score: {score}</p>
      </div>
    </div>
  )
}

export default GreenLightRedLight
