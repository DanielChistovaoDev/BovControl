import React, { createContext, useState } from 'react';
import IChecklistAPI from '../interfaces/IChecklistsAPI';

interface MyContextType {
    checklists: IChecklistAPI[];
    setChecklists: (list: IChecklistAPI[]) => void;
}

export const MyContext = createContext<MyContextType>({
    checklists: [],
    setChecklists: (list: IChecklistAPI[]) => {}
});



