import axios from 'axios'
import {MachineState} from "@/models/MachineState";

const localServoClient = axios.create({
    baseURL:  process.env.NEXT_PUBLIC_SERVO_SERVICE_URL,
    withCredentials: false,
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
    }
})

const moveServo = () => {
    return localServoClient.get('/move')
}

const updateLight = (value: MachineState) => {
    return localServoClient.put('/light', {data: value})
}


export default { moveServo, updateLight }