"use client"

import React, { useState, createContext } from 'react';
import { links } from "@/lib/data";

type SectionName = typeof links[number]["name"];
type ActiveSectionContextType = {
  activeSection: SectionName;
  setActiveSection: React.Dispatch<React.SetStateAction<SectionName>>;
  timeOfLastClick: number;
  setTimeOfLastClick: React.Dispatch<React.SetStateAction<number>>;
};

export const ActiveSectionContext = createContext<ActiveSectionContextType | null>(null);

export default function ActiveSectionContextProvider({ children }: { children: React.ReactNode }) {
  const [activeSection, setActiveSection] = useState<SectionName>('Home');
  const [timeOfLastClick, setTimeOfLastClick] = useState(0);

  return (
    <ActiveSectionContext.Provider value={{ activeSection, setActiveSection, timeOfLastClick, setTimeOfLastClick }}>
      {children}
    </ActiveSectionContext.Provider>
  );
}
//this is the hook that is created for the active section 
export function useActiveSectionContext(){
  const context = React.useContext(ActiveSectionContext);
  if (context === null){
    throw new Error("useActiveSectionContext must be used within ActiveSectionContextProvider");
  }
  return context;

}