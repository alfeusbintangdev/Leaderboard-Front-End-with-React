import ShareButtons from "./ShareButtons";

export default function PlayerCard({ player, rank, onEdit, onUpdate }) {
  return (
    <div className={`player-card rank-${rank}`}>
      <span className="rank-badge">#{rank}</span>

      <img className="avatar" src={player.avatar} alt={player.name} />

      <h3>{player.name}</h3>
      <p className="score">{player.score} pts</p>

      <div className="actions">
        <button onClick={onEdit}>Edit</button>
        <button
          onClick={() =>
            onUpdate({ ...player, isFollowing: !player.isFollowing })
          }
        >
          {player.isFollowing ? "Unfollow" : "Follow"}
        </button>
      </div>

      <ShareButtons player={player} />
    </div>
  );
}
