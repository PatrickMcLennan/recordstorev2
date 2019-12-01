import React from 'react';
import { RouteComponentProps } from 'react-router';
import usePageMount from 'Hook/usePageMount';

import { monthDate } from 'Utility/dateFormatters';

export interface INewsProps extends RouteComponentProps<{ userId: string }> {}

const News: React.FC<INewsProps> = (props: INewsProps) => {
  usePageMount('News');
  return (
    <main>
      <h2>news for {monthDate(new Date())}</h2>
    </main>
  );
};

export default News;
