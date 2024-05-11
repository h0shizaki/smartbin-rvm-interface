'use client'
import dynamic from 'next/dynamic'
import CustomWebcam from '@/components/molecule/CustomWebcam/CustomWebcam'
import DetectionCam from '@/components/atom/DetectionCam/DectectionCam'
import { useState } from 'react'
import { BasicModal } from '@/components/atom/Modal/BasicModal'
import { IInstruction } from '@/models/Instruction'
import { Instruction } from '@/components/atom/Instruction/Instruction'
import { Button, Heading } from '@chakra-ui/react'
import { StartingPage } from '@/components/molecule/StartingPage/StartingPage'
import { Text } from '@chakra-ui/react'
import Webcam from 'react-webcam'
import {Dashboard} from "@/components/molecule/ProgressPage/Dashboard";

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
            <div className="fixed top-0 right-0 ">EN/US</div>
            {!isStart ? (
                <StartingPage setStart={setIsStart} />
            ) : (
                <Dashboard isStart/>
            )}
        </>
    )
}
