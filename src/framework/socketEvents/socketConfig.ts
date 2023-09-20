import { Socket } from 'socket.io';
import { DefaultEventsMap } from 'socket.io/dist/typed-events';

/** */
export function socketConfig(
  socket: Socket<DefaultEventsMap, DefaultEventsMap, DefaultEventsMap, any>
) {
  console.log('a user connected');

  socket.on('MLG event', (data) => {
    console.log('received event from client', data);

    // Send a response back to the client
    socket.emit('event response', { message: 'You have a message!' });
  });

  socket.on('disconnect', () => {
    console.log('user disconnected');
  });
}
