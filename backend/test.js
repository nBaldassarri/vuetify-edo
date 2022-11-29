const five = require('johnny-five');

const http = require('http');
const socketIo = require('socket.io');

const server = http.createServer().listen(5000, () => { });
const policy = {
  cors: {
    origin: "*",
  },
};

const io = socketIo(server, policy);

// PIU ARDUINO PARTEEEE

const board = new five.Board({port: 'COM3'});

const pin = {
  13: {led: {}},
};    


board.on('ready', () => {
  const led = new five.Led(13);
  led.off();
  pin[13].led = led;
});

io.sockets.on('connection', (socket) => {
    socket.on("on", (data) => {
        pin[data].led.blink(500);
    });
    socket.on("off", (data) => {
        pin[data].led.stop();
        pin[data].led.off();
    });
});