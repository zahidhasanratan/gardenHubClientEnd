import React from "react";

export const Loader = () => {
  return (
    <div className="fixed inset-0 bg-white bg-opacity-70 flex items-center justify-center z-50">
      <span className="loading loading-spinner loading-lg text-primary"></span>
    </div>
  );
};
