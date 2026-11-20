
import { Workout } from "../type";
import WorkoutCard from "./workout";



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
const Fitcard = async () => {
    const fitCardData = await getinfo();
    return (
        <section className="bg-[#0b0d10] min-h-screen p-6">
            <div className="max-w-7xl mx-auto">
                <h1 className="text-3xl font-bold text-white mb-2">
                    THE LIBRARY
                </h1>
                <p className="text-gray-400 mb-8">
                    Twelve lifts covering every major muscle group.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
    {fitCardData.map((fitcard) => (
        <WorkoutCard
            key={fitcard.id}
            fitcard={fitcard}
        />
    ))}
</div>
            </div>
        </section>
    );
};

export default Fitcard;
