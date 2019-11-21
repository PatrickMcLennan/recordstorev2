import { History } from 'history';

export interface IServerContext {
  login: (historyProps: History) => void;
}
