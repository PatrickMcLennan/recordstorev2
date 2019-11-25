import React, { createContext, ProviderProps, Consumer, useState } from 'react';
import { ISong } from 'Utility/dictionary';

const UserContext = createContext({} as IUserContext);

interface IUserContext {
  currentPage: string[];
  user: boolean;
  userId: string;
  notifications: string[];
  setCurrentPage: (windowUrl: string) => string[];
  setUser: () => boolean;
  setUserId: () => string;
}

const UserContextProvider: React.FC = ({ children }: ProviderProps<IUserContext>) => {
  const [currentPage, setCurrentPage]: [string[], any] = useState(window.location.href.split('/'));
  const [user, setUser]: [boolean, any] = useState(true);
  const [userId, setUserId]: [string, any] = useState('ffdfs');

  const notifications = [...Array(10).keys()].map(number => `Test Notification ${number}`);

  return (
    <UserContext.Provider value={{ currentPage, notifications, user, userId, setCurrentPage, setUser, setUserId }}>
      {children}
    </UserContext.Provider>
  );
};

const UserContextConsumer: Consumer<IUserContext> = UserContext.Consumer;

export { UserContextConsumer, UserContext, UserContextProvider };
