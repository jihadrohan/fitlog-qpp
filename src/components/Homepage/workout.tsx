
import React from "react";
import { Clock, Flame, Star } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Workout } from "../type";


const WorkoutCard = ({ fitcard }: { fitcard: Workout }) => {
    return (
        <Link href={`/carddetails/${fitcard.id}`}>
        <div className="bg-[#15171d] rounded-2xl overflow-hidden border border-[#292d36] hover:border-lime-400 transition duration-300 group container mx-auto ">
            <div className="w-full h-48 overflow-hidden">
                <Image
                    src={fitcard.image}
                    alt={fitcard.name}
                    width={500}
                    height={300}
                    className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                ></Image>
            </div>
            <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                    {fitcard.muscleGroups.map((muscle, index) => (
                        <span
                            key={index}
                            className="bg-lime-400 text-black px-3 py-1 rounded-full text-xs font-bold uppercase"
                        >
                            {muscle}
                        </span>
                    ))}
                </div>
                <h2 className="text-white text-xl font-extrabold uppercase tracking-wide">
                    {fitcard.name}
                </h2>
                <p className="text-gray-400 text-sm mt-1">
                    {fitcard.equipment}
                </p>
                <div className="border-t border-[#292d36] mt-5 pt-4"></div>
                <div className="flex items-center gap-5 text-gray-400 text-sm">
                    <div className="flex items-center gap-1.5">
                        <Clock size={15} />
                        <span>{fitcard.duration} min</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                        <Flame size={15} fill="currentColor" />
                        <span>{fitcard.caloriesBurned} kcal</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                        <Star size={15} />
                        <span>{fitcard.rating}</span>
                    </div>
                </div>
            </div>
        </div>
        </Link>
    );
};

export default WorkoutCard;
