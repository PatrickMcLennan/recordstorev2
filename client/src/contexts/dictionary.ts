import { History } from 'history';

export interface IServerContext {
  axiosLogin: (historyProps: History, userCallback: () => boolean, userIdCallback: () => string) => void;
}

export interface IUserContext {
  user: boolean;
  userId: string;
  setUser: () => boolean;
  setUserId: () => string;
}
