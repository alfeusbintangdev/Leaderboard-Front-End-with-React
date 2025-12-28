export default function ShareButtons({ player }) {
  const text = `🎮 I scored ${player.score} points on the leaderboard!`;
  const url = window.location.href;

  const copyInstagram = () => {
    navigator.clipboard.writeText(text + " " + url);
    alert("Copied! Paste it on Instagram.");
  };

  return (
    <div className="share-icons">
      {/* WhatsApp */}
      <a
        href={`https://wa.me/?text=${encodeURIComponent(text + " " + url)}`}
        target="_blank"
        aria-label="Share to WhatsApp"
      >
        <img src="/icons/whatsapp.svg" alt="WhatsApp" />
      </a>

      {/* Telegram */}
      <a
        href={`https://t.me/share/url?url=${encodeURIComponent(url)}&text=${encodeURIComponent(text)}`}
        target="_blank"
        aria-label="Share to Telegram"
      >
        <img src="/icons/telegram.svg" alt="Telegram" />
      </a>

      {/* Facebook */}
      <a
        href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`}
        target="_blank"
        aria-label="Share to Facebook"
      >
        <img src="/icons/facebook.svg" alt="Facebook" />
      </a>

      {/* Instagram */}
      <button onClick={copyInstagram} aria-label="Share to Instagram">
        <img src="/icons/instagram.svg" alt="Instagram" />
      </button>
    </div>
  );
}
