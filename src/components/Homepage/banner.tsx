
import Image from "next/image";
import Workout from "@/assets/banner.png";

const HeroBanner = () => {
  return (
    <section className="bg-[#0b0d10] px-4 py-5">
      <div className="max-w-7xl mx-auto">

        <div className="bg-[#15171d] border border-[#252830] rounded-xl
        flex flex-col md:flex-row items-center justify-between
        min-h-56.25 px-6 md:px-16 py-10 gap-6">
          <div className="w-full md:w-3/5">

            <p className="text-lime-400 text-[10px] font-bold mb-3">
              WORKOUT LIBRARY
            </p>

            <h1 className="text-white text-3xl md:text-4xl
            font-extrabold leading-[0.95] tracking-tight uppercase">
              Train with intent. Log
              <br />
              every set.
            </h1>

            <p className="text-gray-400 text-xs leading-relaxed
            mt-4 max-w-97.5">
              FitLog is a dark, no-nonsense gym companion:
              pick a lift, lock it into todays plan, and
              watch the weeks work add up.
            </p>

            <button className="btn btn-sm bg-lime-400
            hover:bg-lime-300 text-black border-none
            rounded-md text-[10px] font-bold mt-4">
              BROWSE WORKOUTS
            </button>

          </div>
          <div className="w-full md:w-2/5 flex justify-center md:justify-end">

            <Image
              src={Workout}
              alt="Workout illustration"
              width={230}
              height={190}
              className="w-57.5 h-auto max-h-47.5 object-contain"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroBanner;
