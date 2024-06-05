'use client';

import { Button, Heading, Text, useDisclosure } from '@chakra-ui/react'
import CustomWebcam from '@/components/molecule/CustomWebcam/CustomWebcam'
import { ConfirmModal } from '@/components/atom/Modal/ConfirmModal'
import React, { useState } from 'react'
import { useRouter } from 'next/navigation';
import {moveServo} from "@/services/ServoService";
import {useTranslations} from "next-intl";

interface IProps {
    isStart: boolean
}

export const Dashboard = ({ isStart }: IProps) => {
    const t = useTranslations('Dashboard');
    const router = useRouter()
    const { isOpen, onOpen, onClose } = useDisclosure()
    const onConfirm = ():void =>  {
        console.log("Hello World")
        onClose()
        // if(pointEarned > 1 ){
        //    TODO: navigate to point collecting page
            router.push("/about")
        // }else{
        //    TODO: navigate to home page
        // window.location.reload()
        // }
    }

    const socketCall = async () => {
        console.log("socket called")
        // await moveServo()
        const socket = new WebSocket('ws://localhost:8765' )
        await socket.send("MOVE")
    }
    return (
        <>
            <ConfirmModal
                isOpen={isOpen}
                onOpen={onOpen}
                onClose={onClose}
                onConfirm={onConfirm}
            />
            <div className="w-screen flex flex-col place-items-center">
                <Heading as="h2" size="2xl">
                    {t('header')}
                </Heading>
                <span>{t('sub_header')}</span>
                <Button
                    onClick={async () => {
                        await socketCall()
                    }}
                >
                    Test me
                </Button>
                <div className="flex flex-row m-3 space-x-3 ">
                    <div className="">
                        <CustomWebcam
                            width={420}
                            height={720}
                            isCaptureEnable={isStart}
                        />
                    </div>
                    <div className="flex flex-col space-y-7">
                        <div className="w-72 h-1/2 bg-amber-500 flex flex-col place-items-center p-5">
                            <Text fontSize="2xl">{t('point')}</Text>
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
                                <Text fontSize="xl">{t('amount_title')}</Text>
                                <Text fontSize="xl">33%</Text>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="w-full bg-indigo-400 flex flex-col place-content-center m-5">
                    <Button colorScheme="orange" size="lg" onClick={onOpen}>
                        {t('finish')}
                    </Button>
                </div>
            </div>
        </>
    )
}