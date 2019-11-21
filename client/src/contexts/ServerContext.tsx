import React, { createContext, ProviderProps, Consumer } from 'react';

import { IServerContext } from './dictionary';

const ServerContext = createContext({} as IServerContext);

const ServerContextProvider: React.FC = ({ children }: ProviderProps<IServerContext>) => {
  const login = historyProps => historyProps.push('/home/test');

  return <ServerContext.Provider value={{ login }}>{children}</ServerContext.Provider>;
};

const ServerContextConsumer: Consumer<IServerContext> = ServerContext.Consumer;

export { ServerContextConsumer, ServerContext, ServerContextProvider };
