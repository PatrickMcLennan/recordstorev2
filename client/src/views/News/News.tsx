import React from 'react';
import { RouteComponentProps } from 'react-router';
import usePageMount from 'Hook/usePageMount';

export interface INewsProps extends RouteComponentProps<{ userId: string }> {}

const News: React.FC<INewsProps> = (props: INewsProps) => {
  usePageMount('News');
  return <main>hello this is news</main>;
};

export default News;
