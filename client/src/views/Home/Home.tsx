import React, { useContext } from 'react';
import { IProps } from './dictionary';

import { UserContext } from 'Context/UserContext';

const Home: React.FC<IProps> = (props: IProps) => {
  const { userId } = useContext(UserContext);
  return (
    <main>
      <h2>u home dog</h2>
      <h2>{userId}</h2>
    </main>
  );
};

export default Home;
