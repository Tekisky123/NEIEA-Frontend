import { ReactNode } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle } from "lucide-react";
import { cn } from "@/lib/utils";
import { Link } from "react-router-dom";

interface ResponsiveCardProps {
  title: string;
  description: string;
  image?: string;
  icon?: ReactNode;
  features?: string[];
  impact?: string;
  link?: string;
  linkText?: string;
  className?: string;
  imageHeight?: "sm" | "md" | "lg";
  variant?: "default" | "featured" | "compact";
}

export const ResponsiveCard = ({
  title,
  description,
  image,
  icon,
  features = [],
  impact,
  link,
  linkText = "Learn More",
  className,
  imageHeight = "md",
  variant = "default",
}: ResponsiveCardProps) => {
  const heightClasses = {
    sm: "h-32 sm:h-40",
    md: "h-40 sm:h-48 lg:h-56",
    lg: "h-48 sm:h-56 lg:h-64",
  };

  const getCardContent = () => {
    switch (variant) {
      case "compact":
        return (
          <>
            {image && (
              <div
                className={cn(
                  "relative overflow-hidden bg-gradient-to-br from-ngo-mocha-mousse to-ngo-cinnamon-slate",
                  heightClasses[imageHeight],
                )}
              >
                <img
                  src={image}
                  alt={title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-ngo-encore/60 group-hover:bg-ngo-encore/40 transition-colors duration-300"></div>
                {icon && (
                  <div className="absolute top-3 left-3 w-10 h-10 bg-white/20 backdrop-blur-sm rounded-lg flex items-center justify-center text-white">
                    {icon}
                  </div>
                )}
                {impact && (
                  <div className="absolute bottom-3 left-3 right-3">
                    <Badge className="bg-ngo-true-joy text-white text-xs px-2 py-1">
                      {impact}
                    </Badge>
                  </div>
                )}
              </div>
            )}
            <CardContent className="p-4">
              <CardTitle className="text-lg text-ngo-encore mb-2 font-heading line-clamp-2">
                {title}
              </CardTitle>
              <CardDescription className="text-gray-600 mb-4 text-sm line-clamp-3 leading-relaxed">
                {description}
              </CardDescription>
              {features.length > 0 && (
                <div className="mb-4">
                  <div className="space-y-1">
                    {features.slice(0, 2).map((feature, idx) => (
                      <div
                        key={idx}
                        className="flex items-center text-xs text-gray-600"
                      >
                        <CheckCircle className="w-3 h-3 mr-2 text-ngo-true-joy flex-shrink-0" />
                        {feature}
                      </div>
                    ))}
                  </div>
                </div>
              )}
              {link && (
                <Link to={link}>
                  <Button className="w-full bg-ngo-encore hover:bg-ngo-encore/90 text-white font-medium rounded-lg group text-sm">
                    {linkText}
                    <ArrowRight className="ml-2 w-3 h-3 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
              )}
            </CardContent>
          </>
        );

      case "featured":
        return (
          <>
            {image && (
              <div
                className={cn(
                  "relative overflow-hidden bg-gradient-to-br from-ngo-mocha-mousse to-ngo-cinnamon-slate",
                  heightClasses[imageHeight],
                )}
              >
                <img
                  src={image}
                  alt={title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-ngo-encore/60 group-hover:bg-ngo-encore/40 transition-colors duration-300"></div>
                {icon && (
                  <div className="absolute top-4 left-4 w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300">
                    {icon}
                  </div>
                )}
                <div className="absolute top-4 right-4">
                  <Badge className="bg-ngo-true-joy text-white">Featured</Badge>
                </div>
              </div>
            )}
            <CardContent className="p-6 lg:p-8">
              <CardTitle className="text-xl lg:text-2xl text-ngo-encore mb-4 font-heading">
                {title}
              </CardTitle>
              <CardDescription className="text-gray-600 mb-6 leading-relaxed">
                {description}
              </CardDescription>
              {impact && (
                <Badge className="bg-ngo-true-joy/10 text-ngo-true-joy mb-6 px-4 py-2">
                  {impact}
                </Badge>
              )}
              {features.length > 0 && (
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-ngo-encore mb-3">
                    Key Features:
                  </h4>
                  <div className="space-y-2">
                    {features.map((feature, idx) => (
                      <div
                        key={idx}
                        className="flex items-center text-sm text-gray-600"
                      >
                        <CheckCircle className="w-4 h-4 mr-3 text-ngo-true-joy flex-shrink-0" />
                        {feature}
                      </div>
                    ))}
                  </div>
                </div>
              )}
              {link && (
                <Link to={link}>
                  <Button className="w-full bg-ngo-encore hover:bg-ngo-encore/90 text-white font-semibold rounded-full group">
                    {linkText}
                    <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
              )}
            </CardContent>
          </>
        );

      default:
        return (
          <>
            {image && (
              <div
                className={cn(
                  "relative overflow-hidden bg-gradient-to-br from-ngo-mocha-mousse to-ngo-cinnamon-slate",
                  heightClasses[imageHeight],
                )}
              >
                <img
                  src={image}
                  alt={title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-ngo-encore/60 group-hover:bg-ngo-encore/40 transition-colors duration-300"></div>
                {icon && (
                  <div className="absolute top-4 left-4 w-12 h-12 sm:w-14 sm:h-14 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300">
                    {icon}
                  </div>
                )}
              </div>
            )}
            <CardContent className="p-4 sm:p-6">
              <CardTitle className="text-lg sm:text-xl text-ngo-encore mb-3 font-heading">
                {title}
              </CardTitle>
              <CardDescription className="text-gray-600 mb-4 leading-relaxed text-sm sm:text-base line-clamp-3">
                {description}
              </CardDescription>
              {impact && (
                <Badge className="bg-ngo-true-joy/10 text-ngo-true-joy mb-4 text-xs px-3 py-1">
                  {impact}
                </Badge>
              )}
              {features.length > 0 && (
                <div className="mb-4">
                  <div className="space-y-1">
                    {features.slice(0, 3).map((feature, idx) => (
                      <div
                        key={idx}
                        className="flex items-center text-xs text-gray-600"
                      >
                        <CheckCircle className="w-3 h-3 mr-2 text-ngo-true-joy flex-shrink-0" />
                        {feature}
                      </div>
                    ))}
                  </div>
                </div>
              )}
              {link && (
                <Link to={link}>
                  <Button className="w-full bg-ngo-encore hover:bg-ngo-encore/90 text-white font-medium rounded-lg group text-sm">
                    {linkText}
                    <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
              )}
            </CardContent>
          </>
        );
    }
  };

  return (
    <Card
      className={cn(
        "group hover:shadow-2xl transition-all duration-500 border-0 shadow-lg overflow-hidden bg-gradient-to-br from-white to-gray-50 card-hover",
        variant === "featured" && "ring-2 ring-ngo-true-joy/20",
        className,
      )}
    >
      {getCardContent()}
    </Card>
  );
};
