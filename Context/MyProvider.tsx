import React, { useState } from 'react';
import { MyContext } from './MyContext';
import IChecklistAPI from '../interfaces/IChecklistsAPI';

interface MyProviderProps {
  children: React.ReactNode;
}

export function MyProvider({ children }: MyProviderProps) {
  const [checklists, setChecklists] = useState<IChecklistAPI[]>([]);

  const state = {
    checklists,
    setChecklists
  }


  return (
    <MyContext.Provider 
      value={{...state}}
    >
      {children}
    </MyContext.Provider>
  );
}
