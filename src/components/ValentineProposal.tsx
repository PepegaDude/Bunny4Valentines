import { useState, useRef, useEffect } from "react";
import BunnyIllustration from "./BunnyIllustration";
import HeartBurst from "./HeartBurst";
import Confetti from "./Confetti";
import FloatingHearts from "./FloatingHearts";

const sweetMessages = [
  "Pretty please? 🥺",
  "You're the sweetest person I know...",
  "My heart beats for you 💕",
  "I promise endless cuddles!",
  "You make every day magical ✨",
  "I'll love you forever and always...",
];

const poeticLines = [
  "In a world full of fleeting moments,",
  "you are my forever.",
  "Every heartbeat whispers your name,",
  "every dream is painted with your smile.",
];

const ValentineProposal = () => {
  const [accepted, setAccepted] = useState(false);
  const [dodgeCount, setDodgeCount] = useState(0);
  const [yesScale, setYesScale] = useState(1);
  const [currentMessage, setCurrentMessage] = useState(0);
  const [showBurst, setShowBurst] = useState(false);
  const thinkingBtnRef = useRef<HTMLButtonElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleYesClick = () => {
    setShowBurst(true);
    setTimeout(() => {
      setAccepted(true);
    }, 600);
  };

  const handleThinkingHover = () => {
    if (!thinkingBtnRef.current || !containerRef.current) return;

    const container = containerRef.current.getBoundingClientRect();
    const btn = thinkingBtnRef.current;
    const btnRect = btn.getBoundingClientRect();

    // Calculate new random position within safe bounds
    const maxX = container.width - btnRect.width - 40;
    const maxY = container.height - btnRect.height - 40;

    const newX = Math.max(20, Math.random() * maxX);
    const newY = Math.max(20, Math.random() * maxY);

    btn.style.position = 'absolute';
    btn.style.left = `${newX}px`;
    btn.style.top = `${newY}px`;
    btn.style.transition = 'all 0.3s ease-out';

    setDodgeCount(prev => prev + 1);
    setYesScale(prev => Math.min(prev + 0.08, 1.6));
    setCurrentMessage(prev => (prev + 1) % sweetMessages.length);
  };

  // Reset thinking button position on mount
  useEffect(() => {
    if (thinkingBtnRef.current) {
      thinkingBtnRef.current.style.position = 'relative';
      thinkingBtnRef.current.style.left = 'auto';
      thinkingBtnRef.current.style.top = 'auto';
    }
  }, []);

  if (accepted) {
    return (
      <div className="min-h-screen bg-gradient-blush flex flex-col items-center justify-center px-6 py-12 relative overflow-hidden">
        <Confetti />
        <FloatingHearts />
        
        <div className="text-center z-10 animate-fade-in-up">
          <div className="text-6xl sm:text-8xl mb-8 animate-pulse-heart">💕</div>
          
          <h1 className="font-script text-4xl sm:text-6xl md:text-7xl text-primary mb-6 leading-tight">
            You just made my heart<br />the happiest!
          </h1>
          
          <p className="text-lg sm:text-xl text-muted-foreground max-w-md mx-auto mb-8 opacity-0 animate-fade-in-up stagger-2">
            Thank you for saying yes. This Valentine's Day and every day after, 
            my heart belongs to you. ❤️
          </p>
          
          <div className="opacity-0 animate-fade-in-up stagger-3">
            <BunnyIllustration />
          </div>
          
          <p className="font-script text-2xl sm:text-3xl text-accent mt-8 opacity-0 animate-fade-in-up stagger-4">
            Forever yours 💝
          </p>
        </div>
      </div>
    );
  }

  return (
    <div 
      ref={containerRef}
      className="min-h-screen bg-gradient-blush flex flex-col items-center justify-center px-6 py-12 relative overflow-hidden"
    >
      <FloatingHearts />
      {showBurst && <HeartBurst />}
      
      {/* Main content */}
      <div className="text-center z-10 w-full max-w-lg">
        {/* Bunny illustration */}
        <div className="mb-8 opacity-0 animate-fade-in-up">
          <BunnyIllustration />
        </div>
        
        {/* Main headline */}
        <h1 className="font-script text-4xl sm:text-5xl md:text-6xl text-primary mb-6 opacity-0 animate-fade-in-up stagger-1 leading-tight">
          Rachel, will you be<br />my Valentine?
        </h1>
        
        {/* Poetic subtitle - fades in line by line */}
        <div className="space-y-1 mb-10">
          {poeticLines.map((line, index) => (
            <p
              key={index}
              className={`text-muted-foreground text-base sm:text-lg opacity-0 animate-fade-in stagger-${index + 2}`}
            >
              {line}
            </p>
          ))}
        </div>
        
        {/* Sweet message that changes on dodge */}
        {dodgeCount > 0 && (
          <p className="text-accent font-medium text-lg mb-6 animate-fade-in min-h-[28px]">
            {sweetMessages[currentMessage]}
          </p>
        )}
        
        {/* Buttons container */}
        <div className="flex flex-col gap-4 items-center relative min-h-[180px]">
          {/* Yes button */}
          <button
            onClick={handleYesClick}
            className="w-full max-w-xs py-4 px-8 bg-gradient-romantic text-white font-semibold text-xl rounded-full shadow-romantic hover:shadow-glow transition-all duration-300 transform hover:scale-105 active:scale-95"
            style={{
              transform: `scale(${yesScale})`,
              transition: 'transform 0.3s ease-out',
            }}
          >
            Yes! 💕
          </button>
          
          {/* Thinking button */}
          <button
            ref={thinkingBtnRef}
            onMouseEnter={handleThinkingHover}
            onTouchStart={handleThinkingHover}
            className="w-full max-w-xs py-4 px-8 bg-secondary text-secondary-foreground font-medium text-lg rounded-full border-2 border-primary/20 hover:border-primary/40 transition-all duration-300"
          >
            I'm thinking... 🤔
          </button>
        </div>
        
        {/* Dodge counter hint */}
        {dodgeCount >= 3 && (
          <p className="text-muted-foreground/60 text-sm mt-8 animate-fade-in">
            The heart wants what the heart wants... 💝
          </p>
        )}
      </div>
      
      {/* Bottom decorative element */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-primary/5 to-transparent pointer-events-none" />
    </div>
  );
};

export default ValentineProposal;
