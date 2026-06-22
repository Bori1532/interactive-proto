import { useState } from 'react'
import { IntroScreen } from './components/intro/IntroScreen'
import { HomePage } from './pages/HomePage'

function App() {
  const [introComplete, setIntroComplete] = useState(false)

  return (
    <>
      {!introComplete && (
        <IntroScreen onComplete={() => setIntroComplete(true)} />
      )}
      {introComplete && <HomePage />}
    </>
  )
}

export default App
