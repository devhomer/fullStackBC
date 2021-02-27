import { useState } from 'react';
import './App.css';

const Good = (props) =>{
  return <h2>Good: {props.count}</h2>
}

const Bad = (props) =>{
  return <h2>Bad: {props.count}</h2>
}

const Neutral = ({neutral}) =>{
  return <h2>Neutral: {neutral}</h2>
}

const Positive = (props) => {
  return <h2>Positive: {props.positive * 100}%</h2>
}

const Clicks = ({clicks}) => {
  return <h2>Clicks: {clicks}</h2>
}

const Avg = ({avg}) => {
  return <h2>Avarage: {avg}</h2>
}

const Stadistics = (props) => {

  if(props.clicks > 0){
    return (
      <section>
      <Good count = {props.good} />
      <Neutral neutral = {props.neutral}/>
      <Bad count = {props.bad}/>
      <Clicks clicks ={props.clicks} />
      <Avg avg = {props.avg}/>
      <Positive positive = {props.positive}/>
    </section>
    )
  }else{
    return <h2>No feedback given</h2>
  }

}



const App = () => {

  const [good,setGood] = useState(0) 
  const [neutral,setNeutral] = useState(0)
  const [bad,setBad] = useState(0)
  const [pos,setPositive] = useState(0)
  const [clicks,setClicks] = useState(0)

  const handleClickGood = () =>{
    setGood((prev) => {
      return prev + 1
    })
    setClicks(clicks+1)
  }

  const handleClickNeutral = () =>{
    setNeutral((prev) => {
      return prev + 1
    })
    setClicks(clicks+1)
  }

  const handleClickBad = () =>{
    setBad((prev) => {
      return prev + 1
    })
    setClicks(clicks+1)
  }

  const positive = clicks == 0 ? 0 : (good / clicks)
  
  const avg = clicks == 0 ? 0 : (good + (bad * - 1)) / clicks

  return (
    <div className="App">
        <header className="App-header">
          Give a feedback      
        </header>  
    

      <section className='App-body'>
        
      <button onClick={handleClickGood}>Good</button>
      <button onClick={handleClickNeutral}>Neutral</button>
      <button onClick={handleClickBad}>Bad</button>

      </section>

      <h2>Stadistics</h2>
      <Stadistics clicks = {clicks} good = {good} neutral = {neutral} bad = {neutral} positive = {positive} avg ={avg}/>
    </div>
  );
}

export default App;

