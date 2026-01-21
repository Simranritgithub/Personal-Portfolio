const GlassCard = ({ children, className = "" }) => {
  return (
    <div
      className={`
        bg-white/80
        backdrop-blur-xl
        border border-white/30
        rounded-2xl
        shadow-xl
        p-6 mt-8 
        ${className}
      `}
    >
      {children}
    </div>
  );
};

export default GlassCard;
