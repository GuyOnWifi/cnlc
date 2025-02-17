import Image from "next/image";

export default function NavBar() {
    return (
        <div className="flex flex-row justify-evenly items-bottom gap-4 bg-[#161A1E] py-2 font-montserrat text-[8px]">
            <div className="flex flex-col justify-center items-center">
                <Image src="/community.svg" alt="Community image" width={20} height={20}></Image>
                <span>Community</span>
            </div>
            <div className="flex flex-col justify-center items-center">
                <Image src="/recipes.svg" alt="Recipe image" width={20} height={20}></Image>
                <span>Recipes</span>
            </div>
            <div className="flex flex-col justify-center items-center">
                <Image src="/record.svg" alt="Record image" width={20} height={20}></Image>
                <span>Record</span>
            </div>
            <div className="flex flex-col justify-center items-center">
                <Image src="/fridge.svg" alt="Fridge image" width={20} height={20}></Image>
                <span>Fridge</span>
            </div>
            <div className="flex flex-col justify-center items-center">
                <Image src="/you.svg" alt="Person image" width={20} height={20}></Image>
                <span>You</span>
            </div>
        </div>
    )
}