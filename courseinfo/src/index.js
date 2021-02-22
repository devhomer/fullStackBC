import React from 'react'
import ReactDOM from 'react-dom'

const App = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

  const Header = (props) =>{
    return(
      <h1 style = {{color : props.color}}>
        {props.title}
      </h1>
    )
  }

  const Content = (props) => {
    return(
      <p>{props.parte}</p>
    )
  }

  const Total = ({exercises}) => <p>{exercises}</p>

  return (
    <div>
      <Header color = "red" title = {course}/>
      <Content parte = {part1}/>
      <Content parte = {part2}/>
      <Content parte = {part3}/>
      <Total exercises = {'Number of exercises '+(exercises1 + exercises2 + exercises3)}/>
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))