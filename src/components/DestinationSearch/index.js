// Write your code here
import {Component} from 'react'

import DestinationContent from '../DestinationItem'

import './index.css'

class DestinationSearch extends Component {
  state = {searchKey: ''}

  updateState = event => {
    const keyValue = event.target.value.toLowerCase()
    this.setState({searchKey: keyValue})
  }

  render() {
    const {destinationsList} = this.props

    const {searchKey} = this.state

    const updatedDestinationsList = destinationsList.filter(eachItem =>
      eachItem.name.toLowerCase().includes(searchKey),
    )
    return (
      <div className="main">
        <div className="card">
          <h1 className="h1">Destination Search</h1>
          <div className="searchContainer">
            <input
              type="search"
              onChange={this.updateState}
              placeholder="Search"
              className="searchBar"
            />
            <img
              className="searchImage"
              src="https://assets.ccbp.in/frontend/react-js/destinations-search-icon-img.png"
              alt="search icon"
            />
          </div>
          <ul className="ul">
            {updatedDestinationsList.map(eachItem => (
              <DestinationContent destination={eachItem} key={eachItem.id} />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default DestinationSearch
