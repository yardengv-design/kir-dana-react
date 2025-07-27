
import React, { useState } from 'react'
import GifPicker from 'gif-picker-react'

export default function App() {
  const [gif, setGif] = useState(null)
  const [name, setName] = useState('')
  const [text, setText] = useState('')
  const [entries, setEntries] = useState([])

  const onSubmit = () => {
    if (!gif || !name || !text) return
    const newEntry = { gifUrl: gif.url, name, text }
    setEntries([newEntry, ...entries])
    setGif(null)
    setName('')
    setText('')
  }

  return (
    <div style={{ padding: 20, maxWidth: 500, margin: 'auto', fontFamily: 'sans-serif' }}>
      <h1 style={{ textAlign: 'center' }}>🎉 קיר הברכות של דנה 🇺🇸</h1>
      <GifPicker tenorApiKey="YOUR_TENOR_API_KEY" onGifClick={(gif) => setGif(gif)} />
      {gif && <img src={gif.url} alt="Selected gif" style={{ maxWidth: '100%', marginTop: 10 }} />}
      <input
        placeholder="שמך"
        value={name}
        onChange={(e) => setName(e.target.value)}
        style={{ display: 'block', width: '100%', marginTop: 10 }}
      />
      <textarea
        placeholder="ברכה"
        value={text}
        onChange={(e) => setText(e.target.value)}
        rows={3}
        style={{ display: 'block', width: '100%', marginTop: 10 }}
      />
      <button onClick={onSubmit} style={{ marginTop: 10, width: '100%' }}>שלח</button>
      <div style={{ marginTop: 30 }}>
        {entries.map((entry, idx) => (
          <div key={idx} style={{ marginBottom: 20, borderBottom: '1px solid #ccc', paddingBottom: 10 }}>
            <img src={entry.gifUrl} alt="entry gif" style={{ maxWidth: '100%' }} />
            <strong>{entry.name}</strong>
            <p>{entry.text}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
