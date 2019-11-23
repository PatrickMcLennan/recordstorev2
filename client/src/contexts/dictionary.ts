import { History } from 'history';

export interface IServerContext {
  axiosLogin: (historyProps: History) => void;
}
