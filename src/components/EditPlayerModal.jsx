import { useState } from "react";

export default function EditPlayerModal({ player, onSave, onClose }) {
  const [form, setForm] = useState(player);

  return (
    <div className="modal-backdrop">
      <div className="modal">
        <h2>Edit Player</h2>

        <input
          placeholder="Name"
          value={form.name}
          onChange={e => setForm({ ...form, name: e.target.value })}
        />

        <input
          placeholder="Avatar URL"
          value={form.avatar}
          onChange={e => setForm({ ...form, avatar: e.target.value })}
        />

        <input
          type="number"
          placeholder="Score"
          value={form.score}
          onChange={e => setForm({ ...form, score: Number(e.target.value) })}
        />

        <div className="modal-actions">
          <button onClick={() => onSave(form)}>Save</button>
          <button onClick={onClose}>Cancel</button>
        </div>
      </div>
    </div>
  );
}
