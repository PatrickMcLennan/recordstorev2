import React, { createContext, ProviderProps, Consumer, useState } from 'react';

import { IUserContext } from './dictionary';

const UserContext = createContext({} as IUserContext);

const UserContextProvider: React.FC = ({ children }: ProviderProps<IUserContext>) => {
  const [user, setUser]: [boolean, any] = useState(false);
  const [userId, setUserId]: [string, any] = useState('ffdfs');

  return <UserContext.Provider value={{ user, userId, setUser, setUserId }}>{children}</UserContext.Provider>;
};

const UserContextConsumer: Consumer<IUserContext> = UserContext.Consumer;

export { UserContextConsumer, UserContext, UserContextProvider };
