import { MESSAGE } from "./message.type";

export type CHANNEL = {
  readonly id: string;
  created_at: string;
  sender: string;
  receiver: string;
  sender_name: string;
  sender_avatar: string;
  receiver_avatar: string;
  receiver_name: string;
  messages: MESSAGE[];
};
