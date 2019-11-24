import { History } from 'history';

export interface IServerContext {
  axiosLogin: (historyProps: History, userCallback: () => boolean, userIdCallback: () => string) => void;
}
