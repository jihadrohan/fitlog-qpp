
"use client";

import React, { createContext, ReactNode, useState } from 'react';
import { Workout } from '@/components/type';

interface FitContextType {
    addFit: Workout[];
    setAddFit: React.Dispatch<React.SetStateAction<Workout[]>>;
    saveFit: Workout[];
    setSaveFit: React.Dispatch<React.SetStateAction<Workout[]>>;
}

export const fitContext = createContext<FitContextType | null>(null);

const CardContext = ({ children }: { children: ReactNode }) => {

    const [addFit, setAddFit] = useState<Workout[]>([]);
    const [saveFit, setSaveFit] = useState<Workout[]>([]);

    const sharedData: FitContextType = {
        addFit,
        setAddFit,
        saveFit,
        setSaveFit,
    };

    return (
        <fitContext.Provider value={sharedData}>
            {children}
        </fitContext.Provider>
    );
};

export default CardContext;
