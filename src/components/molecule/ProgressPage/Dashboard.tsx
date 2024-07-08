'use client'

import { Button, Heading, Text, useDisclosure } from '@chakra-ui/react'
import CustomWebcam from '@/components/molecule/CustomWebcam/CustomWebcam'
import { ConfirmModal } from '@/components/atom/Modal/ConfirmModal'
import React, {useEffect, useState} from 'react'
import { useRouter } from 'next/navigation'
import servoService from '@/services/ServoService'
import { MachineState } from '@/models/MachineState'

interface IProps {
    isStart: boolean
}

export const Dashboard = ({ isStart }: IProps) => {
    const router = useRouter()
    const { isOpen, onOpen, onClose } = useDisclosure()
    const [status, setStatus] = useState<MachineState>(MachineState.STARTING)

    const sleep = (ms:number) => new Promise(
        resolve => setTimeout(resolve, ms));
    const onConfirm = ():void =>  {
        console.log("Hello World")
        setStatus(MachineState.ENDING)
        onClose()
        // if(pointEarned > 1 ){
        //    TODO: navigate to point collecting page
            router.push("/about")
        // }else{
        //    TODO: navigate to home page
        // window.location.reload()
        // }
        setStatus(MachineState.IDLE)
    }

    const moveServoHandler = async () => {
        setStatus(MachineState.PROCESSING)
        await sleep(3000)

        //random true or false
        if(Math.random() < 0.5) {
            // accept item
            setStatus(MachineState.ACCEPT)
            await servoService.moveServo()
        } else{
            // reject item
            setStatus(MachineState.REJECT)
        }

        await sleep(1000)
        setStatus(MachineState.READY)
    }

    useEffect(  () => {
        console.log("STATUS CHANGED")
        servoService.updateLight(status)
    }, [status])

    return (
        <>
            { status }
            <ConfirmModal isOpen={isOpen} onOpen={onOpen} onClose={onClose} onConfirm={onConfirm}/>
            <div className="w-screen flex flex-col place-items-center">
                <Heading as="h2" size="2xl">
                    Please insert item
                </Heading>
                <span>Insert once at a time</span>
                <Button onClick={async () => {await moveServoHandler()}}>Test me</Button>
                <div className="flex flex-row m-3 space-x-3 ">
                    <div className="">
                        <CustomWebcam
                            width={420}
                            height={720}
                            isCaptureEnable={isStart}
                            setStatus={setStatus}
                        />
                    </div>
                    <div className="flex flex-col space-y-7">
                        <div className="w-72 h-1/2 bg-amber-500 flex flex-col place-items-center p-5">
                            <Text fontSize="2xl">Point</Text>
                            <Text fontSize="2xl">50000000</Text>
                        </div>
                        <div className="w-72 h-1/2 flex flex-row justify-items-start">
                            <div>
                                <img
                                    src="https://placehold.co/120"
                                    width={120}
                                    height={120}
                                />
                            </div>
                            <div className="ml-3 mt-1">
                                <Text fontSize="xl">Capacity</Text>
                                <Text fontSize="xl">33%</Text>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="w-full bg-indigo-400 flex flex-col place-content-center m-5">
                    <Button
                        colorScheme="orange"
                        size="lg"
                        onClick={onOpen}
                    >
                        Finish
                    </Button>
                </div>
            </div>
        </>
    )
}