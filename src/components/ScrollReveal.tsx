import { ReactNode } from "react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { cn } from "@/lib/utils";

interface ScrollRevealProps {
  children: ReactNode;
  direction?: "up" | "down" | "left" | "right" | "scale";
  delay?: number;
  duration?: number;
  className?: string;
  threshold?: number;
}

export const ScrollReveal = ({
  children,
  direction = "up",
  delay = 0,
  duration = 600,
  className,
  threshold = 0.1,
}: ScrollRevealProps) => {
  const { elementRef, isVisible } = useScrollAnimation(threshold);

  const getAnimationClasses = () => {
    const baseClasses = "transition-all ease-out";
    const durationClass = `duration-${duration}`;

    if (!isVisible) {
      switch (direction) {
        case "up":
          return `${baseClasses} ${durationClass} opacity-0 translate-y-8`;
        case "down":
          return `${baseClasses} ${durationClass} opacity-0 -translate-y-8`;
        case "left":
          return `${baseClasses} ${durationClass} opacity-0 translate-x-8`;
        case "right":
          return `${baseClasses} ${durationClass} opacity-0 -translate-x-8`;
        case "scale":
          return `${baseClasses} ${durationClass} opacity-0 scale-95`;
        default:
          return `${baseClasses} ${durationClass} opacity-0 translate-y-8`;
      }
    }

    return `${baseClasses} ${durationClass} opacity-100 translate-x-0 translate-y-0 scale-100`;
  };

  return (
    <div
      ref={elementRef}
      className={cn(getAnimationClasses(), className)}
      style={{
        transitionDelay: `${delay}ms`,
      }}
    >
      {children}
    </div>
  );
};

export default ScrollReveal;
