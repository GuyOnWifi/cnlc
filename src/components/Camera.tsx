"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

export default function Camera() {
    
    const videoRef = useRef<HTMLVideoElement>(null);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        navigator.mediaDevices
            .getUserMedia({
                video: {
                    facingMode: "environment"
                },
            })
            .then((stream) => {
                if (videoRef.current) {
                    console.log(stream);
                    videoRef.current.srcObject = stream;
                }
            })
            .catch(err => {
                setError("Error accessing camera: " + err.message);
            })
    }, []);

    return (
        <div className="w-full h-full relative flex flex-col justify-center overflow-hidden">
            {!error && <video ref={videoRef} playsInline={true} autoPlay={true} className="" />}
            <Image src="/record_button.svg" alt="Take an image" width={40} height={40} className="absolute h-[6rem] w-[6rem] bottom-4 left-1/2 -translate-x-1/2 "></Image>
            {error && <p>{error}</p>}
        </div>
    )
}