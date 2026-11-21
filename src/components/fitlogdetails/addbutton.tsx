
"use client";

import { fitContext } from '@/context/fitCardContext';
import { CalendarPlus } from 'lucide-react';
import React, { useContext } from 'react';
import { toast } from 'react-toastify';

const Addbutton = ({ fit }) => {

    const { addFit, setAddFit } = useContext(fitContext);

    const handleAdd = () => {

        if (!fit) {
            toast.error("Workout data not found!");
            return;
        }

        if (addFit.some((item) => item.id === fit.id)) {
            toast.info("Already saved!");
            return;
        }

        setAddFit((prev: unknown) => [...prev, fit]);

        toast.success(`You have saved "${fit.name}"`);
    }

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
