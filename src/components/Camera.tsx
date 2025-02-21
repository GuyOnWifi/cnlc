"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

export default function Camera(props: {onImageTaken: Function}) {
    
    const videoRef = useRef<HTMLVideoElement>(null);
    const [error, setError] = useState<string | null>(null);

    const onButtonClick = () => {

        if (!videoRef.current) return; 
        const video = videoRef.current;

        const canvas = document.createElement('canvas');
        const context = canvas.getContext('2d');
        
        if (!context) return;
        // Set the canvas size to match the video dimensions
        canvas.width = video.videoWidth;
        canvas.height = video.videoHeight;

        // Draw the current video frame onto the canvas
        context.drawImage(video, 0, 0, canvas.width, canvas.height);

        // Get the data URL of the image (base64)
        const imageUrl = canvas.toDataURL('image/png');
        
        // You can now use this URL to display the image or download it
        console.log(imageUrl);
        
    }

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
            <Image src="/record_button.svg" alt="Take an image" onClick={onButtonClick} width={40} height={40} className="absolute h-[6rem] w-[6rem] bottom-4 left-1/2 -translate-x-1/2 "></Image>
            {error && <p>{error}</p>}
        </div>
    )
}