import React, { useState } from 'react'

function App() {
  const [backendMessage, setBackendMessage] = useState('Click button to load...')

  const fetchData = async () => {
    try {
      const res = await fetch('/api/hello')
      const data = await res.json()
      setBackendMessage(data.message)
    } catch (err) {
      setBackendMessage('❌ Failed to fetch from backend!')
    }
  }

  return (
    <div style={{ fontFamily: 'Arial', textAlign: 'center', marginTop: '50px' }}>
      <h1>🚀 React + Node.js CI/CD with Docker</h1>
      <p>Message from backend: <strong>{backendMessage}</strong></p>
      <button
        onClick={fetchData}
        style={{
          padding: '10px 20px',
          fontSize: '16px',
          marginTop: '20px',
          cursor: 'pointer'
        }}
      >
        Fetch from Backend
      </button>
    </div>
  )
}

export default App