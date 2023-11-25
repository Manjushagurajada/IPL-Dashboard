import './index.css'

const LatestMatch = props => {
  const {latestMatchDetails} = props
  const {
    date,
    venue,
    result,
    competingTeamLogo,
    firstInnings,
    secondInnings,
    manOfTheMatch,
    umpires,
    competingTeam,
  } = latestMatchDetails
  return (
    <li>
      <div>
        <h1>{competingTeam}</h1>
        <p>{date}</p>
        <p>{venue}</p>
        <p>{result}</p>
      </div>
      <img src={competingTeamLogo} />
      <div>
        <h1>First Innings</h1>
        <p>{firstInnings}</p>
        <h1>Second Innings</h1>
        <p>{secondInnings}</p>
        <h1>Man of The Match</h1>
        <p>{manOfTheMatch}</p>
        <h1>Umpires</h1>
        <div>
          <p>{umpires[0]}</p>
          <p>{umpires[1]}</p>
        </div>
      </div>
    </li>
  )
}

export default LatestMatch
