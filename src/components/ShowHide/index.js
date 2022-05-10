import {Component} from 'react'

import './index.css'

class ShowHide extends Component {
  state = {isFirstNameShown: false, isLastNameShown: false}

  callFistName = () => {
    this.setState(prevState1 => ({
      isFirstNameShown: !prevState1.isFirstNameShown,
    }))
  }

  callLastName = () => {
    this.setState(prevState2 => ({
      isLastNameShown: !prevState2.isLastNameShown,
    }))
  }

  render() {
    const {isFirstNameShown, isLastNameShown} = this.state
    return (
      <div className="bg-container">
        <h1 className="heading">Show/Hide</h1>
        <div className="buttons-container">
          <div className="container">
            <button
              type="button"
              onClick={this.callFirstName}
              className="button"
            >
              Show/Hide FirstName
            </button>
            {isFirstNameShown ? <p className="para">Joe</p> : null}
          </div>
          <div className="container2">
            <button
              type="button"
              onClick={this.callLastName}
              className="button1"
            >
              Show/Hide LastName
            </button>
            {isLastNameShown ? <p className="para">Jonas</p> : null}
          </div>
        </div>
      </div>
    )
  }
}

export default ShowHide
