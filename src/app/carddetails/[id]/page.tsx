

import { Workout } from '@/components/type';
import React from 'react';
import Image from 'next/image';
import { Clock, Flame, Star } from 'lucide-react';
import Addbutton from '@/components/fitlogdetails/addbutton';
import Savebutton from '@/components/fitlogdetails/savebutton';

interface CardIdPageProps {
    params: Promise<{
        id: string;
    }>;
}

const getinfo = async (): Promise<Workout[]> => {
    const res = await fetch(
        "https://api.api-store.workers.dev/api/fitlog",
        { cache: "no-store" }
    );

    if (!res.ok) {
        throw new Error("Failed to fetch workout data");
    }

    const data = await res.json();
    return data;
};

const CardDetails = async ({ params }: CardIdPageProps) => {

    const { id } = await params;

    const fitData = await getinfo();

    const fit = fitData.find(
        (item) => String(item.id) === String(id)
    );

    if (!fit) {
        return <div>Workout not found!</div>;
    }

    
return (
    <div className="min-h-screen bg-[#101114] text-white px-5 py-10">

            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10">
                <div className="relative w-full h-112.5 lg:h-175 rounded-2xl overflow-hidden">

                    <Image
                        src={fit.image}
                        alt={fit.name}
                        fill
                        priority
                        className="object-cover"
                        sizes="(max-width: 1024px) 100vw, 50vw"
                    />

                </div>

                <div className="flex flex-col">
                    <h1 className="text-3xl md:text-4xl font-extrabold uppercase tracking-wide">
                        {fit.name}
                    </h1>
                    <p className="text-gray-400 text-sm leading-relaxed mt-4">
                        {fit.description}
                    </p>

                    <div className="flex flex-wrap gap-2 mt-5">

                        {fit.muscleGroups.map((muscle, index) => (
                            <span
                                key={index}
                                className="bg-lime-400 text-black px-4 py-1.5 rounded-full text-xs font-bold uppercase"
                            >
                                {muscle}
                            </span>
                        ))}

                    </div>

                    <div className="flex flex-wrap items-center gap-6 text-gray-400 text-sm mt-7">

                        <div className="flex items-center gap-2">
                            <Clock size={17} />
                            <span>{fit.duration} min</span>
                        </div>

                        <div className="flex items-center gap-2">
                            <Flame size={17} />
                            <span>{fit.caloriesBurned} kcal</span>
                        </div>

                        <div className="flex items-center gap-2">
                            <Star size={17} />
                            <span>{fit.rating}</span>
                        </div>

                    </div>

                    <div className="bg-[#171a22] border border-[#292d36] rounded-2xl mt-7 overflow-hidden">

                        {[
                            { label: "EQUIPMENT", value: fit.equipment },
                            { label: "DIFFICULTY", value: fit.difficulty },
                            { label: "SETS", value: fit.sets },
                            { label: "REPS", value: fit.reps },
                            { label: "DURATION", value: `${fit.duration} min` },
                            { label: "CALORIES", value: `${fit.caloriesBurned} kcal` },
                            { label: "RATING", value: fit.rating },
                        ].map((item, index) => (

                            <div
                                key={index}
                                className="flex justify-between items-center px-6 py-4 border-b border-[#292d36] last:border-none"
                            >

                                <span className="text-gray-400 text-xs font-bold tracking-wide">
                                    {item.label}
                                </span>

                                <span className="text-gray-200 text-sm font-medium">
                                    {item.value}
                                </span>

                            </div>

                        ))}

                    </div>
                    <div className="mt-8">

                        <h2 className="text-xl font-extrabold mb-5">
                            INSTRUCTIONS
                        </h2>

                        <ol className="space-y-4">
 
                            {fit.instructions.map((instruction: string | number | bigint | boolean | React.ReactElement<unknown, string | React.JSXElementConstructor<unknown>> | Iterable<React.ReactNode> | React.ReactPortal | Promise<string | number | bigint | boolean | React.ReactPortal | React.ReactElement<unknown, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | null | undefined> | null | undefined, index: React.Key | null | undefined) => (

                                <li
                                    key={index}
                                    className="flex gap-4 text-gray-300 text-sm leading-relaxed"
                                >

                                    <span className="text-lime-400 font-bold">
                                        {index + 1}.
                                    </span>

                                    <span>
                                        {instruction}
                                   </span>
                                </li>
                            ))}
                        </ol>
                    </div>
                    <div className="flex flex-wrap gap-4 mt-10">
                        <Addbutton fit = {fit}></Addbutton>
                        <Savebutton fit = {fit}></Savebutton>

                    </div>

                </div>

            </div>

        </div>
);

};

export default CardDetails;
