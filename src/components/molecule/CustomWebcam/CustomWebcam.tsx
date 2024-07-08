'use client'

import { FC, useRef, useState, useCallback, useEffect } from 'react'
import Webcam from 'react-webcam'
import dynamic from 'next/dynamic'
import { Skeleton } from '@chakra-ui/react'
import {MachineState} from "@/models/MachineState";

const DetectionCam = dynamic(
    () => {
        return import('@/components/atom/DetectionCam/DectectionCam')
    },
    { ssr: false }
)

interface CustomWebcamProps {
    width: number
    height: number
    isCaptureEnable: boolean
    setStatus: Function
}



const CustomWebcam: FC<CustomWebcamProps> = ({
    width,
    height,
    isCaptureEnable,
    setStatus
}) => {
    const webcamRef = useRef<Webcam>(null)
    const [url, setUrl] = useState<string | null>(null)
    const [isReady, setIsReady] = useState<boolean>(false)


    const updateState = (value: boolean) => {
        if(value){
            setStatus(MachineState.READY)
        }else{
            setStatus(MachineState.STARTING)
        }
        setIsReady(value)
    }
    useEffect( () => {
        setIsReady(false)
        setStatus(MachineState.STARTING)
    },[])

    const capture = (url: string) => {
        setUrl(url)
        console.log(url)
    }
    return (
        <>
            {isCaptureEnable && (
                <div className="inline-block relative">
                    <div style={{ width, height }}>
                        <Skeleton className={"h-full"} isLoaded={isReady}>
                            {/*<div className={isReady? "show": "hidden"}>*/}
                            <DetectionCam
                                width={width}
                                height={height}
                                webcamRef={webcamRef}
                                isCaptureEnable
                                capture={capture}
                                setIsReady={updateState}
                            />
                            {/*</div>*/}

                            {/*<div style={{ width, height }} >*/}
                        </Skeleton>
                        {/*</div>*/}
                    </div>
                </div>
            )}
        </>
    )
}

export default CustomWebcam
