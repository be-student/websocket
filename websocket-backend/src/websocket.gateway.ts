import { SubscribeMessage, WebSocketGateway } from '@nestjs/websockets';

@WebSocketGateway(4000, { transports: ['websocket'], cors: true })
export class WebsocketGateway {
  @SubscribeMessage('message')
  handleMessage(client: any, payload: any): string {
    return 'Hello world!';
  }
}
