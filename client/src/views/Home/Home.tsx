import React from 'react';
import { IProps } from './dictionary';

const Home: React.FC<IProps> = ({
  match: {
    params: { userId }
  }
}: IProps) => {
  return (
    <main>
      <h2>u home dog</h2>
      <h2>{userId}</h2>
    </main>
  );
};

export default Home;
