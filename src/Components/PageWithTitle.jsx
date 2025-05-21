import React, { useEffect } from "react";

export const PageWithTitle = ({ title, children }) => {
  useEffect(() => {
    document.title = title || "Garden Hub";
  }, [title]);

  return children;
};
