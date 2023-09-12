import './App.css'
import Card from './Components/Card.jsx'

function App() {

  const pelaajanKortti = {
    kuva: 'http://placekitten.com/120/100'
  };

  return (
    <>
      <h1>Hello world</h1>
      <div className='card'></div>
      <Card card={pelaajanKortti}/>
    </>
  )
}

export default App
