'use client'
import { useState } from 'react'
import { StartingPage } from '@/components/molecule/StartingPage/StartingPage'
import { Dashboard } from '@/components/molecule/ProgressPage/Dashboard'
import Switcher from '@/components/atom/LanguageSwitcher/Switcher'

export default function Home() {
    const [isStart, setIsStart] = useState<boolean>(false)
    const [locale, setLocale] = useState<'en' | 'th'>('en')
    return (
        <>
            <Switcher />
            {!isStart ? (
                <StartingPage setStart={setIsStart} />
            ) : (
                <Dashboard isStart />
            )}
        </>
    )
}
