'use client'
import { useState } from 'react'
import { StartingPage } from '@/components/molecule/StartingPage/StartingPage'
import Switcher from '@/components/atom/LanguageSwitcher/Switcher'

export default function Home() {
    const [isStart, setIsStart] = useState<boolean>(false)
    return (
        <>
            <StartingPage />
        </>
    )
}
