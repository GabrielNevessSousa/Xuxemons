export interface User {
    id: number;
    email: string;
    nick: string;
    nom: string;
    cognom: string;
    password: string;
    role:'usuari';
    token?:string;
  }
  