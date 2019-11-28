import React, { useContext } from 'react';
import { RouteComponentProps } from 'react-router-dom';

import { UserContext } from 'Context/UserContext';

import usePageMount from 'Hook/usePageMount';

import { monthDate } from 'Utility/dateFormatters';

export interface IHomeProps extends RouteComponentProps<{ userId: string }> {}

const Home: React.FC<IHomeProps> = (props: IHomeProps) => {
  const { userId } = useContext(UserContext);

  usePageMount('Home');

  return (
    <main>
      <h2>What's new on {monthDate(new Date())}</h2>
    </main>
  );
};

export default Home;
