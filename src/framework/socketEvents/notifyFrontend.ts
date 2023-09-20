import { mainSocket } from '..';

/** Send a notification to the frontend */
export function notifyFrontend() {
  console.log('Se notificara front');

  mainSocket.emit('event response', { message: 'Records changed, update your data!' });
}
