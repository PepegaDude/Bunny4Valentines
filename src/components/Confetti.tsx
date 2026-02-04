import { useEffect, useState } from "react";

interface ConfettiPiece {
  id: number;
  x: number;
  color: string;
  size: number;
  delay: number;
  duration: number;
  type: 'heart' | 'circle' | 'star';
}

const Confetti = () => {
  const [pieces, setPieces] = useState<ConfettiPiece[]>([]);

  useEffect(() => {
    const colors = [
      'hsl(350, 80%, 65%)',  // primary pink
      'hsl(350, 70%, 55%)',  // accent
      'hsl(40, 50%, 85%)',   // champagne
      'hsl(350, 80%, 75%)',  // light pink
      'hsl(0, 0%, 100%)',    // white
    ];
    
    const types: ('heart' | 'circle' | 'star')[] = ['heart', 'circle', 'star'];
    
    const newPieces: ConfettiPiece[] = [];
    for (let i = 0; i < 50; i++) {
      newPieces.push({
        id: i,
        x: Math.random() * 100,
        color: colors[Math.floor(Math.random() * colors.length)],
        size: Math.random() * 12 + 6,
        delay: Math.random() * 2,
        duration: Math.random() * 3 + 3,
        type: types[Math.floor(Math.random() * types.length)],
      });
    }
    setPieces(newPieces);
  }, []);

  const getSymbol = (type: string) => {
    switch (type) {
      case 'heart': return '♥';
      case 'star': return '✦';
      default: return '●';
    }
  };

  return (
    <div className="fixed inset-0 pointer-events-none z-40 overflow-hidden">
      {pieces.map((piece) => (
        <div
          key={piece.id}
          className="absolute"
          style={{
            left: `${piece.x}%`,
            top: '-20px',
            fontSize: `${piece.size}px`,
            color: piece.color,
            animation: `confetti-fall ${piece.duration}s linear infinite`,
            animationDelay: `${piece.delay}s`,
          }}
        >
          {getSymbol(piece.type)}
        </div>
      ))}
    </div>
  );
};

export default Confetti;
