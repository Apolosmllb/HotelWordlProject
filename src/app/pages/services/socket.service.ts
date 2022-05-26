import { Injectable } from '@angular/core';
import { io } from 'socket.io-client';

@Injectable({
  providedIn: 'root'
})
export class SocketService {
  io = io("http://localhost:5800/",{
    withCredentials: true,
    autoConnect: true
  });
  constructor() { }
}
