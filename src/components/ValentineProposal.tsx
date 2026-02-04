import { useState, useRef, useEffect } from "react";
import BunnyIllustration from "./BunnyIllustration";
import HeartBurst from "./HeartBurst";
import Confetti from "./Confetti";
import FloatingHearts from "./FloatingHearts";
import ourVideo from "@/assets/our-video.mp4";

const sweetMessages = [
  "I mean it 💕",
  "You know you want to...",
  "Just say yes already",
  "Come on, make my day",
  "I'll wait as long as it takes",
  "But seriously though...",
];

const poeticLines = [
  "Every moment with you feels like home.",
  "You make the ordinary feel extraordinary.",
  "I can't imagine this day without you.",
];

const ValentineProposal = () => {
  const [accepted, setAccepted] = useState(false);
  const [dodgeCount, setDodgeCount] = useState(0);
  const [thinkingScale, setThinkingScale] = useState(1);
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

    const btn = thinkingBtnRef.current;
    const btnRect = btn.getBoundingClientRect();
    
    // Constrained movement radius - max 80px in any direction
    const maxOffset = 80;
    const offsetX = (Math.random() - 0.5) * maxOffset * 2;
    const offsetY = (Math.random() - 0.5) * maxOffset * 2;

    btn.style.transform = `translate(${offsetX}px, ${offsetY}px) scale(${Math.max(0.6, thinkingScale - 0.05)})`;
    btn.style.transition = 'transform 0.25s ease-out';

    setDodgeCount(prev => prev + 1);
    setThinkingScale(prev => Math.max(0.6, prev - 0.05));
    setCurrentMessage(prev => (prev + 1) % sweetMessages.length);
  };

  // Reset thinking button position on mount
  useEffect(() => {
    if (thinkingBtnRef.current) {
      thinkingBtnRef.current.style.transform = 'translate(0, 0) scale(1)';
    }
  }, []);

  if (accepted) {
    return (
      <div className="min-h-screen bg-gradient-blush flex flex-col items-center justify-center px-6 py-12 relative overflow-hidden">
        <Confetti />
        <FloatingHearts />
        
        <div className="text-center z-10 animate-fade-in-up w-full max-w-2xl">
          <div className="text-5xl sm:text-6xl mb-6 animate-pulse-heart">💕</div>
          
          <h1 className="font-script text-3xl sm:text-5xl md:text-6xl text-primary mb-4 leading-tight">
            You just made my day
          </h1>
          
          <p className="text-base sm:text-lg text-muted-foreground max-w-md mx-auto mb-6 opacity-0 animate-fade-in-up stagger-2">
            Here's to us ❤️
          </p>
          
          {/* Video */}
          <div className="opacity-0 animate-fade-in-up stagger-3 rounded-2xl overflow-hidden shadow-romantic mx-auto max-w-md">
            <video 
              src={ourVideo} 
              controls 
              autoPlay 
              loop
              playsInline
              className="w-full aspect-video object-cover"
            />
          </div>
          
          <p className="font-script text-xl sm:text-2xl text-accent mt-6 opacity-0 animate-fade-in-up stagger-4">
            Happy Valentine's Day 💝
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
          >
            Yes! 💕
          </button>
          
          {/* Thinking button */}
          <button
            ref={thinkingBtnRef}
            onMouseEnter={handleThinkingHover}
            onTouchStart={handleThinkingHover}
            className="w-full max-w-xs py-3 px-6 bg-secondary text-secondary-foreground font-medium text-base rounded-full border-2 border-primary/20 hover:border-primary/40 transition-colors duration-300"
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
