"use client";

import { createContext, useContext, useState } from "react";

const IntersectionContext = createContext();

const IntersectionProvider = ({ children }) => {
  const [sectionIntersectedName, setSectionIntersectedName] =
    useState("#about");
  const [isIntersecting, setIsIntersecting] = useState(false);

  return (
    <IntersectionContext.Provider
      value={{
        sectionIntersectedName,
        setSectionIntersectedName,
        isIntersecting,
        setIsIntersecting,
      }}
    >
      {children}
    </IntersectionContext.Provider>
  );
};

export default IntersectionProvider;

export const useIntersection = () => useContext(IntersectionContext);
