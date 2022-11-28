import {io} from 'socket.io-client';

class SocketioService {
    socket;
    constructor() { }

    setupSocketConnection() {
        this.socket = io('https://localhost:5000')
        return this.socket;
    }
}

export default new SocketioService();