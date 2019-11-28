import React from 'react';
import { RouteComponentProps } from 'react-router';
import usePageMount from 'Hook/usePageMount';

export interface IMessagesProps extends RouteComponentProps<{ userId: string }> {}

const Messages: React.FC<IMessagesProps> = (props: IMessagesProps) => {
  usePageMount('Messages');
  return <main>hello this is messages</main>;
};

export default Messages;
