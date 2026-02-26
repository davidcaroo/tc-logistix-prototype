import React, { useEffect, useState, useRef } from "react";
import { useInView, animate } from "motion/react";

interface CounterProps {
  value: number;
  duration?: number;
  suffix?: string;
  className?: string;
}

const Counter: React.FC<CounterProps> = ({ value, duration = 2, suffix = "", className }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (isInView) {
      const controls = animate(0, value, {
        duration,
        onUpdate: (latest) => setCount(Math.floor(latest)),
        ease: "easeOut",
      });
      return () => controls.stop();
    }
  }, [isInView, value, duration]);

  return (
    <span ref={ref} className={className}>
      {count.toLocaleString()}{suffix}
    </span>
  );
};

export default Counter;
