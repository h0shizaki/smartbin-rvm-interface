import { Button, Heading } from '@chakra-ui/react'
import { Instruction } from '@/components/atom/Instruction/Instruction'
import { IInstruction } from '@/models/Instruction'
import { useTranslations } from 'next-intl'
import { redirect } from 'next/navigation'
import Link from 'next/link'

interface IProp {
    setStart: (isStart: boolean) => void
}

export function StartingPage(props: IProp) {
    const t = useTranslations('StartPage')
    const instructions: IInstruction[] = [
        {
            description: t('step_one'),
            thumbnail: 'https://placehold.co/400',
        },
        {
            description: t('step_two'),
            thumbnail: 'https://placehold.co/400',
        },
        {
            description: t('step_three'),
            thumbnail: 'https://placehold.co/400',
        },
        {
            description: t('step_four'),
            thumbnail: 'https://placehold.co/400',
        },
        {
            description: t('step_five'),
            thumbnail: 'https://placehold.co/400',
        },
    ]

    return (
        <>
            <div className="m-5">
                <center>
                    <Heading as="h2" size="2xl">
                        Smart bin
                    </Heading>
                    <span>{t('sub_header')}</span>
                </center>
            </div>
            <div className="p-2 m-3 flex flex-col space-y-5 justify-items-center">
                {instructions.map((instruction, index) => (
                    <Instruction
                        description={instruction.description}
                        thumbnail={instruction.thumbnail}
                        key={index}
                        index={index + 1}
                    ></Instruction>
                ))}

                <Link
                    href={'/dashboard'}
                    className="flex flex-col space-y-5 justify-items-center"
                >
                    <Button colorScheme="orange" size="lg">
                        {t('start')}
                    </Button>
                </Link>
            </div>
        </>
    )
}
