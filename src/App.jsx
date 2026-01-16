import { useState } from 'react'
import ScientificCalculator from './components/ScientificCalculator'
import StringOperations from './components/StringOperations'

function App() {
  const [mode, setMode] = useState('scientific')

  return (
    <div className="calculator-container">
      <div className="mode-switch">
        <button
          className={`mode-btn ${mode === 'scientific' ? 'active' : ''}`}
          onClick={() => setMode('scientific')}
        >
          Scientific
        </button>
        <button
          className={`mode-btn ${mode === 'string' ? 'active' : ''}`}
          onClick={() => setMode('string')}
        >
          String Ops
        </button>
      </div>

      {mode === 'scientific' ? (
        <ScientificCalculator />
      ) : (
        <StringOperations />
      )}

      <div className="footer">
        <p>Scientific Calculator with String Operations</p>
      </div>
    </div>
  )
}

export default App
