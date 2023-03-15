import {Component} from 'react'

import './index.css'

class EvenOddApp extends Component {
  state = {count: 0, numberType: 'Even'}

  onIncrement = () => {
    const {count} = this.state
    const randomNumber = Math.ceil(Math.random() * 100)
    const total = count + randomNumber

    if (total % 2 === 0) {
      this.setState(prevState => ({
        count: prevState.count + randomNumber,
        numberType: 'Even',
      }))
    } else {
      this.setState(prevState => ({
        count: prevState.count + randomNumber,
        numberType: 'Odd',
      }))
    }
  }

  render() {
    const {count, numberType} = this.state

    return (
      <div className="bg-container">
        <div className="card-container">
          <h1 className="count">Count {count}</h1>
          <p className="number-type">Count is {numberType}</p>
          <div>
            <button className="button" type="submit" onClick={this.onIncrement}>
              Increment
            </button>
          </div>
          <p className="instruction">
            *Increase by Random Number Between 0 to 100
          </p>
        </div>
      </div>
    )
  }
}

export default EvenOddApp
