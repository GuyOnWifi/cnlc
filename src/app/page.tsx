import Camera from "@/components/Camera";
import NavBar from "@/components/NavBar";

export default function Home() {
  return (
    <div className="h-screen w-screen min-h-screen min-w-screen flex flex-col items-between gap-4 overflow-hidden">
      <div className="flex-grow">
        <Camera />
      </div>
      <NavBar />
    </div>
  );
}
