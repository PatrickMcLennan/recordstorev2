import React from 'react';
import { RouteComponentProps } from 'react-router-dom';

export interface IAccountProps extends RouteComponentProps<{ userId: string }> {}

import usePageMount from 'Hook/usePageMount';

const Account = (props: IAccountProps) => {
  usePageMount('Edit Account');
  return <main>hello</main>;
};

export default Account;
