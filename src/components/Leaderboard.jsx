import { useEffect, useState } from "react";
import { initialPlayers } from "../data/players";
import PlayerCard from "./PlayerCard";
import EditPlayerModal from "./EditPlayerModal";

export default function Leaderboard() {
  const [players, setPlayers] = useState(initialPlayers);
  const [editingPlayer, setEditingPlayer] = useState(null);

  // sort by score
  const sortedPlayers = [...players].sort((a, b) => b.score - a.score);
  const topThree = sortedPlayers.slice(0, 3);
  const rest = sortedPlayers.slice(3);

  const updatePlayer = updated => {
    setPlayers(players.map(p => (p.id === updated.id ? updated : p)));
  };

  // simulate score update for followed players
  useEffect(() => {
    const interval = setInterval(() => {
      setPlayers(players =>
        players.map(p =>
          p.isFollowing
            ? { ...p, score: p.score + Math.floor(Math.random() * 10) }
            : p
        )
      );
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <div className="top-three">
        {topThree.map((player, index) => (
          <PlayerCard
            key={player.id}
            player={player}
            rank={index + 1}
            onEdit={() => setEditingPlayer(player)}
            onUpdate={updatePlayer}
          />
        ))}
      </div>

      <div className="leaderboard-list">
        {rest.map((player, index) => (
          <PlayerCard
            key={player.id}
            player={player}
            rank={index + 4}
            onEdit={() => setEditingPlayer(player)}
            onUpdate={updatePlayer}
          />
        ))}
      </div>

      {editingPlayer && (
        <EditPlayerModal
          player={editingPlayer}
          onSave={p => {
            updatePlayer(p);
            setEditingPlayer(null);
          }}
          onClose={() => setEditingPlayer(null)}
        />
      )}
    </>
  );
}
