import React from 'react';
import { RouteComponentProps } from 'react-router-dom';

interface IProps extends RouteComponentProps<{ userId: string }> {}

import usePageMount from 'Hook/usePageMount';

const Account = (props: IProps) => {
  usePageMount('Edit Account');
  return <main>hello</main>;
};

export default Account;
