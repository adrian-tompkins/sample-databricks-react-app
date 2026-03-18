import { useState, useEffect } from 'react';

function App() {
  const [health, setHealth] = useState<string>('checking...');

  useEffect(() => {
    fetch('/api/health')
      .then((res) => res.json())
      .then((data) => setHealth(data.status))
      .catch(() => setHealth('unavailable'));
  }, []);

  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      minHeight: '100vh',
      fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
      background: 'linear-gradient(135deg, #1b3a4b 0%, #065a82 50%, #1282a2 100%)',
      color: '#ffffff',
    }}>
      <h1 style={{ fontSize: '3rem', marginBottom: '0.5rem' }}>
        Hello World
      </h1>
      <p style={{ fontSize: '1.2rem', opacity: 0.85 }}>
        Sample Databricks React App
      </p>
      <div style={{
        marginTop: '2rem',
        padding: '1rem 2rem',
        background: 'rgba(255,255,255,0.1)',
        borderRadius: '8px',
        backdropFilter: 'blur(10px)',
      }}>
        <p style={{ margin: 0 }}>
          Backend status: <strong>{health}</strong>
        </p>
      </div>
    </div>
  );
}

export default App;
