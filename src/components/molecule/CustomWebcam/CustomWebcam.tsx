'use client'

import { FC, useRef, useState, useCallback, useEffect } from 'react'
import Webcam from 'react-webcam'
import dynamic from 'next/dynamic'
import { Skeleton } from '@chakra-ui/react'

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
}

const CustomWebcam: FC<CustomWebcamProps> = ({
    width,
    height,
    isCaptureEnable,
}) => {
    const webcamRef = useRef<Webcam>(null)
    const [url, setUrl] = useState<string | null>(null)
    const [isReady, setIsReady] = useState<boolean>(false)

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
                                setIsReady={setIsReady}
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
