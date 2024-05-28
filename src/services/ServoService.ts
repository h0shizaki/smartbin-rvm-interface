
const baseURL = localStorage.getItem('WS_SERVICE_URL') || process.env.WS_SERVICE_URL
const socket = new WebSocket(baseURL || 'ws://localhost:8765' )


export let moveServo = async () => {
    await socket.send("MOVE")
}