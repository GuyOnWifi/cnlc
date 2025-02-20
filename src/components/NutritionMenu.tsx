import Image from "next/image";

interface ComponentProps {
    foodData: {
        name: string;
        calories: number;
        carbs: number;
        protein: number;
        fats: number;
        score: number;
    };
}

export default function NutritionMenu(props: ComponentProps) {
    return (
        <div className="absolute w-full h-full bg-gray-400/35 backdrop-blur-sm z-10">
            <Image className="absolute top-4 left-4" src="/x.svg" alt="Close menu" width={20} height={20} />

            <div className="absolute bottom-0 bg-[#161A1E] flex flex-col py-4 px-4 w-full rounded-t-xl gap-4">
                <span className="text-lg font-bold">{props.foodData.name}</span>
                <div className="flex flex-row gap-4">
                    <div className="flex flex-row border-[#464646] border-2 grow rounded-md p-4 gap-4">
                        <Image src="/calories.svg" alt="calories" width={20} height={20}/>
                        <div className="flex flex-col">
                            <span className="font-bold">Calories</span>
                            <span>{props.foodData.calories}</span>
                        </div>
                    </div>

                    <div className="flex flex-row border-[#464646] border-2 grow rounded-md p-4 gap-4">
                        <Image src="/carbs.svg" alt="carbs" width={20} height={20}/>
                        <div className="flex flex-col">
                            <span className="font-bold">Carbs</span>
                            <span>{props.foodData.carbs}</span>
                        </div>
                    </div>
                </div>

                <div className="flex flex-row gap-4">
                    <div className="flex flex-row border-[#464646] border-2 grow rounded-md p-4 gap-4">
                        <Image src="/protein.svg" alt="protein" width={20} height={20}/>
                        <div className="flex flex-col">
                            <span className="font-bold">Protein</span>
                            <span>{props.foodData.protein}</span>
                        </div>
                    </div>

                    <div className="flex flex-row border-[#464646] border-2 grow rounded-md p-4 gap-4">
                        <Image src="/fat.svg" alt="fat" width={20} height={20}/>
                        <div className="flex flex-col">
                            <span className="font-bold">Fats</span>
                            <span>{props.foodData.fats}</span>
                        </div>
                    </div>
                </div>

                <div className="flex flex-row border-[#464646] border-2 grow rounded-md p-4 gap-4">
                    <Image src="/health.svg" alt="health" width={20} height={20}/>
                    <div className="flex flex-col grow">
                        <div className="font-bold flex flex-row justify-between">
                            <span>Health Score</span>
                            <span className="text-right">{props.foodData.score} / 10</span>
                        </div>
                        <div className="h-2 w-full rounded-full bg-white">
                            <div style={{width: `${props.foodData.score * 10}%`}} className="bg-green-500 h-2 z-40 rounded-full"></div>
                        </div>
                    </div>
                </div>

                <div className="flex flex-row gap-4 bg-[#464646] rounded-full self-end px-4 py-2">
                    <span>Record</span>
                    <Image src="/send.svg" alt="send" width={20} height={20} />
                </div>
            </div>
        </div>
    )
}