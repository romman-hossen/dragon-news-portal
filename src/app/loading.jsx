import React from "react";

const GlobalLoading = () => {
  return (
    <div className="flex min-h-[75vh] justify-center items-center">
      <div className="text-gray-600">
        <span className="loading loading-ring loading-xs"></span>
        <span className="loading loading-ring loading-sm"></span>
        <span className="loading loading-ring loading-md"></span>
        <span className="loading loading-ring loading-lg"></span>
        <span className="loading loading-ring loading-xl"></span>
      </div>
    </div>
  );
};

export default GlobalLoading;
