export interface Workout {
    id: number;
    name: string;
    image: string;
    description: string;
    muscleGroups: string[];
    duration: number;
    caloriesBurned: number;
    rating: number;
    equipment: string;
    difficulty: string;
    sets: number;
    reps: number;
    instructions: string[];
}