import React, { createContext, ProviderProps, Consumer } from 'react';

import { IServerContext } from './dictionary';

const ServerContext = createContext({} as IServerContext);

const ServerContextProvider: React.FC = ({ children }: ProviderProps<IServerContext>) => {
  const axiosLogin = (historyProps, userCallback, userIdCallback): void => {
    // Make Server call here
    userCallback(true);
    userIdCallback('fake-user-id');
    return historyProps.push(`/home/fake-user-id`);
  };

  return <ServerContext.Provider value={{ axiosLogin }}>{children}</ServerContext.Provider>;
};

const ServerContextConsumer: Consumer<IServerContext> = ServerContext.Consumer;

export { ServerContextConsumer, ServerContext, ServerContextProvider };
