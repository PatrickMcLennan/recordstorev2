import React from 'react';
import { RouteComponentProps } from 'react-router';
import usePageMount from 'Hook/usePageMount';

export interface INotificationsProps extends RouteComponentProps<{ userId: string }> {}

const Notifications: React.FC<INotificationsProps> = (props: INotificationsProps) => {
  usePageMount('Notifications');
  return <main>notifications</main>;
};

export default Notifications;
