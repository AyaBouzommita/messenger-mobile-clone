import { Calendar, Clock, MapPin } from 'lucide-react'

function MatchCard({ match }) {
  const getStatusColor = (status) => {
    switch (status) {
      case 'live':
        return 'bg-red-500 animate-pulse'
      case 'finished':
        return 'bg-fifa-text-secondary'
      case 'upcoming':
        return 'bg-fifa-accent-secondary'
      default:
        return 'bg-fifa-text-secondary'
    }
  }

  const getStatusText = (status) => {
    switch (status) {
      case 'live':
        return 'LIVE'
      case 'finished':
        return 'FINISHED'
      case 'upcoming':
        return 'UPCOMING'
      default:
        return status.toUpperCase()
    }
  }

  return (
    <div className="group relative bg-gradient-to-br from-fifa-card/90 to-fifa-bg-secondary/90 backdrop-blur-xl rounded-2xl overflow-hidden transition-all duration-500 hover:scale-105 hover:-translate-y-2 hover:bg-fifa-card-hover hover:shadow-glow border border-white/5 hover:border-fifa-accent/30">
      {/* Match Status Badge */}
      <div className={`absolute top-4 left-4 ${getStatusColor(match.status)} text-fifa-bg text-xs font-bold px-3 py-1 rounded-full shadow-lg z-10 backdrop-blur-sm`}>
        {getStatusText(match.status)}
      </div>

      {/* Match Header */}
      <div className="bg-gradient-to-r from-fifa-accent-secondary/20 to-fifa-accent/10 p-4 border-b border-white/5 backdrop-blur-sm">
        <div className="flex items-center justify-center gap-3 text-fifa-text-secondary text-sm">
          <Calendar className="w-4 h-4 group-hover:text-fifa-accent transition-colors" />
          <span className="font-semibold text-fifa-text">{match.date}</span>
          <span className="text-white/20">|</span>
          <Clock className="w-4 h-4 group-hover:text-fifa-accent transition-colors" />
          <span className="font-semibold text-fifa-text">{match.time}</span>
        </div>
      </div>

      {/* Teams and Score */}
      <div className="p-6">
        <div className="flex items-center justify-between">
          {/* Team 1 */}
          <div className="flex flex-col items-center flex-1">
            <div className="w-16 h-16 bg-fifa-bg-secondary rounded-full flex items-center justify-center mb-3 shadow-lg border border-white/5 group-hover:border-fifa-accent/30 transition-all group-hover:scale-110">
              <img
                src={match.team1Logo}
                alt={match.team1}
                className="w-12 h-12 object-contain"
              />
            </div>
            <h3 className="text-lg font-bold text-fifa-text text-center group-hover:text-fifa-accent transition-colors">{match.team1}</h3>
          </div>

          {/* Score */}
          <div className="flex flex-col items-center px-4">
            <div className="text-4xl font-bold text-fifa-text mb-1 group-hover:scale-110 transition-transform">
              {match.status === 'upcoming' ? (
                <span className="text-2xl text-fifa-text-secondary">VS</span>
              ) : (
                <span className="text-fifa-accent drop-shadow-lg">{match.score1} - {match.score2}</span>
              )}
            </div>
            {match.status === 'live' && (
              <span className="text-red-400 text-xs font-semibold tracking-wider animate-pulse">
                {match.minute}'
              </span>
            )}
          </div>

          {/* Team 2 */}
          <div className="flex flex-col items-center flex-1">
            <div className="w-16 h-16 bg-fifa-bg-secondary rounded-full flex items-center justify-center mb-3 shadow-lg border border-white/5 group-hover:border-fifa-accent/30 transition-all group-hover:scale-110">
              <img
                src={match.team2Logo}
                alt={match.team2}
                className="w-12 h-12 object-contain"
              />
            </div>
            <h3 className="text-lg font-bold text-fifa-text text-center group-hover:text-fifa-accent transition-colors">{match.team2}</h3>
          </div>
        </div>

        {/* Stadium Info */}
        <div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-center gap-2 text-fifa-text-secondary text-sm">
          <MapPin className="w-4 h-4 group-hover:text-fifa-accent transition-colors" />
          <span className="group-hover:text-fifa-text transition-colors">{match.stadium}</span>
        </div>
      </div>
    </div>
  )
}

export default MatchCard
