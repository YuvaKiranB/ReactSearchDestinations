// Write your code here

import './index.css'

const DestinationContent = props => {
  const {destination} = props

  const {name, imgUrl} = destination

  return (
    <li className="card2">
      <img className="image2" src={imgUrl} alt={name} />
      <p className="p1">{name}</p>
    </li>
  )
}

export default DestinationContent
