import { Button, Heading } from '@chakra-ui/react'
import { Instruction } from '@/components/atom/Instruction/Instruction'
import {IInstruction} from "@/models/Instruction";

interface IProp {
    setStart: (isStart: boolean) => void;
}
export function StartingPage (props: IProp) {
    const instructions: IInstruction[] = [
        {
            description: 'Press the "Start" button on the screen to begin.',
            thumbnail: 'https://placehold.co/400',
        },
        {
            description: 'Insert PET Plastic bottles ONCE item at a time.',
            thumbnail: 'https://placehold.co/400',
        },
        {
            description: 'Press the "Finish" button and confirm to end process.',
            thumbnail: 'https://placehold.co/400',
        },
        {
            description: 'Select your option with Donate point or Collecting point.',
            thumbnail: 'https://placehold.co/400',
        },
        {
            description: 'Input your phone number to get points and exchange them for rewards.',
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
                    <span>
                        Recycle to earn rewards for PET Plastic 5 Steps to earn
                        point.
                    </span>
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
                <Button colorScheme="orange" size="lg" onClick={() => {
                    props.setStart(true);
                }}>
                    Start
                </Button>
            </div>
        </>
    )
}