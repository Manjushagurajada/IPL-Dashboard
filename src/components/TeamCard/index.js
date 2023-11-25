import {Link} from 'react-router-dom'
import './index.css'

const TeamCard = props => {
  const {teamCardDetails} = props
  const {name, id, teamImageUrl} = teamCardDetails
  return (
    <Link to={`/team-matches/${id}`}>
      <li className="card-list-item">
        <img src={teamImageUrl} alt={`item${id}`} className="card-image" />
        <h1>{name}</h1>
      </li>
    </Link>
  )
}

export default TeamCard
