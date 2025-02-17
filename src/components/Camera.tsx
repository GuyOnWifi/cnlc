"use client";

import { useEffect, useRef, useState } from "react";

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
        <div>
            <video ref={videoRef} playsInline={true} autoPlay={true}>

            </video>
            {error && <p>{error}</p>}
        </div>

    )
}