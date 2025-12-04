const ShinyText = ({ text, disabled = false, speed = 3, className = "" }) => {
  return (
    <div
      className={`relative inline-block ${className}`}
      style={{ "--speed": `${speed}s` }}
    >
      {/* BASE WHITE TEXT */}
      <span className="text-white">{text}</span>

      {/* PURPLE SHINE ON TOP */}
      {!disabled && (
        <span className="shine-mask pointer-events-none">
          {text}
        </span>
      )}

      <style>{`
        .shine-mask {
          position: absolute;
          inset: 0;
          color: transparent;

          background: linear-gradient(
            90deg,
            rgba(192,132,252,0.0) 0%,
            rgba(192,132,252,0.6) 35%,
            rgba(168,85,247,1.0) 50%,
            rgba(192,132,252,0.6) 65%,
            rgba(192,132,252,0.0) 100%
          );
          background-size: 250% 100%;
          animation: shine var(--speed) linear infinite;

          -webkit-mask-image: linear-gradient(black, black);
          mask-image: linear-gradient(black, black);
          -webkit-mask-clip: text;
          mask-clip: text;
          -webkit-mask-size: 100%;
          mask-size: 100%;
        }

        @keyframes shine {
          0% { background-position: 200% 0; }
          100% { background-position: -200% 0; }
        }
      `}</style>
    </div>
  );
};

export default ShinyText;
