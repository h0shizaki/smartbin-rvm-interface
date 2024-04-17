'use client';
import dynamic from "next/dynamic";
import CustomWebcam from "@/components/molecule/CustomWebcam/CustomWebcam";
import DetectionCam from '@/components/atom/DetectionCam/DectectionCam';
import {useState} from "react";

// const Webcam = dynamic(
//     () => {
//       return import("@/components/Webcam");
//     },
//     { ssr: false }
// );

export default function Home() {

    const [isStart, setIsStart] = useState<boolean>(false)

    return (
        <>
            <span>Hello</span>
            <button onClick={() => {
                setIsStart(!isStart);
            }}>Toggle</button>
            <CustomWebcam width={720} height={360} isCaptureEnable={isStart}/>
            {/*<DetectionCam width={720} height={360}/>*/}
        </>
    );
}