// Write your code here
// Write your code here
import {Component} from 'react'

import './index.css'

class FruitsCounter extends Component {
  state = {mangoCount: 0, bananaCount: 0}

  onBanana = () => {
    this.setState(prevState => ({bananaCount: prevState.bananaCount + 1}))
  }

  onMango = () => {
    this.setState(prevState => ({mangoCount: prevState.mangoCount + 1}))
  }

  render() {
    const {mangoCount, bananaCount} = this.state

    return (
      <div className="bg-container">
        <div className="sub-container">
          <h1 className="heading">
            Bob ate <span className="count">{mangoCount}</span> mangoes
            <span className="count">{bananaCount}</span> bananas
          </h1>
          <div className="image-count-container">
            <div className="image-container">
              <img
                src="https://assets.ccbp.in/frontend/react-js/mango-img.png"
                alt="mango"
                className="image"
              />
            </div>
            <div className="button-count">
              <button className="button" type="button" onClick={this.onMango}>
                Eat Mango
              </button>
            </div>
            <div className="image-container">
              <img
                src="https://assets.ccbp.in/frontend/react-js/banana-img.png"
                alt="banana"
                className="image"
              />
            </div>
            <div className="button-count">
              <button className="button" type="button" onClick={this.onBanana}>
                Eat Banana
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default FruitsCounter
