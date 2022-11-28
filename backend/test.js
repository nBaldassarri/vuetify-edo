const five = require('johnny-five');

const http = require('http');
const socketIo = require('socket.io');

const port = process.env.PORT || 5000;
const server = http.createServer().listen(port, () => { });
const board = new five.Board({port: 'COM3'});

const pin = {
  13: {
    led: {
      on: () => console.log('on'),
      off: () => console.log('off'),
    },
  },
};    

const io = socketIo(server, {
    cors: {
      origin: "*",
    },
});

board.on('ready', () => {
  const led = new five.Led(13);
  led.off();
  pin[13].led = led;
});

io.sockets.on('connection', (socket) => {
    socket.on("on", (data) => {
        pin[data].led.on();
    });
    socket.on("off", (data) => {
        pin[data].led.off();
    });
});