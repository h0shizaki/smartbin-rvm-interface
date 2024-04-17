'use client';

import {FC, useRef, useState, useCallback} from "react";
import Webcam from "react-webcam";
import dynamic from "next/dynamic";
// import DetectionCam from '@/components/atom/DetectionCam/DectectionCam';


const DetectionCam = dynamic(
    () => {
      return import("@/components/atom/DetectionCam/DectectionCam");
    },
    { ssr: false }
);
interface CustomWebcamProps {
    width: number,
    height: number,
    isCaptureEnable: boolean,
}

const CustomWebcam: FC<CustomWebcamProps> = ({width, height, isCaptureEnable}) => {
    const webcamRef = useRef<Webcam>(null);
    // const [url, setUrl] = useState<string | null>(null);
    // const capture = useCallback(() => {
    //     const imageSrc = webcamRef.current?.getScreenshot();
    //     if (imageSrc) {
    //         setUrl(imageSrc);
    //     }
    // }, [webcamRef]);

    return (
        <>
            <header>
                <h1>camera app</h1>
            </header>
            {isCaptureEnable ? (
                <>
                    <div>
                        <DetectionCam
                            width={width}
                            height={height}
                            webcamRef={webcamRef}
                            isCaptureEnable
                        />
                    </div>
                </>
            ) : (
                <h1>Please start</h1>
            )}


            {/*{url && (*/}
            {/*    <>*/}
            {/*        <div>*/}
            {/*            <button*/}
            {/*                onClick={() => {*/}
            {/*                    setUrl(null);*/}
            {/*                }}*/}
            {/*            >*/}
            {/*                delete*/}
            {/*            </button>*/}
            {/*        </div>*/}
            {/*        <div>*/}
            {/*            <img src={url} alt="Screenshot"/>*/}
            {/*        </div>*/}
            {/*    </>*/}
            {/*)}*/}
        </>
    );
};

export default CustomWebcam;