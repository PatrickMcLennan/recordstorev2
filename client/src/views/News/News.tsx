import React from 'react';
import { RouteComponentProps } from 'react-router';

export interface INewsProps extends RouteComponentProps<{ userId: string }> {}

const News = (props: INewsProps) => {
  return <main>hello this is news</main>;
};

export default News;
