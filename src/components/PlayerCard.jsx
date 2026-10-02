import { Star } from 'lucide-react'

function PlayerCard({ player, onHover, onLeave }) {
  return (
    <div 
      className="group relative bg-gradient-to-br from-fifa-card/90 to-fifa-bg-secondary/90 backdrop-blur-xl rounded-2xl overflow-hidden transition-all duration-500 hover:scale-105 hover:-translate-y-2 hover:bg-fifa-card-hover hover:shadow-glow border border-white/5 hover:border-fifa-accent/50 cursor-pointer"
      onMouseEnter={onHover}
      onMouseLeave={onLeave}
    >
      {/* Rating Badge */}
      <div className="absolute top-4 right-4 bg-fifa-accent text-fifa-bg font-bold text-xl w-12 h-12 rounded-full flex items-center justify-center shadow-lg z-10 backdrop-blur-sm">
        {player.rating}
      </div>

      {/* Player Image */}
      <div className="relative h-64 bg-fifa-bg-secondary overflow-hidden">
        <img
          src={player.image}
          alt={player.name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 group-hover:rotate-1"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-fifa-card via-fifa-card/50 to-transparent group-hover:from-black/70 group-hover:via-black/40 group-hover:to-transparent transition-all duration-500" />
        
        {/* Team overlay */}
        <div className="absolute bottom-0 left-0 right-0 p-4">
          <p className="text-fifa-accent text-sm font-semibold tracking-wider uppercase drop-shadow-lg">{player.team}</p>
        </div>

        {/* View Player Button - appears on hover */}
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/40 backdrop-blur-sm">
          <button className="bg-fifa-accent text-fifa-bg px-6 py-3 rounded-xl font-semibold transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 shadow-lg hover:shadow-glow">
            View Player
          </button>
        </div>
      </div>

      {/* Player Info */}
      <div className="p-5">
        <h3 className="text-xl font-bold text-fifa-text mb-1 group-hover:text-fifa-accent transition-colors">{player.name}</h3>
        
        <div className="grid grid-cols-2 gap-3 mt-4">
          <div className="bg-fifa-bg-secondary/50 backdrop-blur-sm rounded-lg p-3 border border-white/5 hover:border-fifa-accent/20 transition-colors">
            <p className="text-fifa-text-secondary text-xs mb-1 uppercase tracking-wider">Nationality</p>
            <p className="text-fifa-text font-semibold flex items-center gap-2">
              <span className="text-xl">{player.flag}</span>
              {player.nationality}
            </p>
          </div>
          <div className="bg-fifa-bg-secondary/50 backdrop-blur-sm rounded-lg p-3 border border-white/5 hover:border-fifa-accent/20 transition-colors">
            <p className="text-fifa-text-secondary text-xs mb-1 uppercase tracking-wider">Age</p>
            <p className="text-fifa-text font-semibold">{player.age}</p>
          </div>
        </div>

        <div className="flex items-center justify-between mt-4 pt-4 border-t border-white/5">
          <div className="flex items-center gap-2">
            <div className="bg-fifa-accent-secondary text-fifa-text font-bold text-lg w-10 h-10 rounded-lg flex items-center justify-center backdrop-blur-sm">
              {player.jerseyNumber}
            </div>
            <p className="text-fifa-text-secondary text-sm">Jersey</p>
          </div>
          
          {/* Rating Stars */}
          <div className="flex items-center gap-1">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={`w-4 h-4 transition-all ${
                  i < Math.floor(player.rating / 20)
                    ? 'text-fifa-accent fill-current scale-110'
                    : 'text-fifa-text-secondary/30'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default PlayerCard
