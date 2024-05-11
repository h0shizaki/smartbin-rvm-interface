import {Button, Heading, Text} from "@chakra-ui/react";
import CustomWebcam from "@/components/molecule/CustomWebcam/CustomWebcam";

interface IProps {
    isStart: boolean;
}
export const Dashboard = ({isStart}: IProps) => {
    return (
        <div className="w-screen flex flex-col place-items-center">
            <Heading as="h2" size="2xl">
                Please insert item
            </Heading>
            <span>Insert once at a time</span>
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
                <Button colorScheme="orange" size="lg">
                    Finish
                </Button>
            </div>
        </div>
    )
}