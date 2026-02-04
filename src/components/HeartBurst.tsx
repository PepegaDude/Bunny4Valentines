import { useEffect, useState } from "react";

interface BurstHeart {
  id: number;
  x: number;
  y: number;
  size: number;
  angle: number;
  distance: number;
}

const HeartBurst = () => {
  const [hearts, setHearts] = useState<BurstHeart[]>([]);

  useEffect(() => {
    const newHearts: BurstHeart[] = [];
    for (let i = 0; i < 20; i++) {
      newHearts.push({
        id: i,
        x: 50,
        y: 50,
        size: Math.random() * 20 + 10,
        angle: (360 / 20) * i + Math.random() * 20,
        distance: Math.random() * 30 + 20,
      });
    }
    setHearts(newHearts);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-50 flex items-center justify-center">
      {hearts.map((heart) => (
        <div
          key={heart.id}
          className="absolute text-primary"
          style={{
            fontSize: `${heart.size}px`,
            transform: `translate(-50%, -50%)`,
            animation: `heart-burst 1s ease-out forwards`,
            left: `calc(50% + ${Math.cos((heart.angle * Math.PI) / 180) * heart.distance}vw)`,
            top: `calc(50% + ${Math.sin((heart.angle * Math.PI) / 180) * heart.distance}vh)`,
            animationDelay: `${Math.random() * 0.2}s`,
          }}
        >
          ♥
        </div>
      ))}
    </div>
  );
};

export default HeartBurst;
