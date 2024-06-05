'use client'

import { Dashboard } from '@/components/molecule/ProgressPage/Dashboard'
import Switcher from '@/components/atom/LanguageSwitcher/Switcher'

export default function Home() {
    return (
        <>
            <Dashboard isStart={true} />
        </>
    )
}
