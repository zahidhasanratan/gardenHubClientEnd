import { useEffect } from "react";

const useDocumentTitle = (title) => {
  useEffect(() => {
    document.title = title || "Garden Hub";
  }, [title]);
};

export default useDocumentTitle;
