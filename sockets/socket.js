import { Server } from 'socket.io';

export const setUpSockets = (server) => {
    const io = new Server(server);

    io.on('connection', (client) => {
        console.log('Cliente conectado');

        client.on('disconnect', () => {
            console.log('Cliente desconectado');
        });

        client.on('mensaje', (payload) => {
            console.log('Mensaje recibido:', payload.usuario);
            io.emit('mensaje', {admin: 'Nuevo mensaje'});
        });
    });
}
