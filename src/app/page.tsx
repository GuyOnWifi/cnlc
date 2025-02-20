import Camera from "@/components/Camera";
import NavBar from "@/components/NavBar";
import NutritionMenu from "@/components/NutritionMenu";

export default function Home() {
  
  const sample = {
    name: "Fried Chicken Wings",
    calories: 615,
    carbs: 93,
    protein: 34,
    fats: 21,
    score: 7
  };

  return (
    <div className="h-dvh w-dvw min-h-dvh min-w-dvw flex flex-col items-between gap-4 overflow-hidden">
      {/* <NutritionMenu foodData={sample}/> */}
      <div className="flex-grow">
        <Camera />
      </div>
      <NavBar />
    </div>
  );
}
