
"use client";

import { fitContext } from '@/context/fitCardContext';
import { Workout } from '@/components/type';
import { Bookmark } from 'lucide-react';
import React, { useContext } from 'react';
import { toast } from 'react-toastify';

interface SavebuttonProps {
    fit: Workout;
}

const Savebutton = ({ fit }: SavebuttonProps) => {

    const context = useContext(fitContext);

    if (!context) return null;

    const { setSaveFit } = context;

    const handleAdd = () => {

        if (!fit) {
            toast.error("Workout data not found!");
            return;
        }

        setSaveFit((prev) => {

            if (prev.some((item) => item.id === fit.id)) {
                toast.info("Already saved!");
                return prev;
            }

            toast.success(`You have saved "${fit.name}"`);

            return [...prev, fit];
        });

    };

    return (
        <button
            type="button"
            onClick={handleAdd}
            className="flex items-center gap-2 border border-[#39404c] hover:border-lime-400 text-white px-6 py-3 rounded-xl transition"
        >
            <Bookmark size={18} />
            Save for later
        </button>
    );
};

export default Savebutton;
