'use client'

import { useRef, useState, useCallback, useEffect } from 'react'
import Webcam from 'react-webcam'
import * as ml5 from 'ml5'

const DetectionCam = (props) => {
    const webcamRef = props.webcamRef
    const onCapture = props.capture
    const canvasRef = useRef()

    const dimensions = {
        width: props.width || 500,
        height: props.height || 500,
    }

    const { width, height } = dimensions

    useEffect(() => {
        let detectionInterval

        const modelLoaded = () => {
            webcamRef.current.video.width = width
            webcamRef.current.video.height = height
            canvasRef.current.width = width
            canvasRef.current.height = height
            props.setIsReady(true)
            detectionInterval = setInterval(async () => {
                let results = await detect()
                //TODO: check if object has been detected
                // if true there is object call api to ML server and call socket to hardware
                // if false wait and prompt user to insert item
                if (canvasRef.current === null) return
                const ctx = canvasRef.current.getContext('2d')
                ctx.clearRect(0, 0, width, height)
                if (results && results.length) {
                    results.forEach((detection) => {
                        ctx.beginPath()
                        ctx.fillStyle = '#1fe5e5'
                        const { label, x, y, width, height } = detection
                        ctx.fillText(label, x + 56, y - 5)
                        // ctx.rect(x, y, width, height)
                        // ctx.stroke()
                    })
                }

                if (webcamRef.current?.getScreenshot() && results.length > 0) {
                    let isReady = false
                    const trashClass = window.localStorage.getItem(
                        'ACCEPT_TRASH_CLASS'
                    ) || ['bottle', 'can']

                    results.forEach((result) => {
                        isReady = trashClass.includes(result.label) || isReady
                    })
                    if (isReady) {
                        onCapture(webcamRef.current?.getScreenshot())
                    }
                }
            }, 2000)
        }

        const objectDetector = ml5.objectDetector('cocossd', modelLoaded)

        const detect = async () => {
            if (webcamRef === undefined || !webcamRef.current) return
            try {
                if (webcamRef.current.video.readyState !== 4) {
                    console.warn('Video not ready yet')
                    return
                }
                return await objectDetector.detect(webcamRef.current.video)

                // objectDetector.detect(webcamRef.current.video, (err, results) => {
                //     if(!canvasRef.current) {
                //         //TODO: call function load canvas
                //         return
                //     }
                //     const ctx = canvasRef.current.getContext('2d');
                //     ctx.clearRect(0, 0, width, height);
                //     if (results && results.length) {
                //         results.forEach((detection) => {
                //             ctx.beginPath();
                //             ctx.fillStyle = "#FF0000";
                //             const {label, x, y, width, height} = detection;
                //             ctx.fillText(label, x, y - 5);
                //             ctx.rect(x, y, width, height);
                //             ctx.stroke();
                //         });
                //     }
                //     return results;
                // });
            } catch (err) {
                console.error(err)
            }
        }

        return () => {
            if (detectionInterval) {
                clearInterval(detectionInterval)
            }
        }
    }, [width, height])

    return (
        <>
            <div className="inline-block relative">
                <Webcam
                    ref={webcamRef}
                    videoConstraints={{
                        width: width,
                        height: height,
                    }}
                />
                <canvas ref={canvasRef} className="absolute top-0 left-0" />
            </div>
        </>
    )
}

export default DetectionCam
