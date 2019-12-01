import React from 'react';
import { RouteComponentProps } from 'react-router';
import usePageMount from 'Hook/usePageMount';

export interface IMyAccountProps extends RouteComponentProps<{ userId: string }> {}

const MyAccount: React.FC<IMyAccountProps> = (props: IMyAccountProps) => {
  usePageMount('My Account');
  return (
    <main>
      <h2>my account</h2>
    </main>
  );
};

export default MyAccount;
