import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface ResponsiveContainerProps {
  children: ReactNode;
  className?: string;
  size?: "sm" | "md" | "lg" | "xl" | "full";
}

export const ResponsiveContainer = ({
  children,
  className,
  size = "xl",
}: ResponsiveContainerProps) => {
  const sizeClasses = {
    sm: "max-w-2xl",
    md: "max-w-4xl",
    lg: "max-w-6xl",
    xl: "max-w-7xl",
    full: "max-w-full",
  };

  return (
    <div
      className={cn(
        "container mx-auto px-4 sm:px-6 lg:px-8",
        sizeClasses[size],
        className,
      )}
    >
      {children}
    </div>
  );
};

interface ResponsiveGridProps {
  children: ReactNode;
  cols?: {
    default?: number;
    sm?: number;
    md?: number;
    lg?: number;
    xl?: number;
  };
  gap?: "sm" | "md" | "lg" | "xl";
  className?: string;
}

export const ResponsiveGrid = ({
  children,
  cols = { default: 1, sm: 2, lg: 3 },
  gap = "md",
  className,
}: ResponsiveGridProps) => {
  const gapClasses = {
    sm: "gap-3 sm:gap-4",
    md: "gap-4 sm:gap-6 lg:gap-8",
    lg: "gap-6 sm:gap-8 lg:gap-10",
    xl: "gap-8 sm:gap-10 lg:gap-12",
  };

  const getGridCols = () => {
    const classes = [];
    if (cols.default) classes.push(`grid-cols-${cols.default}`);
    if (cols.sm) classes.push(`sm:grid-cols-${cols.sm}`);
    if (cols.md) classes.push(`md:grid-cols-${cols.md}`);
    if (cols.lg) classes.push(`lg:grid-cols-${cols.lg}`);
    if (cols.xl) classes.push(`xl:grid-cols-${cols.xl}`);
    return classes.join(" ");
  };

  return (
    <div className={cn("grid", getGridCols(), gapClasses[gap], className)}>
      {children}
    </div>
  );
};

interface SectionProps {
  children: ReactNode;
  className?: string;
  background?: "white" | "gray" | "brand" | "gradient";
  padding?: "sm" | "md" | "lg" | "xl";
}

export const Section = ({
  children,
  className,
  background = "white",
  padding = "lg",
}: SectionProps) => {
  const backgroundClasses = {
    white: "bg-white",
    gray: "bg-gray-50",
    brand: "bg-ngo-encore",
    gradient: "bg-gradient-to-br from-ngo-mocha-mousse to-ngo-cinnamon-slate",
  };

  const paddingClasses = {
    sm: "py-8 sm:py-12",
    md: "py-12 sm:py-16",
    lg: "py-16 sm:py-20 lg:py-24",
    xl: "py-20 sm:py-24 lg:py-32",
  };

  return (
    <section
      className={cn(
        backgroundClasses[background],
        paddingClasses[padding],
        className,
      )}
    >
      {children}
    </section>
  );
};
