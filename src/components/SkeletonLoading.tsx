// SkeletonLoading.tsx or add it directly in Courses.tsx
import React from "react";

const SkeletonLoading = () => {
  return (
    <div className="animate-pulse">
      <div className="bg-gray-300 h-48 w-full rounded-t-lg"></div>
      <div className="p-6">
        <div className="bg-gray-300 h-6 w-3/4 mb-4 rounded"></div>
        <div className="bg-gray-300 h-4 w-full mb-2 rounded"></div>
        <div className="bg-gray-300 h-4 w-full mb-2 rounded"></div>
        <div className="bg-gray-300 h-4 w-1/2 mb-4 rounded"></div>
        <div className="bg-gray-300 h-10 w-full rounded"></div>
      </div>
    </div>
  );
};

export default SkeletonLoading;
