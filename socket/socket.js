const {io} = require('../index');

// socket sms
io.on('connection', client => {
    console.log('Cliente conectado')
    client.on('disconnect', () => console.log('Cliente desconectado'));
    client.on('mensaje', (data) => {
        io.emit('mensaje', {
            mensaje: 'Mensaje para el servidor'
        });
        client.emit('mensaje', {
            mensaje: 'Mensaje para el cliente'
        });
    });
});
