import './App.css'
import quotes from "../src/DataBase/quotes.json"
import { getRandomElements} from "./utils/random"
import { useState } from 'react';
import Card from './components/Card';

function App() {

  const backgrounds = ["img1", "img2", "img3"]

  const [quote, setQuote] = useState(getRandomElements(quotes))
  const [bg, setBg] = useState(getRandomElements(backgrounds))

  const handleChange = () => {
    setQuote(getRandomElements(quotes))
    setBg(getRandomElements(backgrounds))
  }

  return (
    <main className={`app ${bg}`}>
      <Card quote={quote} handleChange={handleChange} />
    </main>
  )
}

export default App
