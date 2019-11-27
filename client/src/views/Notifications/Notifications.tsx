import React from 'react';
import { RouteComponentProps } from 'react-router';

export interface INotificationsProps extends RouteComponentProps<{ userId: string }> {}

const Notifications: React.FC<INotificationsProps> = (props: INotificationsProps) => {
  return <main>notifications</main>;
};

export default Notifications;
