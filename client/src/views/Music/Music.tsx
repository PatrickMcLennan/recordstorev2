import React from 'react';
import { RouteComponentProps } from 'react-router';

export interface IMusicProps extends RouteComponentProps<{ userId: string }> {}

const Music: React.FC<IMusicProps> = (props: IMusicProps) => {
  return <main>music page</main>;
};

export default Music;
