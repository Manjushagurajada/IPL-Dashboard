import './index.css'

import {Component} from 'react'

import LatestMatch from '../LatestMatch'
import MatchCard from '../MatchCard'

class TeamMatches extends Component {
  state = {matchesList: {}}

  componentDidMount() {
    this.getMatchDetails()
  }

  getFormattedData = data => ({
    umpires: data.umpires,
    result: data.result,
    manOfTheMatch: data.man_of_the_match,
    id: data.id,
    date: data.date,
    venue: data.venue,
    competingTeam: data.competing_team,
    competingTeamLogo: data.competing_team_logo,
    firstInnings: data.first_innings,
    secondInnings: data.second_innings,
    matchStatus: data.match_status,
  })

  getMatchDetails = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params
    const response = await fetch(`https://apis.ccbp.in/ipl/team-matches/${id}`)
    const data = await response.json()
    const updatedData = {
      teamBannerUrl: data.team_banner_url,
      latestMatchDetails: this.getFormattedData(data.latest_match_details),
      recentMatches: data.recent_matches.map(eachMatch =>
        this.getFormattedData(eachMatch),
      ),
    }
    this.setState({matchesList: updatedData})
  }

  render() {
    const {matchesList} = this.state
    const {teamBannerUrl, latestMatchDetails} = matchesList
    return (
      <div>
        <img src={teamBannerUrl} alt="team banner" />
        <div>
          <h1>Latest matches</h1>
          <ul>
            <LatestMatch
              latestMatchDetails={latestMatchDetails}
              key={latestMatchDetails.id}
            />
          </ul>
        </div>
        <ul>
          {matchesList.map(eachItem => (
            <MatchCard recentMatches={eachItem} key={eachItem.id} />
          ))}
        </ul>
      </div>
    )
  }
}

export default TeamMatches
