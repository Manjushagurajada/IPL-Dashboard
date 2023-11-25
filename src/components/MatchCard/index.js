import './index.css'

const MatchCard = props => {
  const {recentMatches} = props
  const {competingTeamLogo, competingTeam, result, matchStatus} = recentMatches
  return (
    <li>
      <img src={competingTeamLogo} />
      <h1>{competingTeam}</h1>
      <p>{result}</p>
      <h1>{matchStatus}</h1>
    </li>
  )
}

export default MatchCard
