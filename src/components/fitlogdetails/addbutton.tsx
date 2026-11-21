
"use client";

import { fitContext } from '@/context/fitCardContext';
import { Workout } from '@/components/type';
import { CalendarPlus } from 'lucide-react';
import React, { useContext } from 'react';
import { toast } from 'react-toastify';

interface AddbuttonProps {
    fit: Workout;
}

const Addbutton = ({ fit }: AddbuttonProps) => {

    const context = useContext(fitContext);
    if (!context) return null;
    const { addFit, setAddFit } = context;

    const handleAdd = () => {
        if (!fit) {
            toast.error("Workout data not found!");
            return;
        }
        if (addFit.some((item) => item.id === fit.id)) {
            toast.info("Already saved!");
            return;
        }
        setAddFit((prev) => [...prev, fit]);
        toast.success(`You have saved "${fit.name}"`);
    };

    return (
        <button
            className="flex items-center gap-2 bg-lime-400 hover:bg-lime-300 text-black font-bold px-6 py-3 rounded-xl transition"
            onClick={handleAdd}
        >
            <CalendarPlus size={18} />
            Add to todays plan
        </button>
    );
};

export default Addbutton;
