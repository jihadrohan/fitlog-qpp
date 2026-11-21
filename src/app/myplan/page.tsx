
"use client";

import React, { useContext, useMemo, useState } from "react";
import { fitContext } from "@/context/fitCardContext";
import { Workout } from "@/components/type";
import Image from "next/image";
import Link from "next/link";
import {
    Clock,
    Flame,
    Star,
    Check,
    X,
    Dumbbell,
} from "lucide-react";

const Myplan = () => {

    const context = useContext(fitContext);

    const addFit: Workout[] = context?.addFit ?? [];
    const saveFit: Workout[] = context?.saveFit ?? [];

    const [activeTab, setActiveTab] = useState<"today" | "saved">("today");
    const [sortBy, setSortBy] = useState<"duration" | "calories" | "rating" | "name">("duration");
    const [completed, setCompleted] = useState<string[]>([]);
    const [visibleCount, setVisibleCount] = useState<number>(5);

    const currentList = activeTab === "today" ? addFit : saveFit;

    const totalExercises = addFit.length;

    const totalMinutes = addFit.reduce(
        (total, item) => total + Number(item.duration), 0
    );

    const totalCalories = addFit.reduce(
        (total, item) => total + Number(item.caloriesBurned), 0
    );

    const sortedList = useMemo(() => {
        return [...currentList].sort((a, b) => {

            if (sortBy === "duration") {
                return Number(a.duration) - Number(b.duration);
            }

            if (sortBy === "calories") {
                return Number(a.caloriesBurned) - Number(b.caloriesBurned);
            }

            if (sortBy === "rating") {
                return Number(b.rating) - Number(a.rating);
            }

            return a.name.localeCompare(b.name);

        });
    }, [currentList, sortBy]);

    const visibleList = sortedList.slice(0, visibleCount);

    const handleRemove = (id: string | number) => {

        if (activeTab === "today") {

            context?.setAddFit(
                addFit.filter(item => item.id !== id)
            );

            setCompleted(completed.filter(item => item !== String(id)));

        } else {

            context?.setSaveFit(
                saveFit.filter(item => item.id !== id)
            );

        }
    };

    const handleComplete = (id: string | number) => {

        setCompleted(prev =>
            prev.includes(String(id))
                ? prev.filter(item => item !== String(id))
                : [...prev, String(id)]
        );

    };

    const allVisibleCompleted =
        visibleList.length > 0 &&
        visibleList.every(item => completed.includes(String(item.id)));

    if (!context) {
        return <div>Context not found</div>;
    }

    return (
        <div className="min-h-screen bg-[#101114] text-white px-5 md:px-8 py-10">
            <div className="max-w-7xl mx-auto">

                <div className="mb-7">
                    <h1 className="text-3xl font-extrabold uppercase">
                        MY PLAN
                    </h1>

                    <p className="text-gray-400 text-sm mt-2">
                        Cap of five lifts for today. Finish them, then load more.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 bg-[#15171e] border border-[#292d36] rounded-2xl p-6 mb-8">

                    <div className="md:border-r border-[#292d36] px-2 py-2">
                        <p className="text-gray-400 text-xs mb-2">
                            Exercises
                        </p>
                        <h2 className="text-4xl font-extrabold text-lime-400">
                            {totalExercises}
                        </h2>
                    </div>

                    <div className="md:border-r border-[#292d36] px-2 py-2 md:pl-8">
                        <p className="text-gray-400 text-xs mb-2">
                            Minutes
                        </p>
                        <h2 className="text-4xl font-extrabold">
                            {totalMinutes}
                        </h2>
                    </div>

                    <div className="px-2 py-2 md:pl-8">
                        <p className="text-gray-400 text-xs mb-2">
                            Calories
                        </p>
                        <h2 className="text-4xl font-extrabold">
                            {totalCalories}
                        </h2>
                    </div>

                </div>

                <div className="flex flex-wrap items-center justify-between gap-4 mb-7">

                    <div className="flex bg-[#15171e] border border-[#292d36] rounded-xl p-1">

                        <button
                            onClick={() => setActiveTab("today")}
                            className={`px-5 py-2 rounded-lg text-xs transition ${
                                activeTab === "today"
                                    ? "bg-[#242832] text-white font-bold"
                                    : "text-gray-400 hover:text-white"
                            }`}
                        >
                            Todays Plan
                        </button>

                        <button
                            onClick={() => setActiveTab("saved")}
                            className={`px-5 py-2 rounded-lg text-xs transition ${
                                activeTab === "saved"
                                    ? "bg-[#242832] text-white font-bold"
                                    : "text-gray-400 hover:text-white"
                            }`}
                        >
                            Saved
                        </button>

                    </div>

                    <div className="flex items-center gap-3">
                        <span className="text-gray-400 text-xs">
                            Sort By
                        </span>

                        <select
                            value={sortBy}
                            onChange={(e) => setSortBy(e.target.value as typeof sortBy)}
                            className="bg-[#15171e] border border-[#292d36] rounded-xl px-3 py-2 text-xs outline-none"
                        >
                            <option value="duration">Duration</option>
                            <option value="calories">Calories</option>
                            <option value="rating">Rating</option>
                            <option value="name">Name</option>
                        </select>
                    </div>

                </div>

                <div className="space-y-4">

                    {visibleList.length > 0 ? (

                        visibleList.map((fit) => (

                            <div
                                key={fit.id}
                                className="flex flex-col md:flex-row md:items-center gap-4 bg-[#15171e] border border-[#292d36] rounded-2xl p-4 hover:border-[#414754] transition"
                            >
                                <div className="relative w-full md:w-36 h-28 shrink-0 rounded-xl overflow-hidden">

                                    <Image
                                        src={fit.image}
                                        alt={fit.name}
                                        fill
                                        sizes="144px"
                                        className="object-cover"
                                    />

                                </div>

                                <div className="flex-1 min-w-0">

                                    <h2 className="text-base font-extrabold uppercase">
                                        {fit.name}
                                    </h2>

                                    <p className="text-gray-400 text-xs mt-1">
                                        {fit.equipment}
                                    </p>

                                    <div className="flex flex-wrap items-center gap-4 mt-3 text-gray-300 text-xs">

                                        <span className="flex items-center gap-1.5">
                                            <Clock size={14} className="text-lime-400" />
                                            {fit.duration} min
                                        </span>

                                        <span className="flex items-center gap-1.5">
                                            <Flame size={14} className="text-lime-400" />
                                            {fit.caloriesBurned} kcal
                                        </span>

                                        <span className="flex items-center gap-1.5">
                                            <Star size={14} className="text-lime-400" />
                                            {fit.rating}
                                        </span>

                                    </div>

                                    {completed.includes(String(fit.id)) && activeTab === "today" && (
                                        <p className="text-lime-400 text-xs mt-2 font-bold">
                                            Workout Completed
                                        </p>
                                    )}

                                </div>

                                <div className="flex flex-wrap items-center gap-3">

                                    <Link
                                        href={`/carddetails/${fit.id}`}
                                        className="border border-[#39404c] hover:border-lime-400 px-4 py-2.5 rounded-full text-xs transition"
                                    >
                                        View Details
                                    </Link>

                                    {activeTab === "today" && (

                                        <button
                                            onClick={() => handleComplete(fit.id)}
                                            className={`flex items-center gap-2 px-4 py-2.5 rounded-full text-xs font-bold transition ${
                                                completed.includes(String(fit.id))
                                                    ? "bg-[#292d36] text-lime-400"
                                                    : "bg-lime-400 hover:bg-lime-300 text-black"
                                            }`}
                                        >
                                            <Check size={15} />
                                            {completed.includes(String(fit.id))
                                                ? "Completed"
                                                : "Mark as Done"}
                                        </button>

                                    )}

                                    <button
                                        onClick={() => handleRemove(fit.id)}
                                        className="text-gray-500 hover:text-red-400 transition p-2"
                                        title="Remove"
                                    >
                                        <X size={19} />
                                    </button>

                                </div>

                            </div>

                        ))

                    ) : (

                        <div className="min-h-75 flex flex-col items-center justify-center border border-dashed border-[#292d36] rounded-2xl text-center px-5">

                            <Dumbbell size={38} className="text-gray-600 mb-5" />

                            <h2 className="text-xl font-extrabold">
                                NOTHING HERE YET
                            </h2>

                            <p className="text-gray-400 text-xs mt-2">
                                {activeTab === "today"
                                    ? "Browse the library and add a lift to get today moving."
                                    : "Save your favorite workouts to find them here."}
                            </p>

                            <Link
                                href="/"
                                className="mt-6 bg-lime-400 hover:bg-lime-300 text-black font-bold px-6 py-3 rounded-full text-xs transition"
                            >
                                Go to workouts
                            </Link>

                        </div>

                    )}

                </div>

                {activeTab === "today" &&
                    allVisibleCompleted &&
                    sortedList.length > visibleCount && (

                    <div className="flex justify-center mt-7">

                        <button
                            onClick={() => setVisibleCount(prev => prev + 5)}
                            className="bg-lime-400 hover:bg-lime-300 text-black font-bold px-7 py-3 rounded-full text-sm transition"
                        >
                            Load More Workouts
                        </button>

                    </div>

                )}

            </div>
        </div>
    );
};

export default Myplan;
