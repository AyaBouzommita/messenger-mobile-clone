import MatchCard from './MatchCard'

function MatchesList({ matches }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {matches.map((match, index) => (
        <MatchCard key={index} match={match} />
      ))}
    </div>
  )
}

export default MatchesList
