import './App.css';
import { useState } from 'react';
import Quotes from './Quotes.json'
import QuoteBox from './Components/QuoteBox'
import Button from './Components/Buttons'


function App() {

  const colors = ['lightgreen', 'lightcoral', 'lightblue', 'lightsalmon', 'lightseagreen','gold', 'lightblue',]
 
  const randomColor = Math.floor(Math.random() * colors.length)
  document.body.style=`background: ${colors[randomColor]}`

  const quoteRandom = Math.floor(Math.random() * Quotes.quotes.length)
  const [quotes, setQuote] = useState(Quotes.quotes[quoteRandom])
  
 
  function changeQuotes(){
    const quoteRandom = Math.floor(Math.random() * Quotes.quotes.length)
    setQuote(Quotes.quotes[quoteRandom])
    
  }

  return (
    <div className="App" >
      <header className='Container' style={{color:colors[randomColor]}}>
      <div className='container-appointment'>
      <QuoteBox text={quotes} />
      <div className='container-button'>
      <Button Buttons={changeQuotes}  />
			</div>
    </div>
  </header>
 </div>
  
 );
}

export default App;
