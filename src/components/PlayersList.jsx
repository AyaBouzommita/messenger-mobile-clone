import PlayerCard from './PlayerCard'

function PlayersList({ players, onPlayerHover }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {players.map((player, index) => (
        <PlayerCard 
          key={index} 
          player={player} 
          onHover={() => onPlayerHover && onPlayerHover(index)}
          onLeave={() => onPlayerHover && onPlayerHover(null)}
        />
      ))}
    </div>
  )
}

export default PlayersList
