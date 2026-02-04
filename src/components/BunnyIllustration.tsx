const BunnyIllustration = () => {
  return (
    <div className="relative w-48 h-48 sm:w-64 sm:h-64 mx-auto animate-float-slow">
      {/* Glow behind bunny */}
      <div className="absolute inset-0 glow-overlay rounded-full scale-150" />
      
      {/* SVG Bunny holding heart */}
      <svg
        viewBox="0 0 200 200"
        className="w-full h-full drop-shadow-lg"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Ears */}
        <ellipse
          cx="70"
          cy="45"
          rx="18"
          ry="40"
          className="fill-secondary"
        />
        <ellipse
          cx="70"
          cy="45"
          rx="10"
          ry="30"
          className="fill-primary/30"
        />
        <ellipse
          cx="130"
          cy="45"
          rx="18"
          ry="40"
          className="fill-secondary"
        />
        <ellipse
          cx="130"
          cy="45"
          rx="10"
          ry="30"
          className="fill-primary/30"
        />
        
        {/* Body */}
        <ellipse
          cx="100"
          cy="140"
          rx="50"
          ry="45"
          className="fill-secondary"
        />
        
        {/* Head */}
        <circle
          cx="100"
          cy="95"
          r="45"
          className="fill-secondary"
        />
        
        {/* Cheeks */}
        <circle
          cx="65"
          cy="100"
          r="12"
          className="fill-primary/20"
        />
        <circle
          cx="135"
          cy="100"
          r="12"
          className="fill-primary/20"
        />
        
        {/* Eyes */}
        <ellipse
          cx="80"
          cy="88"
          rx="6"
          ry="8"
          className="fill-foreground"
        />
        <ellipse
          cx="120"
          cy="88"
          rx="6"
          ry="8"
          className="fill-foreground"
        />
        {/* Eye sparkles */}
        <circle cx="82" cy="86" r="2" className="fill-white" />
        <circle cx="122" cy="86" r="2" className="fill-white" />
        
        {/* Nose */}
        <ellipse
          cx="100"
          cy="102"
          rx="5"
          ry="4"
          className="fill-primary"
        />
        
        {/* Mouth */}
        <path
          d="M95 108 Q100 114 105 108"
          className="stroke-foreground/50"
          strokeWidth="2"
          fill="none"
          strokeLinecap="round"
        />
        
        {/* Arms holding heart */}
        <ellipse
          cx="60"
          cy="135"
          rx="15"
          ry="12"
          className="fill-secondary"
          transform="rotate(-20 60 135)"
        />
        <ellipse
          cx="140"
          cy="135"
          rx="15"
          ry="12"
          className="fill-secondary"
          transform="rotate(20 140 135)"
        />
        
        {/* Heart */}
        <g className="animate-pulse-heart origin-center" style={{ transformOrigin: '100px 145px' }}>
          <path
            d="M100 170 
               C100 170 70 145 70 125 
               C70 110 85 105 100 120 
               C115 105 130 110 130 125 
               C130 145 100 170 100 170Z"
            className="fill-primary"
          />
          {/* Heart shine */}
          <ellipse
            cx="82"
            cy="125"
            rx="6"
            ry="8"
            className="fill-white/30"
            transform="rotate(-30 82 125)"
          />
        </g>
        
        {/* Feet */}
        <ellipse
          cx="75"
          cy="180"
          rx="18"
          ry="10"
          className="fill-secondary"
        />
        <ellipse
          cx="125"
          cy="180"
          rx="18"
          ry="10"
          className="fill-secondary"
        />
      </svg>
      
      {/* Floating mini hearts around bunny */}
      <div className="absolute -top-2 -left-2 text-primary text-lg animate-float opacity-60">♥</div>
      <div className="absolute top-4 -right-4 text-accent text-sm animate-float-slow opacity-50" style={{ animationDelay: '1s' }}>♥</div>
      <div className="absolute -bottom-2 left-8 text-primary text-base animate-float opacity-40" style={{ animationDelay: '2s' }}>♥</div>
    </div>
  );
};

export default BunnyIllustration;
