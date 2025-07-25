import React from "react";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Clock, BookOpen, Users, IndianRupee } from "lucide-react";

export interface CourseCardProps {
  title: string;
  description: string;
  duration?: string;
  imageUrl?: string;
  level?: string;
  targetAudience?: string[];
  fees?: number;
  // Optionally allow children for actions (edit/delete/view)
  children?: React.ReactNode;
}

const CourseCard: React.FC<CourseCardProps> = ({
  title,
  description,
  duration,
  imageUrl,
  level,
  targetAudience,
  fees,
  children,
}) => {
  return (
    <Card className="flex flex-col hover:shadow-md transition-shadow cursor-pointer select-none w-full max-w-md mx-auto">
      {imageUrl && (
        <img
          src={imageUrl}
          alt={title}
          className="w-full h-32 object-cover rounded-t-md"
        />
      )}
      <CardHeader className="p-3">
        <CardTitle className="text-sm font-bold truncate">{title}</CardTitle>
        <CardDescription className="text-xs text-gray-600 line-clamp-3">
          {description || "No description provided."}
        </CardDescription>
      </CardHeader>
      <CardContent className="p-3 flex flex-col flex-grow">
        <div className="space-y-1 mb-2">
          {duration && (
            <div className="flex items-center text-xs text-gray-500 truncate">
              <Clock className="w-3 h-3 mr-1 text-ngo-color4" />
              <span>Duration: {duration}</span>
            </div>
          )}
          {level && (
            <div className="flex items-center text-xs text-gray-500 truncate">
              <BookOpen className="w-3 h-3 mr-1 text-ngo-color4" />
              <span>Level: {level}</span>
            </div>
          )}
          {targetAudience && (
            <div className="flex items-center text-xs text-gray-500 truncate">
              <Users className="w-3 h-3 mr-1 text-ngo-color4" />
              <span>Target Audience: {targetAudience.join(", ")}</span>
            </div>
          )}
          {fees !== undefined && (
            <div className="flex items-center text-xs text-gray-500 truncate">
              <IndianRupee className="w-3 h-3 mr-1 text-ngo-color4" />
              <span>Fees: ₹{fees}</span>
            </div>
          )}
        </div>
        {children && <div className="mt-2">{children}</div>}
      </CardContent>
    </Card>
  );
};

export default CourseCard; 