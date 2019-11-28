import React from 'react';
import { RouteComponentProps } from 'react-router';
import usePageMount from 'Hook/usePageMount';

export interface IMusicProps extends RouteComponentProps<{ userId: string }> {}

const Music: React.FC<IMusicProps> = (props: IMusicProps) => {
  usePageMount('Music');
  return <main>music page</main>;
};

export default Music;
