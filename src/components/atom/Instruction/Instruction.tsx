import { Text } from '@chakra-ui/react'
import { Heading } from '@chakra-ui/react'

interface IProps {
    index: number;
    thumbnail: string;
    description: string
}
export const Instruction = (props: IProps) => {
    return (
        <div className="flex justify-start">
            <img
                src={props.thumbnail}
                alt={props.index.toString()}
                width={150}
                height={150}
            />
            <div className="flex flex-col m-4 justify-start">
                <Heading as='h3' size='xl' >
                    {props.index}
                </Heading>
                <Text fontSize='lg'>{props.description}</Text>
            </div>
        </div>
    )
}
